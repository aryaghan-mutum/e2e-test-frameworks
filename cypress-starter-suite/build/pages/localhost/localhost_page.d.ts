import { BasePage } from '../base_page';
declare class LocalhostPage extends BasePage {
    private readonly nameTextBoxId;
    private readonly emailTextBoxId;
    private readonly messageTextBoxId;
    private readonly sendBtnText;
    constructor();
    /**
     * Set Name
     * @param name
     */
    setName: (name: string) => this;
    /**
     * Get Name
     * @returns Name
     */
    getName: () => string;
    /**
     * Set Email
     * @param email
     */
    setEmail: (email: string) => this;
    /**
     * Set Message
     * @param message
     */
    setMessage: (message: string) => this;
    /**
     * Click Send
     */
    clickSend: () => this;
}
declare const _default: LocalhostPage;
export default _default;
