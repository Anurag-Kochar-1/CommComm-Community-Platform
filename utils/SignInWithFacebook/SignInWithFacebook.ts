import { FacebookAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "../../firebaseConfig"



const SignInWithFacebookFunction = async () => {
    console.log(`---- SignInWithFacebookFunction is running ----- `)
    const FbProvider = new FacebookAuthProvider()

    try {
        const result = await signInWithPopup(auth, FbProvider)
        const userRef = doc(db, "users", result?.user.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
            console.log(`User already Exist => ${userDoc.id}`);
        } else {
            console.log(`Creating User !!!!!! `);
            await setDoc(doc(db, "users", result?.user?.uid), {

                userName: result?.user?.displayName,
                userDisplayPicture: result?.user?.photoURL,
                userEmail: result?.user?.email,
                userID: result?.user?.uid,

                communitiesJoinedID: [],
                communitiesOwnedID: [],
                createdPostsID: [],
                likedPostsID: [],
                dislikedPostsID: [],

                userCoins : 100,
                userProfileBanner: ""
            })
            
            const credantial = FacebookAuthProvider.credentialFromResult(result)
            const token = credantial?.accessToken;
            let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
            await updateProfile(auth?.currentUser as any, { photoURL: photoUrl });
        }

        

    } catch (error) {
        console.log(error)
    }

}



export { SignInWithFacebookFunction }