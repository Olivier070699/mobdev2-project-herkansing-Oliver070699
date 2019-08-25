/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';


class HomePage extends Component {
    state = {
        museums: [],
    };

    componentWillMount() {
        this.loadMuseums();
    }

    loadMuseums = () => {
        Api.findAllMuseums()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    museums: data
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    storeMuseumId = (e) => {
        let museum_id = e.target.id
        localStorage.setItem("museum_id", museum_id)
    }

    goToPostDetailPage = (id) => {
        this.props.history.push(`/news/${id}`);
    }

    render() {
        const { museums } = this.state;
        this.items = this.state.museums.map((item, key) => (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.synopsis}</p>
                <p>{item.body}</p>
                <a id={item.id} href={"/rooms/"} onClick={this.storeMuseumId} >link</a>
                <a href={"/museums/"+item.id}>link</a>
           </div> 
        ));
        return (
            <React.Fragment>
                <h1 className="hidden">Overzicht musea Gent</h1>
                <section className="section section--articles">
                    <header className="section__header">
                        <h2 className="section__title">Musea</h2>
                    </header>

                    <div className="museumsContainer">
                        {this.items}
                    </div>

                    <footer className="section__footer">
                        READ MORE
                    </footer>
                </section>
            </React.Fragment>
        )
    }
}

export default (HomePage);