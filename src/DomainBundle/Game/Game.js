import React, {Component} from "react";

import Pile from "./Pile";
import {
    Button,
    Container,
    Row,
    Collapse
} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.css";
import MoveController from "./MoveController";

export default class Game extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            pile0: "",
            pile1: "",
            pile2: "",
            pile3: "",
            pile4: "",
            pile5: "",
            pile6: "",
            pile7: "",
            pile8: "",
            aces:   4,
            kings:  4,
            queens: 4,
            jacks:  4,
            tens:   4,
            nines:  4,
            eights: 4,
            sevens: 4,
            sixes:  4,
            fives:  4,
            fours:  4,
            threes: 4,
            twos:   4,
            bestMove: {pile: "", action: "", probability: ""},
            showCardCount: false,
            gameResult: "loss",
            gameOver: false,
            hideBestMove: true,
        };

        this.getGameState = this.getGameState.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.getBestMove = this.getBestMove.bind(this);
        this.getGameState = this.getGameState.bind(this);
        this.toggleCardCount = this.toggleCardCount.bind(this);
    }

    render()
    {
        const totalCards = (new MoveController(this.state)).calculateTotalCards();
        return(
            <div>
                <div style={{marginLeft: "30%", marginRight: "30%"}}>
                    <Container style={{display: "flex", flexDirection: "row", marginLeft: "3%"}}>
                        <Row style={{width:"25%"}}>
                            <Button style={{backgroundColor: "#8c8c8c", color: "white", padding: "20px"}} onClick={() => this.toggleCardCount()}> <h1> {totalCards} </h1> </Button>
                        </Row>
                        <Row style={{width: "90%"}}>
                            <Collapse isOpen={this.state.showCardCount}> {this.renderCardCount()} </Collapse>
                            <Collapse isOpen={!this.state.showCardCount}> <h1 style={{paddingLeft: "25px", color: "grey", fontSize: "50px", paddingTop: "10px"}}>Impossible Game</h1> </Collapse>
                        </Row>
                    </Container>
                    <Pile card={this.state.pile0} pileIndex={0} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile1} pileIndex={1} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile2} pileIndex={2} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile3} pileIndex={3} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile4} pileIndex={4} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile5} pileIndex={5} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile6} pileIndex={6} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile7} pileIndex={7} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                    <Pile card={this.state.pile8} pileIndex={8} gameState={this.getGameState} updateBoard={this.updateBoard} bestMove={this.state.bestMove} />
                </div>
            </div>
        );
    }

    toggleCardCount()
    {
        this.setState({showCardCount: !this.state.showCardCount})
        this.setState({hideBestMove: !this.state.hideBestMove})
    }

    renderCardCount()
    {
        return <div>
            <strong>Aces: {this.state.aces} </strong> &nbsp;&nbsp;&nbsp;
            Kings: {this.state.kings} &nbsp;&nbsp;&nbsp;
            <strong>Queens: {this.state.queens} </strong> &nbsp;&nbsp;&nbsp;
            Jacks: {this.state.jacks} &nbsp;&nbsp;&nbsp;
            <strong>Tens:  {this.state.tens} </strong> &nbsp;&nbsp;<hr/>
            Nine: {this.state.nines} &nbsp;&nbsp;&nbsp;
            <strong>Eights: </strong> {this.state.eights} &nbsp;&nbsp;&nbsp;
            Sevens: {this.state.sevens} &nbsp;&nbsp;&nbsp;
            <strong>Sixes: {this.state.sixes} </strong> &nbsp; &nbsp;&nbsp;
            Fives: {this.state.fives} &nbsp;&nbsp;<hr/>
            Fours: {this.state.fours}  &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Threes: {this.state.threes} </strong> &nbsp;&nbsp;&nbsp;&nbsp;
            Twos: {this.state.twos} &nbsp;&nbsp;&nbsp;&nbsp;
        </div>;
    }

    getBestMove()
    {
        const result = this.gameOver();
        if (result) {

        } else {
            let controller = new MoveController(this.state);
            const best = controller.getBestMove();
            this.setState({bestMove: best});
        }
    }

    gameOver()
    {
        if ((new MoveController(this.state)).calculateTotalCards() === 0) {
            return 'win';
        }

        const piles = [this.state.pile0, this.state.pile1, this.state.pile2, this.state.pile3, this.state.pile4, this.state.pile5, this.state.pile6, this.state.pile7, this.state.pile8];
        for(let i = 0; i < piles.length; i++) {
            if (piles[i] !== "closed") {
                return false;
            }
        }
        return 'loss';
    }

    updateBoard(pile, use)
    {
        switch (pile) {
            case 0:
                this.setState({pile0: use})
                break;
            case 1:
                this.setState({pile1: use})
                break;
            case 2:
                this.setState({pile2: use})
                break;
            case 3:
                this.setState({pile3: use})
                break;
            case 4:
                this.setState({pile4: use})
                break;
            case 5:
                this.setState({pile5: use})
                break;
            case 6:
                this.setState({pile6: use})
                break;
            case 7:
                this.setState({pile7: use})
                break;
            case 8:
                this.setState({pile8: use})
                break;
            default:
                throw new Error("Invalid pile option");
        }

        switch (use) {
            case "2":
                this.setState({twos: this.state.twos - 1}, this.getBestMove);
                break
            case "3":
                this.setState({threes: this.state.threes - 1}, this.getBestMove);
                break;
            case "4":
                this.setState({fours: this.state.fours - 1}, this.getBestMove);
                break;
            case "5":
                this.setState({fives: this.state.fives - 1}, this.getBestMove);
                break;
            case "6":
                this.setState({sixes: this.state.sixes - 1}, this.getBestMove);
                break;
            case "7":
                this.setState({sevens: this.state.sevens - 1}, this.getBestMove);
                break;
            case "8":
                this.setState({eights: this.state.eights - 1}, this.getBestMove);
                break;
            case "9":
                this.setState({nines: this.state.nines - 1}, this.getBestMove);
                break;
            case "10":
                this.setState({tens: this.state.tens - 1}, this.getBestMove);
                break;
            case "J":
                this.setState({jacks: this.state.jacks - 1}, this.getBestMove);
                break;
            case "Q":
                this.setState({queens: this.state.queens - 1}, this.getBestMove);
                break;
            case "K":
                this.setState({kings: this.state.kings - 1}, this.getBestMove);
                break;
            case "A":
                this.setState({aces: this.state.aces - 1}, this.getBestMove);
                break;
            case "" || "closed":
                this.setState({}, this.getBestMove)
                break;
            default:
                throw new Error("Invalid card option");
        }
    }

    getGameState()
    {
        return {
            aces:   this.state.aces,
            kings:  this.state.kings,
            queens: this.state.queens,
            jacks:  this.state.jacks,
            tens:   this.state.tens,
            nines:  this.state.nines,
            eights: this.state.eights,
            sevens: this.state.sevens,
            sixes:  this.state.sixes,
            fives:  this.state.fives,
            fours:  this.state.fours,
            threes: this.state.threes,
            twos:   this.state.twos,
        };
    }
}