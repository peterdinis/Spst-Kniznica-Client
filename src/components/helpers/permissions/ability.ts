import {createContextualCan} from "@casl/react";
import React from "react";

export const AbilityContext: any = React.createContext(null);
export const Can = createContextualCan(AbilityContext.Consumer);