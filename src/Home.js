import React from 'react';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading: true
        }
    }

    // On load
    componentDidMount() {
        this.getData();
    }

    // On Update
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.message != this.props.message) {
            this.setState({})
        }
    }

    componentWillUnmount() {
        console.log('Component did unnmount')
    }

    getData = async () => {
        let response = await fetch('https://randomuser.me/api/');

        if (response.ok) {
            let json = await response.json();

            this.setState(prevState => {
                let newState = prevState;

                newState.isLoading = false;
                newState.data = json;

                return newState;
            });
        } else {
            this.setState(prevState => {
                let newState = prevState;

                newState.isLoading = false;
                newState.error = response;

                return newState;
            });
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoading ?
                        "Please wait... loading data"
                        :
                        JSON.stringify(this.state.data)
                }
            </div>
        );
    }
}

export default Home;