/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetDrinkRequest extends SpeakeasyBase {
    /**
     * Unique drink identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productCode" })
    productCode: string;
}

export class GetDrinkResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * An unexpected error response.
     */
    @SpeakeasyMetadata()
    rpcStatus?: shared.RpcStatus;

    @SpeakeasyMetadata()
    speakeasyDrink?: shared.SpeakeasyDrink;
}
