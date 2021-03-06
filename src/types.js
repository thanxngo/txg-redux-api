/* eslint-disable react/forbid-prop-types */
import T from "prop-types";

const BaseApiReducerType = T.shape({
    args: T.object.isRequired,
    item: T.object.isRequired,
    items: T.object.isRequired,
    error: T.bool.isRequired,
    statusCode: T.number.isRequired,
    errors: T.object.isRequired,
    loading: T.bool.isRequired,
    status: T.string,
});

export { BaseApiReducerType };
