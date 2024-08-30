import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';
export const messages = {
  created: 'Success! The record has been created.',
  updated: 'Update successful! Changes have been saved.',
  deleted: 'Deletion completed. The record has been removed.',
  error: 'There\'s an error while trying to process your request.',

  confirm_delete: 'Are you sure you want to remove the selected record?',
  unsaved_changes: 'You have unsaved changes. Are you sure you want to lose these changes?'
};

export const constants = {
  EMPTY_GUID: '00000000-0000-0000-0000-000000000000',
  DATE_FORMAT: 'MM/dd/yyyy',
  DATETIME_FORMAT: 'MM/dd/yyyy hh:mm a'
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'FitnessTracker',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44354/',
    redirectUri: baseUrl,
    clientId: 'FitnessTracker_App',
    responseType: 'code',
    scope: 'offline_access FitnessTracker',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44354',
      rootNamespace: 'FitnessTracker',
    },
  },
} as Environment;
