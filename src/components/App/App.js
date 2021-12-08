import AppHeader from "../AppHeader/AppHeader"
import PostAddForm from "../PostAddfForm/PostAddForm"
import PostList from "../PostList/PostList"
import PostStatusFilter from "../PostStatusFiltr/PostStatusFilter"
import SearchPanel from "../SearchPanel/SearchPanel"
import "./App.css"

import React from "react"

    export default class App extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data : [
                    {lebel:"Going to learn React Js",important:false, like:false, id:1},
                    {lebel:"That so good",important:false, like:false, id:2},
                    {lebel:"I need a berak...",important:false, like:false, id:3}
                ],
                term:"",
                filter:"all"
            };

            this.deletid= this.deletid.bind(this);
            this.addITem = this.addITem.bind(this);
            this.onToggleLiked=this.onToggleLiked.bind(this);
            this.onToggleImportant=this.onToggleImportant.bind(this);
            this.onUpdateSearch = this.onUpdateSearch.bind(this);
            this.onFilterSelect = this.onFilterSelect.bind(this);

            this.maxId = 4
        };



        deletid(id){
            this.setState(({data})=> {
                const index = data.findIndex(elem => elem.id === id);
                const befor = data.slice(0,index);
                const after = data.slice(index + 1);
                const newArr = [ ...befor, ...after]

                return{
                    data: newArr
                }
            })
        }


        addITem(body){
            const  newItem = {
                lebel:body,
                important:false,
                id:this.maxId++
            }
            this.setState(({data})=> {
                const newArr = [...data, newItem];
               return{
                    data:newArr
                }
            })
        }


        onToggleImportant(id){
            this.setState(({data})=> {
                const index = data.findIndex(elem => elem.id === id);
                
                const oldItem = data[index] 
                const newItem = {...oldItem,important:!oldItem.important}
                
                const newArr= [...data.slice(0,index),newItem, ...data.slice(index +1)]
              
                return{
                    data: newArr
                }
            })
        }

        onToggleLiked(id){
          this.setState(({data})=> {
              const index = data.findIndex(elem => elem.id === id);
              
              const oldItem = data[index] 
              const newItem = {...oldItem,like:!oldItem.like}
              
              const newArr= [...data.slice(0,index),newItem, ...data.slice(index +1)]
            
              return{
                  data: newArr
              }
          })
        };

        searchPost(items,term){
            if(term.length === 0){
                return items
            }
            return items.filter(item => {
                return item.lebel.indexOf(term) > -1
            })
        }

        filterPost (items, filter){
            if(filter === "like"){
                return items.filter(item => item.like)
            }else{
                return items
            }
        }

        onUpdateSearch(term){
            this.setState({term});
        }


        onFilterSelect(filter){
            this.setState({filter})
        }

        render(){
            const {data,term,filter}=this.state
            const liked =  data.filter(item => item.like).length;
            const allPosts = data.length;


            const visblePost = this.filterPost(this.searchPost(data, term),filter)

            return(
                <div className="App">
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="searchpanel">
                     <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                     <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                 <PostList 
                 posts={visblePost} 
                 onDelet={this.deletid}
                 onToggleImportant={this.onToggleImportant}
                 onToggleLiked={this.onToggleLiked}
                 />
                 <PostAddForm onAdd={this.addITem}/>
                 </div>
            )
        }
    }
