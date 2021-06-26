import React from 'react';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { Avatar, Badge } from 'antd';
const FileUpload = ({ values, setValues, setLoading }) =>{
const {user} = useSelector((state) =>({...state}));

    const fileUploadAndResize = (e) => {
        //console.log(e.target.files);

        //resize 
        let files = e.target.files;
        let allUploadedFiles = values.images;
        if (files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(files[i],720,720,'JPEG',100,0,
                (url)=>{
                    axios.post(`http://localhost:8000/api/uploadimages`,{image: url},{
                        headers:{
                            authtoken : user ? user.token : "",
                        }
                    })
                    .then((res)=>{
                        console.log("Image Upload data:- ",res);
                        allUploadedFiles.push(res.data);
                        setLoading(false);
                        setValues(({...values,images:allUploadedFiles}));
                    })
                    .catch((error)=>{
                        console.log(error);
                        setLoading(false);
                    })

                },"base64");
                
            }
        }
        //send ack to server to upload to cloudinary

        //set url to images arraay in the parent components i.e productCreate
    }

    const handleRemove = (public_id) =>{
        setLoading(true);
        axios.post(`http://localhost:8000/api/removeimage`,{public_id},{
            headers : {
                authtoken: user ? user.token : "",
            }
        }
        ).then((res)=>{
            setLoading(false);
            const {images} = values;
            let filteredImages = images.filter((Item) => {
                return Item.public_id !== public_id;
            });
            setValues(({...values,images: filteredImages}));
        })
        .catch((error)=>{
            setLoading(false);
            console.log(error);});
    }
    return(
        
        <div className="row">
        {values.images &&
          values.images.map((image) => (
            <Badge count="x" 
            key={image.public_id}
            onClick={() => handleRemove(image.public_id)}
            style={{cursor:'pointer'}}
            >
            <Avatar
            src={image.url}
            size={100}
            shape="square"
            className="ml-3"
            />
            </Badge>
          ))}
      </div>,
        <div className="row">
            <label className="btn btn-outline-primary">Choose File
            <input
            hidden
            type="file"
            multiple
            accept="images/*"
            onChange={fileUploadAndResize}
            />
            </label>
        </div>   
    );
}

export default FileUpload;