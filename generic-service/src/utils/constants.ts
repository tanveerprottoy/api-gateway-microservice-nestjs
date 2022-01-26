export const Constants = {
    API: 'api',
    API_VERSION_1: '1',
    API_VERSION_2: '2',
    API_VERSION_3: '3',
    BAD_REQ: 'Bad request',
    UNAUTH_REQ: 'Unauthorized',
    NOT_FOUND: 'Not found',
    UPDATE_FAILED: 'Update failed',
    GENERIC_ERROR: 'An error occurred',
    ADMIN: 'Admin',
    MERCHANT: 'Merchant',
    KAM: 'Kam',
    TECH_SUPPORT: 'TechSupport',
    JWT_SECRET: 'com.domain',
    SUCCESS: 'success',
    FAILED: 'failed',
    HTTP_200: 200, // ok
    HTTP_201: 201, // created
    HTTP_400: 400, // bad req
    HTTP_401: 401, // Unauthorized
    HTTP_404: 404,
    HTTP_500: 500,
} as const;

export const Database = {
    USERS_TABLE: 'Users',
    PRODUCTS_TABLE: 'Products',
    BUSINESSES_TABLE: 'Businesses',
    PLATFORMS_TABLE: 'Platforms',
    FAQ_CATEGORIES_TABLE: 'FaqCategories',
    FAQS_TABLE: 'Faqs',
    ACTIVITY_LOGS_TABLE: 'ActivityLogs',
} as const;

export const ApiEndpoints = {
    ACCOUNT_ACTIVATION: '/account-activation',
    FAQS: '/faqs',
    CATEGORIES: '/categories',
} as const;

export const ActivityLogMessages = {
    CREATE_TYPE: 'create',
    UPDATE_TYPE: 'update',
    DELETE_TYPE: 'delete',
    CREATED: 'Created a new',
    UPDATED: 'Updated',
    DELETED: 'Deleted',
    FAILED_CREATE: 'Failed to create',
    FAILED_UPDATE: 'Failed to update',
    FAILED_DELETE: 'Failed to delete'
} as const;