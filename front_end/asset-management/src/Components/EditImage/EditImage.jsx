import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import styles from "./EditImage.module.css"
import Button from '@material-ui/core/Button';
import {get_single_img, edit_img} from "./../../Redux/MainListingRedux/mainListingActions"
import { useDispatch,  useSelector } from "react-redux";


function EditImage()
{
    const singleListing = useSelector(state => state.listingsRoot.single_listing)
    // console.log(singleListing)
    const history = useHistory()
    const params = useParams()
    const [image_title, setImageTitle] = React.useState("")
    const [description, setDes] = React.useState("")
    const [imgURL, setImgURL] = React.useState("");
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch( get_single_img(params.id) )
    }, [])

    const handleCLick = () => {

        history.push("/")

    }

    const handleTitleChange = (e) => {

        setImageTitle(e.target.value)
    }

    const handleDesChange = (e) => {

        setDes(e.target.value)
    }

    const handleURLChange = (e) => {

        setImgURL(e.target.value)
    }

    const handleSave = () => {

        dispatch( edit_img({ image_title: image_title || singleListing.title, description: description || singleListing.description, imgURL:  imgURL || singleListing.imageURL  },params.id ) )
        alert("Changes saved")
    }
   

        // console.log(image_title, description, imgURL)
    return(
        <>
            <div className={styles.AddImageTitle}>
                <p>
                    Edit Image
                </p>
                <div>
                <Button onClick={handleCLick} variant="contained" color="primary">
                    Back
                </Button>
                </div>
            </div>

            <div className={styles.formAndImageUpload}>

                <div className={styles.imageDetails}>
                    <input placeholder="Title" name="image_title" required onChange={handleTitleChange} />
                    <br/>
                    <textarea placeholder="description" rows="10" name="description" onChange={handleDesChange}>

                    </textarea>
                </div>
                <div className={styles.imageBox} style={{backgroundImage: `url(${imgURL})`, backgroundSize:"cover"}} >
                    
                    <input type="url" required name="imgURL" placeholder="Enter image url" onChange={handleURLChange} />
                    
                </div>
            </div>



            <Button onClick={handleSave} style={{marginTop: "50px"}} className={styles.SaveBtn} variant="contained" color="primary">
                    Save
            </Button>


        </>
    )
}

export default EditImage