import os

# List of service files
service_files = [
    "AddressMappingService.js",
    "AddressService.js",
    "AdhocShipmentService.js",
    "AgentsAddressesService.js",
    "ContainerService.js",
    "CustomsInvoiceService.js",
    "DraftsService.js",
    "FileService.js",
    "FreezerService.js",
    "GoogleMapsService.js",
    "ItemService.js",
    "ItemValidatorService.js",
    "LocationService.js",
    "PackageService.js",
    "RecipientService.js",
    "ShipmentService.js",
    "ShipmentSharedService.js",
    "ShippingRequestService.js",
    "ShippingRequestSharedService.js",
    "SpreadSheetService.js",
]

# Template for the test files
template = """const create{service_name} = require('../../../src/services/{service_name}');

describe('{service_name}', () => {{
    let service;
    let logMock;

    beforeEach(() => {{
        logMock = {{ info: jest.fn(), error: jest.fn() }};
        const {service_name} = create{service_name}();
        service = new {service_name}(logMock);
    }});

}});
"""

# Function to create boilerplate test files
def create_test_files(service_files, template):
    test_dir = 'test/unit/services'
    os.makedirs(test_dir, exist_ok=True)

    for file in service_files:
        service_name = file.replace('.js', '')
        test_content = template.format(service_name=service_name)

        test_file_path = os.path.join(test_dir, f"{service_name}.spec.js")
        with open(test_file_path, 'w') as f:
            f.write(test_content)

        print(f"Created {test_file_path}")

# Generate the test files
create_test_files(service_files, template)
