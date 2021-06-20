import React, {Component} from "react";
import {
    Button,
    Card,
    CardImg,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
} from 'reactstrap';

import "bootstrap/dist/css/bootstrap.css";

import two from "../../resources/cards/2C.jpg";
import three from "../../resources/cards/3D.jpg";
import four from "../../resources/cards/4H.jpg";
import five from "../../resources/cards/5S.jpg";
import six from "../../resources/cards/6C.jpg";
import seven from "../../resources/cards/7D.jpg";
import eight from "../../resources/cards/8H.jpg";
import nine from "../../resources/cards/9S.jpg";
import ten from "../../resources/cards/10C.jpg";
import jack from "../../resources/cards/JD.jpg";
import queen from "../../resources/cards/QH.jpg";
import king from "../../resources/cards/KS.jpg";
import ace from "../../resources/cards/AC.jpg";
import empty from "../../resources/cards/blue_back.jpg";
import closed from "../../resources/cards/purple_back.jpg";

export default class Pile extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            showSelector: false,
            closed: false,
        };

        this.getCardImage = this.getCardImage.bind(this);
        this.toggleSelector = this.toggleSelector.bind(this);
        this.renderCardSelectorModal = this.renderCardSelectorModal.bind(this);
    }

    render()
    {
        return(
            <div style={{width: "30%", backgroundColor: "#a8a8a8", display: "inline-block", margin:"1%", border: this.getBorderStyle()}} onClick={() => this.toggleSelector()}>
                <Card>
                    {this.renderCardSelectorModal()}
                    <CardImg top width="100%" src={this.getCardImage()} alt="Could not find resource" />
                    <div style={{display: "inline-block"}}>
                        {this.getAction()}  {this.getProbability()}
                    </div>
                </Card>
            </div>
        );
    }


    renderCardSelectorModal()
    {
        return(
            <Modal isOpen={this.state.showSelector}>
                <ModalHeader toggle={() => this.toggleSelector()}> Select Result </ModalHeader>
                <ModalBody>
                    {this.buildSelectionBody()}
                </ModalBody>
                <ModalFooter>
                    <Button style={{width: "100%"}} color={"danger"} onClick={() => this.handleUpdate("closed")}> Closed </Button>
                </ModalFooter>
            </Modal>
        );
    }

    buildSelectionBody()
    {
        const cards = this.props.gameState();
        let buttons = [];

        if (cards.aces > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("A")}> Ace </Button>)

        if (cards.kings > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("K")}> King </Button>)

        if (cards.queens > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("Q")}> Queen </Button>)

        if (cards.jacks > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("J")}> Jack </Button>)

        if (cards.tens > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("10")}> 10 </Button>)

        if (cards.nines > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("9")}> 9 </Button>)

        if (cards.eights > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("8")}> 8 </Button>)

        if (cards.sevens > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("7")}> 7 </Button>)

        if (cards.sixes > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("6")}> 6 </Button>)

        if (cards.fives > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("5")}> 5 </Button>)

        if (cards.fours > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("4")}> 4 </Button>)

        if (cards.threes > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("3")}> 3 </Button>)

        if (cards.twos > 0 )
            buttons.push(<Button style={{margin:"10px"}} onClick={() => this.handleUpdate("2")}> 2 </Button>)

        return buttons;
    }

    handleUpdate(use)
    {
        this.props.updateBoard(this.props.pileIndex, use)
        this.toggleSelector();
    }

    toggleSelector()
    {
        this.setState({showSelector: !this.state.showSelector})
    }

    getCardImage()
    {
        const cardImgMap = {
            "2" : two,
            "3" : three,
            "4" : four,
            "5" : five,
            "6" : six,
            "7" : seven,
            "8" : eight,
            "9" : nine,
            "10" : ten,
            "J"  : jack,
            "Q"  : queen,
            "K"  : king,
            "A"  : ace,
            ""   : empty,
            "closed" : closed

        };

        return cardImgMap[this.props.card];
    }

    getBorderStyle()
    {
        if (this.props.pileIndex !== this.props.bestMove.pile) {
            return '';
        }

        return '5px solid green';
    }

    getProbability()
    {
        if (this.props.pileIndex !== this.props.bestMove.pile) {
            return '';
        }
        if (this.props.bestMove.probability === "") {
            return "";
        }
        const probability = (this.props.bestMove.probability * 100).toFixed(2);
        return <small>({probability}%)</small>
    }

    getAction()
    {
        if (this.props.pileIndex !== this.props.bestMove.pile) {
            return '';
        }
        return <strong>{this.props.bestMove.action}</strong>;
    }
}