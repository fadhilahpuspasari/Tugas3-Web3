import React from 'react';
import PortfolioCard from './PortfolioCard';


class Portfolio extends React.Component {
    state = {
        count: 0,

        portfolioData : [
            {
                name : "fadpus",
                title : "Photography",
                link : "hhttps://www.instagram.com/fadhilahpuspasari/",
                desc : "I began to pursue photography since class 1 high school. I am very interested in photography and really like to explore things. All photos produced using a smartphone camera."
            },
            {
                name : "sport",
                title : "Sports",
                link : "https://www.youtube.com/watch?v=rTVObLjfBpo",
                desc : "I have won various sports, such as volleyball, table tennis, badminton and running. I don't know why but I really like sports. I want to try all sports. I once participated in a national javelin throwing competition."
            },
            {
                name : "music",
                title : "Music",
                link : "https://www.youtube.com/channel/UC9SkSP7FKtIckHWDecSuOxg?view_as=subscriber",
                desc : "Music is my life. Guitar is my bestfriend. And singing is my release."
            }
        ]
    }

    prevPortfolio = () => {
        const {count} = this.state;

        if(count==0){
            this.setState({
                count: 2
            })
            return;
        }
        const nextCount = count-1;
        this.setState({
            count: nextCount
        })
    }


    nextPortfolio = () => {
        const {count} = this.state;

        if(count==2){
            this.setState({
                count: 0
            })
            return;
        }
        const nextCount = count+1;
        this.setState({
            count: nextCount
        })
    }

    render(){
        const {count,portfolioData} = this.state;
    return (
        <div className="container h-100 mx-0 mt-5 p-0 position-relative d-flex align-items-center" style={{color:"#000533"}}>
            <span>

                    
        <h1 className="text-center">My Portfolio</h1>  

            <div className="row">
                <div onClick={this.prevPortfolio} className="col-2 d-flex align-items-center">
                    <a href="#" onClick={this.nextPortfolio}>
                    <i  style={{fontSize:"56px",color:"#f6c7d0"}} className="fas fa-arrow-circle-left ml-auto"></i>
                    </a>
                </div>
                <div className="col ">
                    {portfolioData.map((port,index)=>{
                        if(count==index){
                            return <PortfolioCard data={port}/>
                        }
                        
                    })}

                </div>
                <div  className="col-2 d-flex align-items-center">
                    <a href="#" onClick={this.nextPortfolio}><i  style={{fontSize:"56px",color:"#f6c7d0"}} className="fas fa-arrow-circle-right"></i></a>

                </div>
            </div>
            
            {/* <div className="row h-75 p-0 mr-5 position-absolute d-flex align-items-center w-50" style={{backgroundColor:"",overflowY:"scroll",bottom:"",left:"20%",right:"",border:"1px #f6d4b4 solid"}}>
                <div className="col">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>

                </div>
            </div> */}
            </span>
        
        </div>
    )
}

}

export default Portfolio;