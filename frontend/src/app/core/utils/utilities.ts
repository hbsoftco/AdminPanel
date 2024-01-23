export class Utilities {
    constructor() { }

    public static setStatusClass(type: string): string {

        switch (type) {
            case 'Pending':
                return 'pending';
            case 'Out of Stock':
            case 'Inactive':
                return 'inactive';
            case 'Delivered':
            case 'Active':
                return 'active';
        }

        return '';
    }
}
