/**
 * Page Object Base class consiss of procedures to manipulate the UI of web app
 */
export declare abstract class BasePage {
    /** Instantiates a new Base Page object  */
    protected constructor();
    /**
     * Open a URL
     * @param url - An URL to open an app
     */
    openUrl: (url: string) => this;
}
