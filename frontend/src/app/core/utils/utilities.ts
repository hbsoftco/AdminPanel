export class Utilities {
    constructor() { }

    public static setStatusClass(type: string): string {

        switch (type) {
            case 'Pending':
            case 'High':
            case 'Medium':
            case 'Low':
                return 'pending';
            case 'Out of Stock':
            case 'Ongoing':
            case 'Inactive':
                return 'inactive';
            case 'Delivered':
            case 'Completed':
            case 'Active':
                return 'active';
        }

        return '';
    }
}
