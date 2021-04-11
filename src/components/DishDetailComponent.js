import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const comments = this.props.detail.comments.map((comment) => {
            return( 
                <div>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {comment.date}</p>
                </div>
            );
        })

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.detail.image} alt={this.props.detail.name} />
                        <CardBody>
                            <CardTitle>{this.props.detail.name}</CardTitle>
                            <CardText>{this.props.detail.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {comments}
                </div>
            </div>
        );
    }

}

export default DishDetail;