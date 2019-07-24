/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';


class HomeDetail extends Component {
    state = {
        museum: null
    };

    componentWillMount() {
        this.loadMuseum(this.props.match.params.id);
    }

    loadMuseum = id => {
        Api.findOneMuseum(id)
            .then(data => {
                this.setState(prevState => ({
                    ...prevState,
                    museum: data
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { museum } = this.state;
        if (museum != null) {
            return (
                <React.Fragment>
                    <h1 className="hidden">Overzicht Grafische en Digitale Media</h1>
                    <section className="section section--articles">
                        <header className="section__header">
                            <h2 className="section__title">Museum</h2>
                        </header>

                        <div className="museumsContainer">
                            <div key={museum.id}>
                                <h1>{museum.name}</h1>
                                <p>{museum.synopsis}</p>
                                <p>{museum.body}</p>
                            </div>
                        </div>

                        <footer className="section__footer">
                            READ MORE
                    </footer>
                    </section>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }
    }
}

export default (HomeDetail);