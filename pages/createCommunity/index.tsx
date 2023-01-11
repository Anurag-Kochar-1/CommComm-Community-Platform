import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { communityCategoriesArray, communitySubCategoriesArray } from "../../constants/createCommunityPage/communityCategories"
import { addDoc, arrayUnion, collection, doc, increment, updateDoc } from 'firebase/firestore'
import { db, auth } from '../../firebaseConfig'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'
import { setIsBottomBarVisible } from '../../redux/slices/bottomBarSlice'



const Index = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const dispatch = useDispatch()
  const [communityNameInputValue, setCommunityNameInputValue] = useState<string>("")
  const [communityCategory, setCommunityCategory] = useState<string>(communityCategoriesArray[0].label)
  const [communitySubCategory, setCommunitySubCategory] = useState<string>(communitySubCategoriesArray[0].parentLabel)
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(true)

  const communitiesCollectionRef = collection(db, "communities")


  const createCommunity = async  () => {
    if(!communityNameInputValue || communityCategory === "Choose Category" || communitySubCategory ===  "Choose Sub Category" ) {
      alert("Fill the fields")
    } else {
      console.log("creating community")
      const addingCommunityDoc = await addDoc(communitiesCollectionRef, {
        communityID : "",
        communityName: communityNameInputValue,
        communityCategory: communityCategory,
        communitySubCategory : communitySubCategory,
        communityLogo : "https://firebasestorage.googleapis.com/v0/b/th3-hackathon.appspot.com/o/postImages%2F6cf18550-5ca7-491f-9725-171e5c38b6fc--220703-minions-music-hero_tfqnbm.jpg?alt=media&token=8c0fc36a-394a-413c-9b49-2e86342095a3",
        communityBanner : "https://firebasestorage.googleapis.com/v0/b/th3-hackathon.appspot.com/o/postImages%2F132cd51d-593f-4b77-86ed-1ae1c895f70f--8i1bx8y9p3t9x223bjhf.png?alt=media&token=448d7efb-5982-436f-977f-04970af12537",
        communityMembersID : [auth?.currentUser?.uid],
        communityOwnerID: auth?.currentUser?.uid,
        communityOwnerDisplayName: auth?.currentUser?.displayName,
        communityOwnerEmail: auth.currentUser?.email,
        communityPostsID: [],
        communityDescription: `This is community if for  ${communityCategory} (${communitySubCategory}), made by ${user?.displayName}`
      })

      const communityRef = doc(db, "communities", addingCommunityDoc.id)

      // adding communityID manually hehe
      await updateDoc(communityRef, {
        communityID: addingCommunityDoc?.id
      })

      // updating user and Sending Coins to user
      const userRef = doc(db, "users", auth?.currentUser?.uid as string)
      const updateUser = await updateDoc(userRef, {
          communitiesJoinedID: arrayUnion(communityRef.id),
          communitiesOwnedID: arrayUnion(communityRef.id),
          userCoins: increment(50)
      })



      router.push(`/community/${addingCommunityDoc.id}`)

      // resetting states
      setCommunityNameInputValue("")

      

    }
  }


  useEffect(() => {
    if(!user && loading === false) {
      router.push("/register")
    }
    },[loading])

  return (
    <div className='fixed inset-0 w-[100%] h-[100vh] bg-BrutalOrange1 flex flex-row justify-center lg:justify-end items-center lg:px-32 xl:px-40 2xl:px-72 '>

      <div className='z-50 w-full h-[90vh] mb-[10vh] lg:mb-0 sm:w-[70%] sm:h-[70vh] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[35%] bg-white rounded-md flex flex-col justify-start items-start pt-10 pb-5 px-5 space-y-5 overflow-x-hidden overflow-y-scroll scrollbar-hide'>

        {/* ---- LOGO ---- */}
        <div className='flex justify-center items-center space-x-3'>
          <div className='w-6 h-6 rounded-full bg-BrutalBlack1' />
          <span> TBH </span>
        </div>

        {/* ---- Heading ----- */}
        <h1 className='text-3xl font-bold' onClick={() => console.log(communityCategory + " ___ " + communitySubCategory + `___ Name -> ${communityNameInputValue}`)}> Create a Community </h1>


        {/* ---- Fill community details ---- */}
        <div className='w-full h-full flex flex-col items-start justify-start'>
          <p className='font-medium text-sm text-gray-900'> Your own community where you and others can build good habits and skills with the support of each other  </p>

          <div className='w-full flex flex-col justify-between items-start space-y-4 py-3 mt-4'>

            {/* ---- Name ---- */}
            <div className='w-[90%] h-10 relative bg-black flex justify-start items-center'  onMouseEnter={() => dispatch(setIsBottomBarVisible(false))} onMouseLeave={() => dispatch(setIsBottomBarVisible(true))}>
              <input
                value={communityNameInputValue}
                onChange={(e) => setCommunityNameInputValue(e.target.value)}
                required
                type="email"
                placeholder='Community Name'
                className='w-full h-10 absolute right-1 bottom-1 text-black placeholder:text-black outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
              />
            </div>

            {/* ---- Category ---- */}
            <div className='w-[90%] h-10 relative bg-black flex justify-start items-center '>
              <select
                title='choose'
                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                value={communityCategory}
                onChange={(e) => {
                  setCommunityCategory(e.target.value)
                  setCommunitySubCategory(communitySubCategoriesArray[0].parentLabel)
                  setIsDemoOpen(false)
                }}
              >
                {communityCategoriesArray && communityCategoriesArray?.map((category) => {
                  return (
                    <option
                      key={category.id}
                      value={category.value}
                      className='bg-white px-2 py-3 text-black text-base'
                    > {category.label} </option>
                  )
                })}
              </select>
            </div>

            {/* Sub Categories */}
            {communityCategory !== communityCategoriesArray[0].label && <div className='w-[90%] h-10 relative bg-black flex justify-start items-center'>
              <select
                title='choose'
                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
                value={communitySubCategory}
                onChange={(e) => setCommunitySubCategory(e.target.value)}
              >

                {communitySubCategoriesArray && communitySubCategoriesArray.filter((subCategory) => {
                  if (subCategory.parentValue === communityCategory) {
                    // console.log(subCategory)
                    return subCategory
                  } else {
                    return
                  }
                }).map((subC) => {
                  return (
                    subC.subCategories.map((sub) => {
                      return <option
                        key={sub.id}
                        value={sub.value}
                        onChange={() => setCommunitySubCategory(sub.value)}
                        className='bg-white px-2 py-3 text-black text-base'
                      > {sub.label} </option>
                    })
                  )
                })

                }

              </select>
            </div>}


            {/* Demo  communityCategory === communityCategoriesArray[0].label */}
            {communityCategory === communityCategoriesArray[0].label && <div className='w-[90%] h-10 relative bg-BrutalPurple1 flex justify-start items-center'>
              <select
                title='Choose Sub Category'
                className='w-full h-10 absolute right-1 bottom-1 outline-none focus:ring-0 px-2 placeholder:px-2 border-2 border-black'
              >

                <option
                  key={"Choose Sub Category"}
                  value={"Choose Sub Category"}
                  className='bg-white px-2 py-3 text-black text-base'
                > {"Choose Sub Category"} </option>

              </select>
            </div>}


          </div>


          {/* ---- Create Button div ---- */}
          <div className='w-full h-full flex justify-end items-center py-5'>
            <button
              onClick={createCommunity}
              type='button'
              title='singIn'
              className='w-20 md:w-32 h-10 relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
              <span className='w-20 md:w-32 h-10 absolute bottom-[2px] right-[2px] bg-BrutalGreen1  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0'>
                <p className='text-xs md:text-sm font-medium'> Create  </p>
              </span>
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Index

