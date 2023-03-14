var STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    DO_NOT_PROCESS: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_FAILURE: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    ALREADY_EXISTS_CONFLICT: 409,
    UNSUPPORTED_MEDIA_TYPE: 415,
    SERVER_ERROR: 500
};
var TIME_UNITS = {
    MONTHS: 'months',
    HOURS: 'hours',
    MINUTES: 'minutes',
    SECONDS: 'seconds',
    WEEKS: 'weeks',
    DAYS: 'days'
};
var SORT_ORDER = {
    ASC: 'asc',
    DESC: 'desc'
};
var DATE_FORMAT = 'DD-MM-YYYY';
var TIMESTAMP_FORMAT = 'DD-MM-YYYY HH:mm:ss';
var READABLE_DATETIME_FORMAT = "dddd, MMMM Do YYYY, hh:mm A";
var JAVASCRIPT_TIMESTAMP_FORMAT = 'YYYY/MM/DD HH:mm';

var DISTANCE_UNITS = {
    MILES: "mi",
    YARD: "yd",
    FEET: "ft",
    INCH: "in",
    KILOMETER: "km",
    METER: "m",
    CENTIMETER: "cm",
    MILLIMETER: "mm"
};
var ELASTIC_TIME_UNITS = {
    YEAR: "year",
    QUARTER: "quarter",
    MONTH: "month",
    WEEK: "week",
    DAY: "day",
    HOUR: "hour",
    MINUTE: "minute",
    SECOND: "second"
};
var ELASTIC_SHORT_TIME_UNITS = {
    YEAR: "y",
    MONTH: "m",
    WEEK: "w",
    DAY: "d",
    HOUR: "h",
    MINUTE: "m",
    SECOND: "s"
};
var SEARCH_TYPE = {
    CATEGORY: "CATEGORY",
    LEAD: "LEAD",
    USER: "USER",
    ENTITY: "ENTITY",
    SOURCE: "SOURCE",
    ANY: "ANY"
};

var LIMIT_INIT_TWITTER = process.env.TWIT_COUNT || 1000;
var TWITTER_DELAY_WARN = 10000;

module.exports = {
    TIME_UNITS: TIME_UNITS,
    TWITTER_DELAY_WARN: TWITTER_DELAY_WARN,
    DATE_FORMAT: DATE_FORMAT,
    LIMIT_INIT_TWITTER: LIMIT_INIT_TWITTER,
    TIMESTAMP_FORMAT: TIMESTAMP_FORMAT,
    SORT_ORDER: SORT_ORDER,
    STATUS_CODE: STATUS_CODE,
    READABLE_DATETIME_FORMAT: READABLE_DATETIME_FORMAT,
    JAVASCRIPT_TIMESTAMP_FORMAT: JAVASCRIPT_TIMESTAMP_FORMAT,
    DISTANCE_UNITS: DISTANCE_UNITS,
    ELASTIC_TIME_UNITS: ELASTIC_TIME_UNITS,
    SEARCH_TYPE: SEARCH_TYPE,
    ELASTIC_SHORT_TIME_UNITS: ELASTIC_SHORT_TIME_UNITS
};