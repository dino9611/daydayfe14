import React, { Component } from 'react';
import Axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
class Home extends Component {
    state = {
        posts:[]
    }
    componentDidMount(){
        Axios.get(`http://localhost:4000/posts?_embed=comments&_embed=likes&_expand=user`)
        .then((res)=>{
            // console.log(res.data)
            this.setState({posts:res.data})
        }).catch((err)=>{

        })
    }

    // componentDidUpdate(){

    // }
    // componentWillUnmount(){

    // }

    renderPost=()=>{
        return this.state.posts.map((val,index)=>{
            return(
                <div key={index} className='col-md-3'>
                     <Card>
                        <CardImg top width="100%" src={val.gambar} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>caption</CardTitle>
                            <CardSubtitle>{val.caption}</CardSubtitle>
                            <CardText>comment {val.comments.length} dan likes {val.likes.length}</CardText>
                            <CardText>diposting oleh {val.user.username}</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }

    render() {
        
        return ( 
            <div>
                <div className="row">
                    {this.renderPost()}
                </div>
            </div>
         );
    }
}
 
export default Home;