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
        questions: [],
    };

    componentWillMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        Api.findAllQuestions()
            .then((data) => {
                this.setState(prevState => ({
                    ...prevState,
                    questions: data
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
        const { questions } = this.state;
        this.items = this.state.questions.map((item, key) => (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.synopsis}</p>
                <p>{item.body}</p>
                <a href={"/questions/"}>link</a>
                {/* <a href={"/museums/"+item.id}>link</a> */}
           </div> 
        ));
        return (
            <React.Fragment>
                <h1 className="hidden">Overzicht musea Gent</h1>
                <section className="section section--articles">
                    <header className="section__header">
                        <h2 className="section__title">Musea</h2>
                    </header>

                    <div className="questionsContainer">
                        {this.items}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default (HomePage);