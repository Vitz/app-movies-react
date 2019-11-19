import React from 'react'



class Tags extends React.Component {
    state = {
        tags: [{ "id": "1", "user_id": "1", "tag" : "tag", "timestamp": "0", "movie_id": "0" },{ "id": "1", "user_id": "1", "tag" : "tag", "timestamp": "0", "movie_id": "0" }]
    }

    getLastUrlSegment() {
        var parts = window.location.href.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
        return lastSegment;
    }

    componentDidMount() {
        fetch('http://django-rest-api-imdb.herokuapp.com/tags/?format=json&movie_id=' + this.getLastUrlSegment(), {
            method: 'GET'
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ tags: data.results })
            })
            .catch(console.log)
    }



    render() {
         const tags = this.state.tags;
        return (

            <div className="tags">
                <ul className="list-group-item list-group-item-dark" >Tags</ul>
                <div className="border border-dark p-2 ">

                {
                    this.state.tags.slice(1, 25).map((tag, i) => <a href={"?tag="+tag.tag} key={i} class="badge badge-light">{tag.tag}</a>)

                }
       
              </div>
            </div>

        )
    }
}
export default Tags;
