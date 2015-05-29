import React from 'react'
import { Link } from "react-router"
import moment from 'moment'
import Transmit from 'react-transmit'
import './ProposalList.css'
import {img, figure} from 'react'

import proposalData from '../Proposal/data/Proposals.json'

moment.locale(window.navigator.userLanguage || window.navigator.language)

class ProposalList extends React.Component {

    render() {
      var listData = Object.keys(proposalData).map((k) => proposalData[k])
        var proposalList = listData.map((item,key)=>{
            return (
                <Link className="ProposalList-item"
                      key={key}
                      to="proposal"
                      params={{proposalName: item.title_eng}}>
                    <img className="ProposalList-item-image"
                      src={item.slides_image}/>
                    <div className="ProposalList-item-info">
                      <span className="ProposalList-item-title">
                        {item.title_cht}
                      </span>
                      <span className="ProposalList-item-proposer">
                        @{item.proposer_abbr_cht}
                      </span>
                    </div>
                </Link>
            )

        });
        return (
            <div className="ProposalList">
                 {proposalList}
            </div>
        )
    }
}
export default Transmit.createContainer(ProposalList, {

})


