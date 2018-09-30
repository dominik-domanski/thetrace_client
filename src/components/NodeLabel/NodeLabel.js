import React, { PureComponent } from 'react';
import PersonCardMini from '../PersonCardMini/PersonCardMini';
import CardFooterOverlay from '../UIElements/CardFooterOverlay/CardFooterOverlay';

class NodeLabel extends PureComponent {
    render() {
      const {className, nodeData} = this.props
      return (
        <div className={className}>
          <PersonCardMini
                url={nodeData.imageUrl}
                firstName={nodeData.firstName}
                lastName={nodeData.lastName}
                birthDate={nodeData.birthDate}
                deathDate={nodeData.deathDate}
                maidenName={nodeData.maidenName}
                key={nodeData.id}/>
          {/* {nodeData._children && 
            <button>{nodeData._collapsed ? 'Expand' : 'Collapse'}</button>
          } */}
        <CardFooterOverlay />
          
        </div>
      )
    }
  }

  export default NodeLabel;