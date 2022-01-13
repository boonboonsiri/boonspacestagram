import React, {Component} from 'react';
import Canvas from './canvas.js'
import axios from 'axios';

class Canvases extends Component {

    constructor(props){
        super(props)
        this.state={canvases:[], hasCalled:false}
    }
    
    generateCanvases(){
        var self = this;

        for(var i = 0; i < 5; i++){
            const date = new Date(Date.now() - 24 * 3600 * 1000*20)

            axios.get('https://api.nasa.gov/planetary/apod?start_date='+date.getFullYear()+"-"+String(parseInt(date.getMonth())+1)+"-"+date.getDate()+'&api_key=kQv670YToeq0SuZ39J2d1V9rMjqZkVsjwNeLkYHt')
            .then(function (response) {

               var newCanvases= []

               for(var i = response.data.length-1; i >= 0; i--){
                var passObj = {
                    img: response.data[i].hdurl,
                    title: response.data[i].title,
                    date: response.data[i].date,
                    data: response.data[i].explanation
                   }
                   newCanvases.push(passObj)
               }
               self.setState(prevState => ({
                   canvases: newCanvases,
                   hasCalled: true
               }))
            })
           .catch(function (error) {
              console.log(error);
           });

        }

    }
      

    render() {
        var canvases = this.state.canvases

        if(!this.state.hasCalled){
            this.generateCanvases()  // Generate canvases    
        }

        return(
            <>
                {canvases.map((passObj, i) => {
                    return <Canvas obj={passObj}/>;
                })}
            </>
        )
    }  

}


export default Canvases;