/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
class MesaageDialogBox extends Component {
  constructor(props) {
    super(props)
  }
  toggle() {
    this.props.onClose(!this.props.visible)
  }
  onButtonClick(event) {
    this.props.onButtonClick(event, this.props.visible)
  }
  renderExternalButton() {
    return (
      <Button
        className='close'
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={this.toggle.bind(this)}
      >
        &times;
      </Button>
    )
  }
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.visible}
          toggle={this.toggle.bind(this)}
          external={this.renderExternalButton()}
        >
          {this.props.showHeader ? (
            <ModalHeader toggle={this.toggle.bind(this)}>
              {this.props.headerContent}
            </ModalHeader>
          ) : (
            ''
          )}
          <ModalBody>{this.props.content}</ModalBody>
          {this.props.buttons && this.props.buttons.length > 0 ? (
            <ModalFooter>
              {this.props.buttons.map((item) => {
                return (
                  <Button
                    key={item.id}
                    color='primary'
                    id={item.id}
                    name={item.title}
                    onClick={this.onButtonClick.bind(this)}
                  >
                    {item.title}
                  </Button>
                )
              })}
            </ModalFooter>
          ) : (
            ''
          )}
        </Modal>
      </div>
    )
  }
}
MesaageDialogBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  headerContent: PropTypes.string,
  buttons: PropTypes.array,
  visible: PropTypes.bool,
  showHeader: PropTypes.bool,
  onClose: PropTypes.func,
  onButtonClick: PropTypes.func
}
MesaageDialogBox.defaultProps = {
  id: '',
  name: '',
  content: 'Hello From WeblineIndia',
  headerContent: 'Modal',
  buttons: [],
  visible: true,
  showHeader: true,
  onClose: function () {},
  onButtonClick: function () {}
}
export default MesaageDialogBox
