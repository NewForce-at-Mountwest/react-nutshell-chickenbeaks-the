import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './home/Home';
import NewsPage from './news/NewsPage';
import TaskList from './tasks/TaskList';
import TaskForm from './tasks/TaskForm';
import MessagesPage from './messages/MessagePage';
import EventsPage from './events/EventPage';

class ApplicationViews extends Component {
	// isAuthenticated = () => localStorage.getItem("credentials") !== null

	render() {
		return (
			<React.Fragment>
				<Route
					path="/home"
					render={(props) => {
						return <HomePage />;
					}}
				/>
				<Route
					path="/news"
					render={(props) => {
						return <NewsPage />;
					}}
				/>
				<Route
					exact path="/tasks"
					render={(props) => {
						return <TaskList {...props}/>;
					}}
				/>
				<Route exact path="/tasks/new" render={(props) => {
						return <TaskForm {...props}/>
					}} 
				/>
				<Route
					path="/events"
					render={(props) => {
						return <EventsPage />;
					}}
				/>
				<Route
					path="/messages"
					render={(props) => {
						return <MessagesPage />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
