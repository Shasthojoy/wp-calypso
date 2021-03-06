/** @format */

/**
 * External dependencies
 */

import keyMirror from 'key-mirror';

/**
 * Module variables
 */
export const action = keyMirror( {
	FETCH_INVITES: null,
	FETCH_INVITE: null,
	RECEIVE_INVITES: null,
	RECEIVE_INVITE: null,
	RECEIVE_INVITES_ERROR: null,
	RECEIVE_INVITE_ERROR: null,
	INVITE_ACCEPTED: null,
	RECEIVE_INVITE_ACCEPTED_SUCCESS: null,
	RECEIVE_INVITE_ACCEPTED_ERROR: null,
	SENDING_INVITES: null,
	RECEIVE_SENDING_INVITES_ERROR: null,
	RECEIVE_SENDING_INVITES_SUCCESS: null,
	CREATE_INVITE_VALIDATION: null,
	RECEIVE_CREATE_INVITE_VALIDATION_ERROR: null,
	RECEIVE_CREATE_INVITE_VALIDATION_SUCCESS: null,
} );
