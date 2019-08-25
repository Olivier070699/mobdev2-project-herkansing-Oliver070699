/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';


class QuestionDetailPage extends Component {
    state = {
        questions: [],
        items:[],
        selectedOption: "",
        answerState: "fout",
        answered: false,
        questionsCounter: 0,
    };

    componentWillMount() {
        this.loadQuestions();
    }

    loadQuestions = () => {
        Api.findAllQuestions()
            .then((data) => {
                console.log(data)
                this.setState(prevState => ({
                    ...prevState,
                    questions: data
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value,
          answered: true
        })

        if(changeEvent.target.value === "option3") {
            this.setState({
                answerState: "juist"
            })
        } else {
            this.setState({
                answerState: "fout"
            })
        }
    }

    nextQuestion = () => {
        let counter = this.state.questionsCounter
        if(this.state.questionsCounter < this.state.items.length - 1) {
            this.setState({
                questionsCounter: ++counter,
                selectedOption: "",
            })
        }
    }

    goToPostDetailPage = (id) => {
        this.props.history.push(`/news/${id}`);
    }

    render() {

        let museum_id = localStorage.getItem("museum_id")
        let room = localStorage.getItem("room")
        this.state.items = []
        this.state.questions.forEach((element) => {
            if(element.museumsId === museum_id && element.room === room) {
                this.state.items.push(
                    <div key={element.id}>
                        <h1>{element.question}</h1>
                        <p>{element.synopsis}</p>
                        <p>{element.body}</p>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option1"
                                checked={this.state.selectedOption === "option1"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            {element.falseAnswerOne}
                            </label>
                        </div>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option2"
                                checked={this.state.selectedOption === "option2"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            {element.falseAnswerTwo}
                            </label>
                        </div>

                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option3"
                                checked={this.state.selectedOption === "option3"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            {element.trueAnswer}
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option4"
                                checked={this.state.selectedOption === "option4"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            {element.falseAnswerThree}
                            </label>
                        </div>
                    </div> 
                )}
          });
        return (
            <React.Fragment>
                <h1 className="hidden">Overzicht musea Gent</h1>
                <section className="section section--articles">
                    <header className="section__header">
                        <h2 className="section__title">Musea</h2>
                    </header>

                    <div className="questionsContainer">
                        {this.state.items[this.state.questionsCounter]}
                    </div>
                    { this.state.answered
                        ? <p>Dat antwoord is {this.state.answerState}</p>
                        : <p></p>
                    }
                    <button onClick={this.nextQuestion}>Volgende</button>
                </section>
            </React.Fragment>
        )
    }
}

export default (QuestionDetailPage);