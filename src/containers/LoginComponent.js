import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import authenticateUser from '../actions/index';

class LoginComponent extends Component{
	renderInput(field){
		const className = `form-control ${ field.meta.touched ? 'has-danger' : '' }`
		return (
				<div className="form-group">
					<label>{field.fieldTitle}</label>
					<input 
						{...field.input}
					    className={className}
						type={field.fieldType}

					/>
					{field.meta.touched ? field.meta.error : ''}
				</div>

			);
	}

	submitForm(values){
		console.log(values);
		this.props.authenticateUser(values);
	}

	render(){
		const { handleSubmit } = this.props;

		return (
				<div className="col-md-4">
					<form className="form-horizontal" onSubmit={handleSubmit(this.submitForm.bind(this))}>
						<Field 
							name="username"
							fieldTitle="User Name"
							fieldType="text"
							component={this.renderInput}
							/>
						<Field 
							name="password"
							fieldTitle="Password"
							fieldType="password"
							component={this.renderInput}
							/>
						<button className="btn btn-primary" type="submit">Login</button>
					</form>
				</div>
			);
	}
}

function validate(values){
	var errors ={};
		if(!values.userName)
		errors.userName ="user name not specified";
	if(!values.password)
		errors.password ="password not specified";
	return errors;
}

export default reduxForm({
	validate: validate,
	form: 'LoginForm'
})(
connect(null,{authenticateUser:authenticateUser})(LoginComponent)
);