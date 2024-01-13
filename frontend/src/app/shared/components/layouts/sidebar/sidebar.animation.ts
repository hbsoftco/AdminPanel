import { animate, query, sequence, stagger, style, transition, trigger } from "@angular/animations";

export const DropDownAnimation = trigger("dropDownMenu", [
    transition(":enter", [
        style({ height: 0, overflow: "hidden" }),
        sequence([
            animate("140ms", style({ height: "*" })),
        ])
    ]),

    transition(":leave", [
        style({ height: "*", overflow: "hidden" }),
        animate("140ms", style({ height: 0 }))
    ])
]);
