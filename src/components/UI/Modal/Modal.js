import React, {Component} from 'react';
import ModalStyleModule from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        let willUpdate = nextProps.show !== this.props.show
        console.log("%c[Modal] shouldComponentUpdate: " + willUpdate, "color: blue; font-size:15px;",  );
        return willUpdate;
    }



    componentWillUpdate() {
        console.log("%c[Modal] WillUpdate", "color: green; font-size:15px;");
    }

    render() {


        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={ModalStyleModule.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }


};

export default Modal;
