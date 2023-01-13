
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { auth, db } from '../../firebaseConfig'

const SignInWithGoogleFunction = async () => {
    console.log(`---- googleAuthFucntion is running ---- `)
    const googleProvider = new GoogleAuthProvider()

    try {
        const result = await signInWithPopup(auth, googleProvider)
        const userRef = doc(db, "users", result?.user.uid)
        const userDoc = await getDoc(userRef)

        if(userDoc.exists()) {
            console.log(`User already Exist => ${userDoc.id}`);
            
        } else {
            console.log(`Creating User !!!!!! `);
            await setDoc(doc(db, "users", result?.user?.uid), {
                communitiesJoinedID: [],
                communitiesOwnedID: [],
                createdPostsID: [],
                likedPostsID: [],
                dislikedPostsID: [],

                userCoins : 100
            })
        }

        
    } catch (error) {
        alert(error)
    }
}


export {SignInWithGoogleFunction}