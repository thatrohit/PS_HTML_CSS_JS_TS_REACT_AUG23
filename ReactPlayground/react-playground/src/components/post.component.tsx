import React from "react";
import { PostModel } from "../models/post";

type PostProps = {
    postDetails: PostModel
}

export class Post extends React.Component<PostProps> {
    render() {
        return (
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Title Here</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            {this.props.postDetails.title}
                        </div>
                        <div className="card-body">
                            <p className="card-text text-left">
                                {this.props.postDetails.body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}
