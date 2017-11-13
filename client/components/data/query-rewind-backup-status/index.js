/** @format */
/**
 * External dependencies
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import Interval, { EVERY_SECOND } from 'lib/interval';
import { getRewindBackupProgress } from 'state/activity-log/actions';

class QueryRewindBackupStatus extends Component {
	static propTypes = {
		downloadId: PropTypes.number,
		siteId: PropTypes.number.isRequired,
	};

	componentWillMount() {
		const { siteId } = this.props;

		if ( siteId ) {
			this.props.getRewindBackupProgress( siteId );
		}
	}

	query = () => {
		const { downloadId, siteId } = this.props;

		if ( siteId && downloadId ) {
			this.props.getRewindBackupProgress( siteId, downloadId );
		}
	};

	render() {
		return <Interval onTick={ this.query } period={ EVERY_SECOND } />;
	}
}

export default connect( null, { getRewindBackupProgress } )( QueryRewindBackupStatus );
