import React, { Component } from 'react';
import './burgerStyles.css';

export default class Burger extends Component {
    state = {
        meat: 0,
        cheese: 0,
        lettuce: 0,
        tomato: 0,
        cucumber: 0,     
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            meat,
            cheese,
            lettuce,
            tomato,
            cucumber,
        } = this.state;

        let stateValue;

        switch(ingredient){
            case 'meat':{
                stateValue = meat;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cucumber':{
                stateValue = cucumber;
                break;
            }
            default: break;
        }

        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue -1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    //Burger content 

    burgerContent = () => {
        let {
            meat,
            cheese,
            lettuce,
            tomato,
            cucumber,
        } = this.state;
        
        let burger = [];

        // The meat
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        // The cheese
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // The lettuce
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // The cucumber
        for (let i = 0; i < cucumber; i++){
            burger.push(<div key={burger.length} className="cucumberSide"></div>);
        }
        
        if(burger.length === 0)
            burger.push(<p key="0">ADD YOUR INGREDIENTS HERE!</p>);
        return burger;
    
    }

    render() {
        return (
            <>
                <div className="burgerIngredients">
                    <h2>MAKE YOUR BURGER! :)</h2>
                    <div className="topSideBurger"></div>
                        {this.burgerContent()}
                    <div className="bottomSideBurger"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>MEAT</p>
                    <div className="ingredientsBtns">
                        <button onClick={() => this.addRemoveIngredient('add','meat')} className="ingredientsBtn">ADD!</button>
                        <button onClick={() => this.addRemoveIngredient('remove','meat')} className="ingredientsBtn">REMOVE!</button>
                    </div>

                    <p>CHEESE</p>
                    <div className="ingredientsBtns">
                        <button onClick={() => this.addRemoveIngredient('add','cheese')} className="ingredientsBtn">ADD!</button>
                        <button onClick={() => this.addRemoveIngredient('remove','cheese')} className="ingredientsBtn">REMOVE!</button>
                    </div>

                    <p>LETTUCE</p>
                    <div className="ingredientsBtns">
                        <button onClick={() => this.addRemoveIngredient('add','lettuce')} className="ingredientsBtn">ADD!</button>
                        <button onClick={() => this.addRemoveIngredient('remove','lettuce')} className="ingredientsBtn">REMOVE!</button>
                    </div>

                    <p>TOMATO</p>
                    <div className="ingredientsBtns">
                        <button onClick={() => this.addRemoveIngredient('add','tomato')} className="ingredientsBtn">ADD!</button>
                        <button onClick={() => this.addRemoveIngredient('remove','tomato')} className="ingredientsBtn">REMOVE!</button>
                    </div>

                    <p>CUCUMBER</p>
                    <div className="ingredientsBtns">
                        <button onClick={() => this.addRemoveIngredient('add','cucumber')} className="ingredientsBtn">ADD!</button>
                        <button onClick={() => this.addRemoveIngredient('remove','cucumber')} className="ingredientsBtn">REMOVE!</button>
                    </div>
                </div>

            </>
        );
    }
}
