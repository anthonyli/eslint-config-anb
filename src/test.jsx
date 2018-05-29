import React, { Component } from 'react'

export default class main extends Component {
  componentDidMount () {
    this.props.fetchLoanInfo();
    this.showDilog()
  }

  render () {
    const { loanChannels, loan, loanTerm, postTime } = this.props
    return (
      <div className="loan-info-page">
      </div>
    )
  }
}
