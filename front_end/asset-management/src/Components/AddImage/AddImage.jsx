import React from "react"
import { useHistory } from "react-router-dom"
import styles from "./AddImage.module.css"
import Button from '@material-ui/core/Button';
import {post_img} from "./../../Redux/MainListingRedux/mainListingActions"
import { useDispatch } from "react-redux";


function AddImage()
{
    const history = useHistory()
    const [image_title, setImageTitle] = React.useState("")
    const [description, setDes] = React.useState("")
    const [imgURL, setImgURL] = React.useState("");
    const dispatch = useDispatch()

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

        if(image_title  && imgURL)
        {
            dispatch(post_img({image_title, description, imgURL}) )
            alert("Added!")
        }
        else
        {
            alert("You left title or image url blank")
        }

    }
   

        // console.log(image_title, description, imgURL)
    return(
        <>
            <div className={styles.AddImageTitle}>
                <p>
                    Add Image
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

export default AddImage