import * as app from 'application';
import { isAndroid } from 'tns-core-modules/platform';

declare var android;

/**
 * Hide the keyboard with a conditional Android platform check.
 */
export function hideKeyboard() {

    if (isAndroid) {
        try {
            let activity = app.android.foregroundActivity;
            let Context = app.android.currentContext;
            let inputManager = Context.getSystemService(android.content.Context.INPUT_METHOD_SERVICE);
            inputManager.hideSoftInputFromWindow(activity.getCurrentFocus().getWindowToken(), android.view.inputmethod.InputMethodManager.HIDE_NOT_ALWAYS);
        } catch (err) {
            console.log(err);
        }
    }
}