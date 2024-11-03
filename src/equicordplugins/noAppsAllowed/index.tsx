/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { EquicordDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoAppsAllowed",
    description: "returns the bot's tag :skulk:",
    authors: [EquicordDevs.kvba],

    patches: [
        {
            find: "BOT:default:",
            replacement: {
                match: /(default:\i)=.{0,30}\)/,
                replace: "$1=\"BOT\""
            }
        }
    ],

});
