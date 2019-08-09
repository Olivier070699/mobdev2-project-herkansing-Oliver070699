/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';


class RoomsPage extends Component {
    state = {
        rooms: [],
    };

    componentWillMount() {
        this.loadRooms();
    }

    loadRooms = () => {
        Api.findAllRooms()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    rooms: data
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    goToPostDetailPage = (id) => {
        this.props.history.push(`/news/${id}`);
    }

    render() {
        const { rooms } = this.state;
        this.items = this.state.rooms.map((item, key) => (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.synopsis}</p>
                <p>{item.body}</p>
                <a href={"/questions/"+item.id}>link</a>
           </div> 
        ));
        return (
            <React.Fragment>
                <h1 className="hidden">Overzicht musea Gent</h1>
                <section className="section section--articles">
                    <header className="section__header">
                        <h2 className="section__title">Musea</h2>
                    </header>

                    <div className="roomsContainer">
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

export default (RoomsPage);