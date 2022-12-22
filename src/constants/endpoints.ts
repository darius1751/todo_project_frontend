export const ENDPOINT_BASE = 'http://localhost:3000/v1/api';
export const ENDPOINT_CREATE_CREDENTIAL = `${ENDPOINT_BASE}/credential`;
export const ENDPOINT_CREATE_PERSON = `${ENDPOINT_BASE}/person/`;
export const ENDPOINT_LOGIN = `${ENDPOINT_BASE}/credential/login`;
export const ENDPOINT_FIND_ONE_PERSON_BY_CREDENTIAL_ID = `${ENDPOINT_BASE}/person/login/`;
export const ENDPOINT_FIND_ONE_PERSON = `${ENDPOINT_BASE}/person/`;
export const ENDPOINT_FIND_ALL_STATES = `${ENDPOINT_BASE}/state`;
export const ENDPOINT_CREATE_TYPE = `${ENDPOINT_BASE}/type`;
export const ENDPOINT_FIND_ALL_TYPE = `${ENDPOINT_BASE}/type`;
export const ENDPOINT_CREATE_TASK = `${ENDPOINT_BASE}/task`;
export const ENDPOINT_FIND_ALL_TASK = ENDPOINT_CREATE_TASK;
export const ENDPOINT_FIND_ALL_TASK_BY_PERSON = `${ENDPOINT_FIND_ALL_TASK}/person/`;

