import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from '../../api/Api';

function Admin() {
    const [loadings, setLoadings] = useState([false, false, false]);

    const [image, setImage] = useState("");
    const [projectlink, setProjectlink] = useState("");


    const newsComment = async (e) => {
        e.preventDefault()
        let newComment = {
            image,
            projectlink,
        }
        console.log(newComment)
        await axios.post("/project/create", newComment)
            .then(res => {
                // setIsLoading(false)
                window.alert("Muvafaqqiyatli joylandi")
            }

            )
            .catch(err => {
                // setIsLoading(false)

                console.log(err)
            })

    }
    return (
        <div className='Admin'>
            <div className="">
                <h1>Send news</h1>

                <div className="mt-[500px]">
                    <form onSubmit={newsComment}>
                        <Input placeholder="Upload Image" onChange={(e) => setImage(e.target.value)} />
                        <Input placeholder="Upload Title" onChange={(e) => setProjectlink(e.target.value)} />
                        <button className='btn'>send</button>
                    </form>
                </div>
            </div>


            <div className="">
                <h1>Add teacher</h1>

                <div className="">
                </div>
            </div>

        </div>
    );
}

export default Admin;
