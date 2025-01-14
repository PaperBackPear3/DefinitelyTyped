import HelpCenter = require("help-center");

/**Tests for Help Center */

const helpCenter: HelpCenter.HelpCenter = {
    initialized: true,
    dispatchQueue: [],
    dispatch: (action: HelpCenter.HelpCenterActionsType, data: HelpCenter.HelpCenterConfigProps) => {},
    dequeueAll: () => {},
    configure: (config: HelpCenter.HelpCenterConfigProps) => {},
    hide: () => {},
    show: () => {},
    open: () => {},
    logout: () => {},
    login: (config: HelpCenter.HelpCenterConfigProps) => {},
};

const helpCenterActionsType: HelpCenter.HelpCenterActionsType = HelpCenter.HelpCenterActionsType.INIT;

const helpCenterConfigProps: HelpCenter.HelpCenterConfigProps = {
    config: {
        backColor: "red",
        companyHash: "hash",
        companyId: 1,
        language: "en",
        isSupport: true,
        left: true,
        realm: HelpCenter.Realms.FIC,
    },
};

/**Tests for Globals */

const chatGlobal: HelpCenter.ChatGlobal = {
    global_visible: true,
    help_visible: true,
    instantiate: true,
    single_conversation: true,
};

const globalParams: HelpCenter.GlobalParams = {
    access_token: "token",
    adminAccountId: 1,
    api_host: "host",
    chat: chatGlobal,
    compute_host: "host",
    functions: [{ key: "value" }],
    isSupport: true,
    peid: 1,
    permissions: [{ key: "value" }],
    person_hash: "hash",
    plan: 1,
    secure_host: "host",
    suid: 1,
    uid: 1,
};

/**Tests for Customery */

const attributes: HelpCenter.Attributes = {
    is_admin: false,
    is_subuser: true,
    is_employee: false,
    is_through_accountant: true,
    plan: "1",
    superaccount: true,
    license_expire_at: 1,
    created_at: "1",
    privacy_info: "string",
    privacy_offers: "string",
    privacy_surveys: "string",
    privacy_third: "string",
};

const company: HelpCenter.Company = {
    company_id: "1",
    link: "link",
    name: "name",
    license_expire: "1",
    license_expire_at: 1,
    accountant: true,
    created_at: 1,
    registration_service: 1,
    fic: true,
    dic: true,
    dic_signup_date: "1",
    dic_plan: "1",
    dic_license_expire: true,
};

const customerlySettingsType: HelpCenter.CustomerlySettingsType = {
    widget_hide_mobile: true,
    app_id: "1",
    singleConversation: true,
    autodetectLocale: true,
    language: "en",
    user_id: "1",
    name: "name",
    email: "email",
    email_hash: "hash",
    accentColor: "red",
    company: company,
    attributes: attributes,
};

const recursivePartial: HelpCenter.RecursivePartial<HelpCenter.CustomerlySettingsType> = {
    widget_hide_mobile: true,
    app_id: "1",
    singleConversation: true,
    autodetectLocale: true,
    language: "en",
    user_id: "1",
    name: "name",
    email: "email",
    email_hash: "hash",
    accentColor: "red",
    company: company,
    attributes: attributes,
};

const custormerly: HelpCenter.Custormerly = {
    open: () => {},
    close: () => {},
    hide: () => {},
    show: () => {},
    load: (recursivePartial: HelpCenter.RecursivePartial<HelpCenter.CustomerlySettingsType>) => {},
    update: (recursivePartial: HelpCenter.RecursivePartial<HelpCenter.CustomerlySettingsType>) => {},
    initialized: false,
    event: (name: string): void => {},
    attribute: (name: string, value: string): void => {},
};
