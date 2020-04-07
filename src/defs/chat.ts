export interface IChatPreferences {
    /**
     * Any preferences which contain ":" in the key name which
     * TypeScript does not support as a valid type _yet_
     */
    [preference: string]: any;
}

export interface IUserAuthenticated {
    /**
     * If you are authenticated on the socket.
     */
    authenticated: boolean;
    /**
     * The roles the user has.
     */
    roles: string[];
}

/**
 * 'meta' object that decorates the user's current message.
 */
export interface IMessageMeta {
    // Whether the message was sent as a whisper
    whisper?: boolean;
    // Whether the message was a `/me` prefixed message
    me?: boolean;
    censored?: boolean;
}

/**
 * Component is contained in a Message packet, used
 * to display a section of plain text.
 */
export interface IMessageTextComponent {
    type: 'text'; // tslint:disable-line
    text: string;
}

/**
 * Used to render an emoticon in the message.
 */
export interface IMessageEmoticonComponent {
    type: 'emoticon'; // tslint:disable-line
    text: string;
    pack: string;
    source: 'builtin' | 'subscriber';
    coords: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    alt: {
        [language: string]: string;
    };
}

/**
 * An IMessageLinkComponent is used to render a hyperlink in the message.
 */
export interface IMessageLinkComponent {
    type: 'link'; // tslint:disable-line
    text: string;
    url: string;
}

/**
 * An IMessageTagComponent is used to tag another user in chat.
 */
export interface IMessageTagComponent {
    type: 'tag'; // tslint:disable-line
    username: string;
    text: string;
    id: number;
}

export type MessagePart =
    | IMessageTextComponent
    | IMessageEmoticonComponent
    | IMessageLinkComponent
    | IMessageTagComponent;

export interface IMessagePacketComponents {
    meta: IMessageMeta;
    message: MessagePart[];
}

export interface IChatMessage {
    /**
     * The Id of the message.
     */
    id: string;
    /**
     * The targer of the message.
     */
    target?: string;
    /**
     * The channel Id.
     */
    channel: number;
    /**
     * The user's Id.
     */
    user_id: number;
    /**
     * The user's level.
     */
    user_level: number;
    /**
     * The user's name.
     */
    user_name: string;
    /**
     * The roles the user has.
     */
    user_roles: string[];
    /**
     * The message payload.
     */
    message: IMessagePacketComponents;
}

export interface IUserUpdate {
    /**
     * The user's Id.
     */
    user: number;
    /**
     * The username for the user. (This could be the new name if the user changes their name)
     */
    username: string;
    /**
     * The roles the user has.
     */
    roles: string[];
    /**
     * The permissions which the user has.
     */
    permissions: string[];
}

export interface IPollEvent {
    /**
     * The question being asked.
     */
    q: string;
    /**
     * The answers for the poll.
     */
    answers: string[];
    /**
     * The duration for the poll.
     */
    duration: number;
    /**
     * The ISO time for when the poll ends.
     */
    endsAt: number;

    /**
     * How many users entered the poll.
     */
    voters: number;

    /**
     * The responses for the poll.
     */
    responses: {
        [answer: string]: number;
    }[];

    /**
     * The responses for the poll, as a list, where the index matches the
     * answer it corresponds to in the `answers` array.
     */
    responsesByIndex: number[];

    /**
     * User who created the poll.
     */
    author: {
        /**
         * The user's Id.
         */
        user_id: number;
        /**
         * The user's name.
         */
        user_name: string;
        /**
         * The roles the user has.
         */
        user_roles: string[];
    };
}

export interface IUserConnection {
    /**
     * The user's Id.
     */
    id: number;
    /**
     * The user's name.
     */
    username: string;
    /**
     * The roles the user has.
     */
    roles: string[];
}

export interface IDeleteMessage {
    /**
     * The message Id.
     */
    id: string;
    /**
     * The moderator that performed the action.
     */
    moderator: {
        /**
         * The moderator's Id.
         */
        user_id: number;
        /**
         * The moderator's name.
         */
        user_name: string;
        /**
         * The roles the moderator has.
         */
        user_roles: string[];
        /**
         * The level of the moderator
         */
        user_level: number;
    };
}

export interface IPurgeMessage {
    /**
     * The user's Id.
     */
    user_id: number;
    /**
     * The moderator that performed the action.
     */
    moderator: {
        /**
         * The moderator's Id.
         */
        user_id: number;
        /**
         * The moderator's name.
         */
        user_name: string;
        /**
         * The roles the moderator has.
         */
        user_roles: string[];
        /**
         * The level of the moderator
         */
        user_level: number;
    };
    /**
     * The cause of the purge
     */
    cause: {
        /**
         * The type of action that was performed to cause the purge.
         */
        type: 'ban' | 'timeout' | 'globaltimeout';
        /**
         * Optional raw length that was passed from the moderator for timeouts.
         */
        durationString?: string;
    };
}

export interface IUserTimeout {
    user: {
        /**
         * The user's Id.
         */
        user_id: number;
        /**
         * The user's name.
         */
        user_name: string;
        /**
         * The roles the user has.
         */
        user_roles: string[];
    };
    /**
     * The duration of the timeout.
     */
    duration: number;
}

export interface IClearMessage {
    clearer: {
        /**
         * The moderator's Id.
         */
        user_id: number;
        /**
         * The moderator's name.
         */
        user_name: string;
        /**
         * The roles the moderator has.
         */
        user_roles: string[];
        /**
         * The level of the moderator
         */
        user_level: number;
    };
}
