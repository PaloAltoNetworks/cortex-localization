/**
 * © 2026 Palo Alto Networks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const dictionaryDataCollection = {
  exact: {
    "Add New": "Agregar nuevo",
    "Enter client ID": "Introduzca el ID de cliente",
    "Enter password": "Introduzca la contraseña",
    "Choose Outpost": "Elegir Outpost",
    "Organization ID": "ID de organización",
    "Include": "Incluir",
    "Enter OU IDs to exclude from scan": "Introduzca los ID de OU que se excluirán del análisis",
    "Specify OUs": "Especificar OU",
    "Specify Accounts": "Especificar cuentas",
    "Enter account IDs to exclude from scan": "Introduzca los ID de cuenta que se excluirán del análisis",
    "Specify Folders": "Especificar carpetas",
    "Specify Projects": "Especificar proyectos",
    "Enter folder IDs to exclude from scan": "Introduzca los ID de carpeta que se excluirán del análisis",
    "Enter project IDs to exclude from scan": "Introduzca los ID de proyecto que se excluirán del análisis",
    "Enter Customer IDs for discovery enhancements": "Introduzca los ID de cliente para mejorar la detección",
    "Specify Management Groups": "Especificar grupos de administración",
    "Enter management group IDs to exclude from scan": "Introduzca los ID de grupo de administración que se excluirán del análisis",
    "Specify Subscriptions": "Especificar suscripciones",
    "Enter subscription IDs to exclude from scan": "Introduzca los ID de suscripción que se excluirán del análisis",
    "To complete setup, provide these details during template execution in the Azure Portal:":
      "Para completar la configuración, proporcione estos datos al ejecutar la plantilla en Azure Portal:",
    "Event Hub namespace": "Espacio de nombres de Event Hub",
    "Must belong to the onboarded subscription": "Debe pertenecer a la suscripción incorporada",
    "Create an outpost for this tenant": "Crear un Outpost para este tenant",
    "Allow connection to private registries": "Permitir la conexión a registros privados",
    "Allow connection to private serverless functions": "Permitir la conexión a funciones sin servidor privadas",
    "Enabling this feature requires additional permissions. Download and run the Terraform template to apply.":
      "Habilitar esta función requiere permisos adicionales. Descargue y ejecute la plantilla de Terraform para aplicarla.",
    "Requires additional cloud service provider permissions": "Requiere permisos adicionales del proveedor de servicios en la nube",
    "Choose an outpost to use for this instance. Only outposts connected to above tenant ID will be presented. To create a new outpost click":
      "Elija un Outpost para esta instancia. Solo se mostrarán los Outposts conectados al ID de tenant anterior. Para crear un nuevo Outpost, haga clic en",
    "Tenant ID is required to approve Cortex as an enterprise application in the Azure tenant":
      "Se requiere el ID de tenant para aprobar Cortex como aplicación empresarial en el tenant de Azure",
    "Select this option to onboard only Microsoft Entra ID data for identity security without full tenant onboarding. Scan mode and scope modifications will not be available.":
      "Seleccione esta opción para incorporar solo los datos de Microsoft Entra ID para la seguridad de identidades, sin incorporar el tenant completo. No se podrán modificar el modo ni el alcance del análisis.",
    "Event Hub name": "Nombre de Event Hub",
    "After onboarding, these values will be available as read-only in the instance settings.":
      "Tras la incorporación, estos valores estarán disponibles como de solo lectura en la configuración de la instancia.",
    "Importing replaces the current list.": "La importación reemplaza la lista actual.",
    "Additional security capabilities can be enabled in addition to the below built in capabilities:":
      "Además de las capacidades integradas siguientes, se pueden habilitar capacidades de seguridad adicionales:",
    "Cloud security posture management": "Gestión de la postura de seguridad en la nube",
    "AI security posture management": "Gestión de la postura de seguridad de IA",
    "Discover, classify and protect sensitive data in your cloud environment": "Descubra, clasifique y proteja los datos confidenciales de su entorno de nube",
    "Requires additional cloud provider permissions": "Requiere permisos adicionales del proveedor de nube",
    "Scan Serverless functions for vulnerabilities": "Analizar las funciones sin servidor en busca de vulnerabilidades",
    "Automate response to issues using playbooks and Quick Actions": "Automatizar la respuesta a incidencias mediante playbooks y Quick Actions",
    "Enable or disable Agentless Disk Scanning.": "Habilite o deshabilite el análisis de discos sin agente.",
    "Existing and newly discovered clusters are continuously scanned agentlessly for deep Kubernetes inventory context alongside security insights (e.g. compliance & misconfigurations)":
      "Los clústeres existentes y los recién descubiertos se analizan continuamente sin agente para obtener un contexto detallado del inventario de Kubernetes junto con información de seguridad (p. ej., cumplimiento y configuraciones incorrectas)",
    "Select outpost account": "Seleccionar cuenta de Outpost",
    "When enabled, Cortex sends unknown files to WildFire for analysis. The file types sent for analysis depend on the platform type. WildFire accepts files up to 300MB in size.":
      "Si se habilita, Cortex envía los archivos desconocidos a WildFire para su análisis. Los tipos de archivo enviados dependen del tipo de plataforma. WildFire acepta archivos de hasta 300 MB.",
    "Hide Preferences": "Ocultar preferencias",
    "Enable automation to streamline incident response. this may required additional cloud service provider permissions.":
      "Habilite la automatización para agilizar la respuesta a incidentes. Esto puede requerir permisos adicionales del proveedor de servicios en la nube.",
    "Scan container registry images for vulnerabilities, malware and secrets": "Analizar las imágenes del registro de contenedores en busca de vulnerabilidades, malware y secretos",
    "This feature requires data egress, which incurs standard data transfer fees.": "Esta función requiere la salida de datos (egress), lo que conlleva tarifas estándar de transferencia de datos.",
    "Publisher": "Editorial",
    "Choose and configure capabilities to fit your needs": "Elija y configure las capacidades que se ajusten a sus necesidades",
    "Edit, add or remove capabilities to fit your needs": "Edite, agregue o quite capacidades según sus necesidades",
    "Deployment removal": "Eliminación de la implementación",
    "Default settings": "Configuración predeterminada",
    "Edit profile": "Editar perfil",
    "Kubernetes connect": "Conexión de Kubernetes",
    "Connector Status": "Estado del conector",
    "Collectors": "Recopiladores",
    "Count Received (Last 24h)": "Recuento recibido (últimas 24 h)",
    "Last Communication": "Última comunicación",
    "Connector Version": "Versión del conector",
    "Data source": "Origen de datos",
    "K8s Platform": "Plataforma K8s",
    "Last Scan": "Último análisis",
    "Serverless": "Sin servidor",
    "Update": "Actualizar",
    "Cluster resource identifier": "Identificador de recurso del clúster",
    "Enter cluster resource identifier": "Introduzca el identificador de recurso del clúster",
    "The resource identifier must be specified for GKE or EKS clusters with metadata service disabled, for AKS clusters with non-default nodes managed resource group and for Fargate clusters":
      "Se debe especificar el identificador de recurso para clústeres GKE o EKS con el servicio de metadatos deshabilitado, para clústeres AKS con un grupo de recursos administrado de nodos no predeterminado y para clústeres Fargate",
    "Basic authentication is only supported for posture management.": "La autenticación básica solo se admite para la gestión de la postura.",
    "Notice! Assigning tags may impact scoped permissions in the system.":
      "¡Atención! Asignar etiquetas puede afectar a los permisos con alcance del sistema.",
    "Initial scanning configuration": "Configuración inicial del análisis",
    "Configure the initial preference for scanning your registry. Any newly discovered registry, repository or image in the account will be scanned by default.":
      "Configure la preferencia inicial para analizar su registro. Todo registro, repositorio o imagen recién descubierto en la cuenta se analizará de forma predeterminada.",
    "Latest tag": "Etiqueta más reciente",
    "Days modified": "Días desde la modificación",
    "Tags created/updated in last": "Etiquetas creadas o actualizadas en los últimos",
    "Onboard your OCI tenancy to Cortex Cloud. Security scanning is performed in the Cortex Cloud environment.":
      "Incorpore su tenancy de OCI a Cortex Cloud. El análisis de seguridad se realiza en el entorno de Cortex Cloud.",
    "Enter an instance name or leave it empty to be auto populated": "Introduzca un nombre de instancia o déjelo vacío para que se complete automáticamente",
    "Define scope of scans by including/excluding compartments or regions": "Defina el alcance de los análisis incluyendo o excluyendo compartimentos o regiones",
    "Modify Scope by Compartments": "Modificar alcance por compartimentos",
    "Scope modification will impact the compartments and their sub-compartments": "La modificación del alcance afectará a los compartimentos y a sus subcompartimentos",
    "OCI region": "Región de OCI",
    "Choose region": "Elegir región",
    "Bucket Name": "Nombre del bucket",
    "Enter bucket name": "Introduzca el nombre del bucket",
    "Compartment OCID": "OCID del compartimento",
    "Enable Amazon S3 Log Collection": "Habilitar la recopilación de logs de Amazon S3",
    "Enable Azure Network Watcher Log Collection": "Habilitar la recopilación de logs de Azure Network Watcher",
    "Enable GCP Pub/Sub Log Collection": "Habilitar la recopilación de logs de GCP Pub/Sub",
    "Enter the full GCP Pub/Sub subscription name": "Introduzca el nombre completo de la suscripción de GCP Pub/Sub",
    "Upload the JSON file containing your service account key": "Cargue el archivo JSON que contiene la clave de su cuenta de servicio",
    "Enhanced Cloud Protection": "Protección en la nube mejorada",
    "Use flow logs in analytics": "Usar logs de flujo en los análisis",
    "Save & Generate Token": "Guardar y generar token",
    "subscription name": "nombre de la suscripción",
    "Define the following parameters": "Defina los siguientes parámetros",
    ", see": ", consulte",
    "Applies to these capabilities": "Se aplica a estas capacidades",
    "Automation and Remediation": "Automatización y corrección",
    "Connection": "Conexión",
    "Drag & Drop or Browse file to upload": "Arrastre y suelte o busque un archivo para cargar",
    "Engine": "Motor",
    "Engine Group": "Grupo de motores",
    "Enter the credentials to securely authorize the connection": "Introduzca las credenciales para autorizar la conexión de forma segura",
    "Google Workspace Admin Email": "Correo electrónico del administrador de Google Workspace",
    "Identity Posture": "Postura de identidades",
    "Manage and monitor Google Workspace directory resources including users, groups, organizational units, domains, and roles via the Admin SDK Directory API":
      "Administre y supervise los recursos del directorio de Google Workspace, como usuarios, grupos, unidades organizativas, dominios y roles, mediante la API Admin SDK Directory",
    "No engine": "Sin motor",
    "OAuth with customer created service principal": "OAuth con entidad de servicio creada por el cliente",
    "Run automation and remediation actions against Google Drive": "Ejecutar acciones de automatización y corrección en Google Drive",
    "Scan and protect Google Workspace data across Drive, Gmail, and shared resources": "Analizar y proteger los datos de Google Workspace en Drive, Gmail y los recursos compartidos",
    "Select capabilities": "Seleccionar capacidades",
    "Server-to-server authentication using JWT Bearer assertion with a service account credentials file":
      "Autenticación de servidor a servidor mediante aserción JWT Bearer con un archivo de credenciales de cuenta de servicio",
    "Set your preferred authentication setup": "Establezca la configuración de autenticación que prefiera",
    "The Google Workspace admin email used for domain-wide delegation. This account must have super admin privileges.":
      "Correo electrónico del administrador de Google Workspace utilizado para la delegación en todo el dominio. Esta cuenta debe tener privilegios de superadministrador.",
    "Trust any certificate (not secure)": "Confiar en cualquier certificado (no seguro)",
    "Use system proxy settings": "Usar la configuración de proxy del sistema",
    "This field cannot be changed after it is added. To change it, exit the wizard and start again":
      "Este campo no se puede cambiar una vez agregado. Para cambiarlo, salga del asistente y vuelva a empezar",
    "Workload Federated Identity": "Identidad federada de cargas de trabajo",
    "Access Key": "Clave de acceso",
    "STS AssumeRole": "STS AssumeRole",
    "SQS URL": "SQS URL",
    "Enter SQS URL": "Introduzca la URL de SQS",
    "Role ARN": "ARN del rol",
    "Enter role ARN": "Introduzca el ARN del rol",
    "AWS Client ID": "ID de cliente de AWS",
    "AWS Client Secret": "Secreto de cliente de AWS",
    "External ID": "ID externo",
    "Audience": "Audiencia",
    "Enter audience": "Introduzca la audiencia",
    "Select log type": "Seleccionar tipo de log",
    "Copy service account identifier": "Copiar identificador de la cuenta de servicio",
    "Identifier": "Identificador",
    "Enable": "Habilitar",
    "Enter a compartment's OCID": "Introduzca el OCID de un compartimento",
    "Delayed": "Diferido",
    "Edit Profile settings": "Editar configuración del perfil",
    "Enable auto upgrade to ensure the installed set of capabilities is upgraded as new versions are available.":
      "Habilite la actualización automática para que el conjunto de capacidades instalado se actualice cuando haya nuevas versiones disponibles.",
    "Explore and tailor Kubernetes security capabilities to simplify deployment and ensure seamless integration with your infrastructure. Easily strengthen and optimize your Kubernetes environment's security":
      "Explore y adapte las capacidades de seguridad de Kubernetes para simplificar la implementación y garantizar una integración fluida con su infraestructura. Refuerce y optimice fácilmente la seguridad de su entorno de Kubernetes",
    "HTTP proxy IP": "IP del proxy HTTP",
    "If network traffic must route through a proxy gateway, configure the required settings here, including the proxy URL, authentication method, and other relevant parameters.":
      "Si el tráfico de red debe enrutarse a través de una puerta de enlace proxy, configure aquí los ajustes necesarios, como la URL del proxy, el método de autenticación y otros parámetros relevantes.",
    "Immediate": "Inmediato",
    "Latest available version (GA)": "Última versión disponible (GA)",
    "Namespace": "Espacio de nombres",
    "Supported Kubernetes distributions": "Distribuciones de Kubernetes compatibles",
    "To see the list of supported versions,": "Para ver la lista de versiones compatibles,",
    "Upgrade rollout": "Despliegue de la actualización",
    "Upgrade strategy": "Estrategia de actualización",
    "What time?": "¿A qué hora?",
    "Which days?": "¿Qué días?",
    "Latest available version (GA) / Immediate / On any day (At any time)":
      "Última versión disponible (GA) / Inmediato / Cualquier día (a cualquier hora)",
    "Profile settings": "Configuración del perfil",
    "Read more": "Más información",
    "Realtime protection": "Protección en tiempo real",
    "Capabilities": "Capacidades",
    "Cloud Services": "Servicios en la nube",
    "Count (Last 24h)": "Recuento (últimas 24 h)",
    "Data Enrichment & Threat Intelligence": "Enriquecimiento de datos e inteligencia de amenazas",
    "Deprecated": "Obsoleto",
    "Forensics & Malware Analysis": "Análisis forense y de malware",
    "Image OCR": "OCR de imágenes",
    "Indicators detection": "Detección de indicadores",
    "Instances Status": "Estado de las instancias",
    "Mail Sender": "Remitente de correo",
    "Messaging": "Mensajería",
    "Messaging and Conferencing": "Mensajería y conferencias",
    "Open Source": "Código abierto",
    "Pack Version": "Versión del paquete",
    "Rasterize": "Rasterizar",
    "Update Available": "Actualización disponible",
    "Utilities": "Utilidades",
    "Add Another Instance": "Agregar otra instancia",
    "Add Data Sources or Integrations": "Agregar orígenes de datos o integraciones",
    "Create Integration": "Crear integración",
    "More Details": "Más detalles",
    "Account": "Cuenta",
    "Add Instance": "Agregar instancia",
    "Additional Security Capabilities": "Capacidades de seguridad adicionales",
    "Authentication Method": "Método de autenticación",
    "Cloud Scan": "Análisis en la nube",
    "Cloud Service Provider": "Proveedor de servicios en la nube",
    "Cloud Tags": "Etiquetas de nube",
    "Contains": "Contiene",
    "Error": "Error",
    "Instance ID": "ID de instancia",
    "Outpost": "Outpost",
    "Outpost ID": "ID de Outpost",
    "Pending": "Pendiente",
    "Scan Mode": "Modo de análisis",
    "Update Status": "Estado de la actualización",
    "Warning": "Advertencia",
    "Account Name": "Nombre de la cuenta",
    "Account Type": "Tipo de cuenta",
    "Agentless Disk Scanning": "Análisis de discos sin agente",
    "All granted": "Todos concedidos",
    "Audit Logs": "Logs de auditoría",
    "Cloud Instances": "Instancias en la nube",
    "Coverage": "Cobertura",
    "Scan Coverage": "Cobertura del análisis",
    "Data Security Scanning": "Análisis de seguridad de datos",
    "Data Sources": "Orígenes de datos",
    "Discovery Engine": "Motor de descubrimiento",
    "Environment": "Entorno",
    "High Coverage": "Cobertura alta",
    "Permissions": "Permisos",
    "Registry Scanning": "Análisis de registros",
    "Resources Tags": "Etiquetas de recursos",
    "Security Capabilities": "Capacidades de seguridad",
    "Serverless Scanning": "Análisis sin servidor",
    "Scan With Outpost": "Analizar con Outpost",
    "Scanning is done in the Cortex cloud environment.": "El análisis se realiza en el entorno de nube de Cortex.",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode require additional cloud provider permissions and may incur additional cloud costs.":
      "El análisis se realiza en una infraestructura implementada en una cuenta de nube de su propiedad. Este modo requiere permisos adicionales del proveedor de nube y puede generar costes adicionales en la nube.",
    "Show advanced settings": "Mostrar configuración avanzada",
    "View required permissions": "Ver permisos requeridos",
    "Organizational Unit": "Unidad organizativa",
    "Add Tag": "Agregar etiqueta",
    "After onboarding, view these values in the cloud instance settings.":
      "Tras la incorporación, consulte estos valores en la configuración de la instancia en la nube.",
    "Automatically provisions all required cloud resources and permissions via IaC template.":
      "Aprovisiona automáticamente todos los recursos y permisos de nube necesarios mediante una plantilla de IaC.",
    "Choose logs to collect. To benefit from all security capabilities all log types should be collected -":
      "Elija los logs que desea recopilar. Para aprovechar todas las capacidades de seguridad, se deben recopilar todos los tipos de log -",
    "CloudTrail Bucket Name:": "Nombre del bucket de CloudTrail:",
    "Collect Audit Logs": "Recopilar logs de auditoría",
    "Data security posture management": "Gestión de la postura de seguridad de los datos",
    "Define scope of scans by including/excluding OUs, Accounts or Regions":
      "Defina el alcance de los análisis incluyendo o excluyendo OU, cuentas o regiones",
    "Deployment Guide": "Guía de implementación",
    "Deployment Method": "Método de implementación",
    "Edit Preferences": "Editar preferencias",
    "Enable additional security add-ons. This may require additional cloud provider permissions":
      "Habilite complementos de seguridad adicionales. Esto puede requerir permisos adicionales del proveedor de nube",
    "For full control over the onboarding process, follow our":
      "Para tener control total sobre el proceso de incorporación, siga nuestra",
    "Hide advanced settings": "Ocultar configuración avanzada",
    "KMS Key ARN (Optional):": "ARN de la clave KMS (opcional):",
    "Log Collection Configuration": "Configuración de la recopilación de logs",
    "Modify Scope by Regions": "Modificar alcance por regiones",
    "Modify by OU/Account": "Modificar por OU/cuenta",
    "Must reside within the account you are onboarding": "Debe residir en la cuenta que está incorporando",
    "Note": "Nota",
    "Collect data events (currently support lambda & S3)": "Recopilar eventos de datos (actualmente se admiten lambda y S3)",
    "Automated collection creates new, dedicated AWS resources (CloudTrail, S3 bucket, and notification services). This can lead to significant infrastructure costs in high-volume environments.":
      "La recopilación automatizada crea recursos de AWS nuevos y dedicados (CloudTrail, bucket de S3 y servicios de notificación). Esto puede suponer costes de infraestructura significativos en entornos de gran volumen.",
    "Region must match the deployment region": "La región debe coincidir con la región de implementación",
    "SNS Topic ARN:": "ARN del tema de SNS:",
    "Scope Modifications": "Modificaciones del alcance",
    "Send samples to detonation in WildFire. Supported in: Registry Scanning.":
      "Enviar muestras para su detonación en WildFire. Compatible con: análisis de registros.",
    "Serverless functions scanning": "Análisis de funciones sin servidor",
    "The following labels are added to any new resource created by Cortex in the cloud environment":
      "Las siguientes etiquetas se agregan a cualquier recurso nuevo que Cortex cree en el entorno de nube",
    "To complete setup, enter these resource details during template execution in the AWS Console":
      "Para completar la configuración, introduzca estos detalles de recursos al ejecutar la plantilla en la consola de AWS",
    "Upload unknown files to WildFire": "Cargar archivos desconocidos en WildFire",
    "(Keeping this enabled is strongly recommended)": "(Se recomienda encarecidamente mantener esta opción habilitada)",
    ". This may require additional cloud provider permissions.":
      ". Esto puede requerir permisos adicionales del proveedor de nube.",
    "for provisioning all required resources yourself.": "para aprovisionar usted mismo todos los recursos necesarios.",
    "Close": "Cerrar",
    "Connect to AWS to execute the template.": "Conéctese a AWS para ejecutar la plantilla.",
    "Cortex has created your instance in pending state and your authentication template is available.":
      "Cortex ha creado su instancia en estado pendiente y su plantilla de autenticación está disponible.",
    "Download CloudFormation": "Descargar CloudFormation",
    "Download the template and execute it in your cloud service provider.":
      "Descargue la plantilla y ejecútela en su proveedor de servicios en la nube.",
    "Execute in AWS": "Ejecutar en AWS",
    "For more information,": "Para obtener más información,",
    "Generate Template": "Generar plantilla",
    "Template Delete": "Eliminación de plantilla",
    "Template has been deleted.": "Se ha eliminado la plantilla.",
    "DON'T FORGET": "NO OLVIDE",
    "To finalize the process, you will need to choose a connection method.":
      "Para finalizar el proceso, deberá elegir un método de conexión.",
    "Next steps": "Próximos pasos",
    "Note: If you select": "Nota: Si selecciona",
    "To complete the process, execute the template in AWS using one of the following methods.":
      "Para completar el proceso, ejecute la plantilla en AWS mediante uno de los siguientes métodos.",
    "To complete the process, execute the template in AWS": "Para completar el proceso, ejecute la plantilla en AWS",
    "To configure flow or DNS log ingestion use": "Para configurar la ingesta de logs de flujo o DNS, use",
    "View all data sources and their instances in": "Vea todos los orígenes de datos y sus instancias en",
    "When the discovery scan is complete, view cloud assets in": "Cuando finalice el análisis de descubrimiento, vea los activos en la nube en",
    "When you're done": "Cuando termine",
    ", you must already be logged in to AWS.": ", ya debe haber iniciado sesión en AWS.",
    "view documentation": "ver documentación",
    "read more in documentation": "más información en la documentación",
    "tag key": "clave de etiqueta",
    "tag value": "valor de etiqueta",
    "ARE YOU SURE?": "¿ESTÁ SEGURO?",
    "Clear": "Borrar",
    "Cloud Labels": "Etiquetas de nube",
    "Collect Audit Logs (GCP Pub/Sub)": "Recopilar logs de auditoría (GCP Pub/Sub)",
    "Connect to GCP workspace": "Conectar al espacio de trabajo de GCP",
    "Define scope of scans by including/excluding Folders, Projects or Regions":
      "Defina el alcance de los análisis incluyendo o excluyendo carpetas, proyectos o regiones",
    "Discovery Enhancements": "Mejoras de descubrimiento",
    "Download Terraform": "Descargar Terraform",
    "GCP Pub/Sub connector": "Conector de GCP Pub/Sub",
    "To complete the process, execute the template in GCP": "Para completar el proceso, ejecute la plantilla en GCP",
    "To configure flow and DNS log ingestion use": "Para configurar la ingesta de logs de flujo y DNS, use",
    ". Download this setup file and run it on your cloud service provider account.":
      ". Descargue este archivo de configuración y ejecútelo en su cuenta del proveedor de servicios en la nube.",
    "Modify by Folder/Project": "Modificar por carpeta/proyecto",
    "Project Id": "ID de proyecto",
    "Project Name": "Nombre del proyecto",
    "Project Type": "Tipo de proyecto",
    "Update and Resolve": "Actualizar y resolver",
    "Manually connect an instance": "Conectar una instancia manualmente",
    "View Details": "Ver detalles",
    "Re-download Connection Template": "Volver a descargar la plantilla de conexión",
    "1. To create the service principal, you must have the Entra ID Cloud Application Administrator role (or higher) in the Azure tenant you are onboarding.":
      "1. Para crear la entidad de servicio, debe tener el rol Entra ID Cloud Application Administrator (o superior) en el tenant de Azure que está incorporando.",
    "2. Open Azure Cloud Shell in the tenant you are onboarding, or open a local terminal with the Azure CLI installed, and log in to the target tenant before executing the command below.":
      "2. Abra Azure Cloud Shell en el tenant que está incorporando, o abra un terminal local con la CLI de Azure instalada, e inicie sesión en el tenant de destino antes de ejecutar el siguiente comando.",
    "3. Run the following command:": "3. Ejecute el siguiente comando:",
    "4. Verify the service principal was created": "4. Compruebe que se ha creado la entidad de servicio",
    "Collect Audit Logs (Event Hub)": "Recopilar logs de auditoría (Event Hub)",
    "Create Cortex service principal": "Crear la entidad de servicio de Cortex",
    "This service principal is Cortex's primary runtime identity in your tenant. Cortex uses it to read your Azure resources and to perform actions for the capabilities you enable. When you enter your Azure tenant ID, Cortex checks if the service principal already exists. If it is not found, follow the steps below.":
      "Esta entidad de servicio es la identidad principal de ejecución de Cortex en su tenant. Cortex la utiliza para leer sus recursos de Azure y realizar acciones para las capacidades que habilite. Al introducir el ID de tenant de Azure, Cortex comprueba si la entidad de servicio ya existe. Si no se encuentra, siga los pasos a continuación.",
    "Define scope of scans by including/excluding Management Groups, Subscriptions or Regions":
      "Defina el alcance de los análisis incluyendo o excluyendo grupos de administración, suscripciones o regiones",
    "Documentation": "Documentación",
    "For more information, see the": "Para obtener más información, consulte",
    "To complete the process, execute the template in Azure": "Para completar el proceso, ejecute la plantilla en Azure",
    "To configure flow log ingestion use": "Para configurar la ingesta de logs de flujo, use",
    "Modify by Management Group/Subscription": "Modificar por grupo de administración/suscripción",
    "Onboard Microsoft Entra ID only": "Incorporar solo Microsoft Entra ID",
    "Tenant": "Tenant",
    "Tenant ID": "ID de tenant",
    "All Outposts": "Todos los Outposts",
    "New Outpost": "Nuevo Outpost",
    "Outpost Account ID": "ID de cuenta de Outpost",
    "Outpost Account Name": "Nombre de cuenta de Outpost",
    "Create AWS Outpost": "Crear Outpost de AWS",
    "Custom Outpost": "Outpost personalizado",
    "Keep control of your network architecture. You provide the VPC and Subnets, and we’ll use Terraform to deploy the IAM roles, storage, and compute resources directly into your existing infrastructure.":
      "Mantenga el control de su arquitectura de red. Usted proporciona la VPC y las subredes, y nosotros usaremos Terraform para implementar los roles de IAM, el almacenamiento y los recursos de cómputo directamente en su infraestructura existente.",
    "Use a predefined script to deploy all roles and resources, as well as configurations, to a dedicated account owned by you.":
      "Use un script predefinido para implementar todos los roles, recursos y configuraciones en una cuenta dedicada de su propiedad.",
    "We are preparing your Amazon Web Services outpost account. Your next step is to create the connection to Amazon Web Services.":
      "Estamos preparando su cuenta de Outpost de Amazon Web Services. El siguiente paso es crear la conexión con Amazon Web Services.",
    "Create GCP Outpost": "Crear Outpost de GCP",
    "Create Azure Outpost": "Crear Outpost de Azure",
    "We are preparing your Google Cloud Platform outpost account. Your next step is to create the connection to Google Cloud Platform.":
      "Estamos preparando su cuenta de Outpost de Google Cloud Platform. El siguiente paso es crear la conexión con Google Cloud Platform.",
    "We are preparing your Microsoft Azure outpost account. Your next step is to create the connection to Microsoft Azure.":
      "Estamos preparando su cuenta de Outpost de Microsoft Azure. El siguiente paso es crear la conexión con Microsoft Azure.",
    "Recommended": "Recomendado",
    "Number of instances": "Número de instancias",
    "Partition": "Partición",
    "Features": "Funciones",
    "Select a dedicated account for the outpost (free from other resources)":
      "Seleccione una cuenta dedicada para el Outpost (sin otros recursos)",
    "Onboard only one outpost for each account": "Incorpore solo un Outpost por cuenta",
    "The tenant ID format is valid, but we couldn't connect to the account because the required configuration is missing.":
      "El formato del ID de tenant es válido, pero no pudimos conectarnos a la cuenta porque falta la configuración necesaria.",
    "To maximize security coverage, include collection of audit logs (Event Hub). This may require additional cloud service provider permissions.":
      "Para maximizar la cobertura de seguridad, incluya la recopilación de logs de auditoría (Event Hub). Esto puede requerir permisos adicionales del proveedor de servicios en la nube.",
    "Verify": "Verificar",
    "Read more in documentation.": "Más información en la documentación.",
    "Select additional coverage. This may require additional actions in the respected cloud provider destination to establish trust.":
      "Seleccione cobertura adicional. Esto puede requerir acciones adicionales en el destino del proveedor de nube correspondiente para establecer la confianza.",
    "Send samples to detonation in WildFire. Supported in Registry Scanning.":
      "Enviar muestras para su detonación en WildFire. Compatible con el análisis de registros.",
    "To maximize security coverage, include collection of audit logs (GCP Pub/Sub). This may require additional cloud service provider permissions.":
      "Para maximizar la cobertura de seguridad, incluya la recopilación de logs de auditoría (GCP Pub/Sub). Esto puede requerir permisos adicionales del proveedor de servicios en la nube.",
    "Delete": "Eliminar",
    "If you delete it, running authentication templates of this pending instance will not create a valid instance, and will result in unused permissions.":
      "Si la elimina, las plantillas de autenticación en ejecución de esta instancia pendiente no crearán una instancia válida y dejarán permisos sin usar.",
    "confirm": "confirmar",

    // --- External Issues Mapping screen (vendor/product names are proper nouns, left in English) ---
    "Filter Rule": "Regla de filtro",
    "Mapping Statistics": "Estadísticas de asignación",
    "Rule Origin": "Origen de la regla",
    "Vendor Product": "Producto del proveedor",
    "( Mapping is disabled )": "( La asignación está deshabilitada )",

    // --- Asistente de conexion de fuentes de datos (Google Workspace / Office 365 / descripciones de proveedores cloud / 3rd Party AppSec Collector / ANY.RUN) ---
    "About": "Acerca de",
    "Google Workspace productivity and collaboration suite integration for data security, identity monitoring, and compliance":
      "Integración de la suite de productividad y colaboración de Google Workspace para seguridad de datos, supervisión de identidades y cumplimiento normativo",
    "Name and configure the instance capabilities": "Asigne un nombre y configure las funcionalidades de la instancia",
    "Enter a unique name for this instance": "Introduzca un nombre único para esta instancia",
    "Select Recommended to use the suggested authentication method for all selected capabilities. Select Advanced to configure your preferred authentication methods separately for each capability":
      "Seleccione Recomendado para usar el método de autenticación sugerido en todas las funcionalidades seleccionadas. Seleccione Avanzado para configurar sus métodos de autenticación preferidos por separado para cada funcionalidad",
    "Enable Office 365 Log Collection": "Habilitar la recopilación de registros de Office 365",
    "tenant domain": "dominio del tenant",
    "Enter domain name": "Introduzca el nombre de dominio",
    "application client id": "ID de cliente de la aplicación",
    "Enter the application client ID": "Introduzca el ID de cliente de la aplicación",
    "Enter client secret": "Introduzca el secreto de cliente",
    "Scan and protect Salesforce data including files, attachments, and records":
      "Analice y proteja los datos de Salesforce, incluidos archivos, adjuntos y registros",
    "Automate identity lifecycle management including user provisioning, updates, and access control":
      "Automatice la gestión del ciclo de vida de las identidades, incluida el aprovisionamiento de usuarios, las actualizaciones y el control de acceso",
    "Maintain visibility and control over SaaS-based identities, including users, groups, roles, and granular permissions.":
      "Mantenga visibilidad y control sobre las identidades basadas en SaaS, incluidos usuarios, grupos, roles y permisos detallados.",
    "Find your domain: Copy the URL from your browser's address bar while logged into Salesforce.":
      "Cómo encontrar su dominio: copie la URL de la barra de direcciones del navegador mientras está conectado a Salesforce.",
    "Domain URL": "URL del dominio",
    "Exiting now will discard all changes. This action cannot be undone.":
      "Si sale ahora, se descartarán todos los cambios. Esta acción no se puede deshacer.",
    "Exit": "Salir",
    "Collect logs and data from Alibaba Cloud, a leading cloud computing platform.":
      "Recopile registros y datos de Alibaba Cloud, una plataforma líder de computación en la nube.",
    "Collect logs and data from Amazon Web Services (AWS).": "Recopile registros y datos de Amazon Web Services (AWS).",
    "Collect logs and data from Google Cloud Platform (GCP).": "Recopile registros y datos de Google Cloud Platform (GCP).",
    "Kubernetes automates deployment, scaling, and management of containerized apps. Connect your clusters by deploying Cortex connectors.":
      "Kubernetes automatiza la implementación, el escalado y la gestión de aplicaciones en contenedores. Conecte sus clústeres implementando conectores de Cortex.",
    "Collect logs and data from Azure, Microsoft’s cloud computing platform.":
      "Recopile registros y datos de Azure, la plataforma de computación en la nube de Microsoft.",
    "Collects logs and data from Office 365 Management Activity API and Microsoft Graph API.":
      "Recopila registros y datos de Office 365 Management Activity API y Microsoft Graph API.",
    "Collect logs and data from OCI, Oracle’s cloud infrastructure platform.":
      "Recopile registros y datos de OCI, la plataforma de infraestructura en la nube de Oracle.",
    "Salesforce CRM services for data security, identity management, automation, remediation and SaaS Posture Security":
      "Servicios de CRM de Salesforce para seguridad de datos, gestión de identidades, automatización, corrección y seguridad de la postura SaaS",
    "3rd Party AppSec Collector": "Recopilador de AppSec de terceros",
    "Name your collector": "Asigne un nombre a su recopilador",
    "Test file (optional)": "Archivo de prueba (opcional)",
    "Create your 3rd Party AppSec Collector": "Cree su recopilador de AppSec de terceros",
    "Ingest SARIF output third-party AppSec tools and unify all scan in one central view (applicable for SAST findings)":
      "Ingiera la salida SARIF de herramientas de AppSec de terceros y unifique todos los análisis en una vista central (aplicable a los resultados de SAST)",
    "What do you need to do": "Qué debe hacer",
    "Name your collector instance.": "Asigne un nombre a la instancia de su recopilador.",
    "Generate an API key and integrate the provided API key and URL into your chosen process.":
      "Genere una clave de API e integre la clave de API y la URL proporcionadas en el proceso que elija.",
    "(Optional) Test your SARIF file.": "(Opcional) Pruebe su archivo SARIF.",
    "Use a clear, descriptive name to identify this collector easily.":
      "Use un nombre claro y descriptivo para identificar fácilmente este recopilador.",
    "Generate Your Secure Ingestion API Key": "Genere su clave de API de ingesta segura",
    "Generate an API key to securely send SARIF results to your collector.":
      "Genere una clave de API para enviar de forma segura los resultados de SARIF a su recopilador.",
    "Deprecated. Use ANY.RUN TI Feeds, ANY.RUN TI Lookup, ANY.RUN Cloud Sandbox instead.":
      "Obsoleto. Use en su lugar ANY.RUN TI Feeds, ANY.RUN TI Lookup o ANY.RUN Cloud Sandbox.",
    "Server URL": "URL del servidor",
    "Partner Contributed Integration": "Integración aportada por un partner",
    "Support and maintenance for this integration are provided by the author. Please use the following contact details:":
      "El autor proporciona el soporte y el mantenimiento de esta integración. Utilice los siguientes datos de contacto:",
    "How to configure": "Cómo configurar",
    // NOTE: The 5 "How to configure" steps below render each UI term (Settings, Integrations, Add instance,
    // Username, Password, Test) as its own <strong> element, splitting each step's sentence into several text
    // nodes. A single flat-sentence dictionary entry can never match that (translateText() only ever sees one
    // leaf text node at a time), so each step is instead translated fragment-by-fragment here, relying on the
    // already-existing standalone translations of those bolded terms to fill in the bolded parts. The
    // resulting sentences are necessarily a bit more literal than a hand-written translation (DOM order can't
    // be rearranged to match natural word order), but they are fully localized with no English left over.
    "Navigate to": "Vaya a",
    // NOTE: the vendor's actual name includes the period ("ANY.RUN"), confirmed from the live page's DOM — a
    // version of this key without the period ("ANYRUN") was tried first based on a hand-copied description and
    // never matched.
    "Search for ANY.RUN.": "Busque ANY.RUN.",
    "to create and configure a new integration instance.": "para crear y configurar una nueva instancia de integración.",
    "If using API Key authentication method, insert the text": "Si usa el método de autenticación por clave de API, inserte el texto",
    "into the": "en el",
    "parameter and the API key you have into the": "parámetro y la clave de API que tenga en la",
    "to validate the URLs, token, and connection.": "para validar las URL, el token y la conexión.",
    // ANY.RUN's actual steps 4-5 ("Insert ANY.RUN API-KEY into the <strong>Password</strong> parameter." /
    // "Please use "ANY.RUN" as username.") turned out to be simpler than the generic Username+Password
    // instructions above — those apply to some other connector's wizard, not this one. Step 5 has no bolded
    // term, so it's a normal flat-sentence entry; step 4 still needs the fragment treatment since "Password" is
    // bolded.
    "Insert ANY.RUN API-KEY into the": "Inserte la clave de API de ANY.RUN en el",
    // Generic/short fragment, paired specifically with "Insert ANY.RUN API-KEY into the" above. If a future
    // addition elsewhere needs "parameter." with different phrasing, split this out to a more specific key.
    "parameter.": "parámetro.",
    "Please use “ANY.RUN” as username.": "Utilice «ANY.RUN» como nombre de usuario.",
    "View Integration Documentation": "Ver documentación de la integración",
    "Select Content": "Seleccionar contenido",
    "The selected items will automatically be set up. You can add or edit these items later on.":
      "Los elementos seleccionados se configurarán automáticamente. Puede añadir o editar estos elementos más adelante.",
    "Customize": "Personalizar",
    "Connecting this data source will automatically install and update any required dependencies.":
      "Al conectar esta fuente de datos se instalarán y actualizarán automáticamente las dependencias necesarias.",
    "Required Dependencies:": "Dependencias necesarias:",

    // --- Additional wording for the ANY.RUN / Generic AppSec collector wizard pages ---
    "Generic AppSec collector to ingest code scan data": "Recopilador genérico de AppSec para ingerir datos de análisis de código",
    "ANY.RUN Sandbox is an online interactive sandbox for malware analysis, a tool for detection, monitoring, and research of cyber threats in real time.":
      "ANY.RUN Sandbox es un sandbox interactivo en línea para el análisis de malware, una herramienta para la detección, la supervisión y la investigación de ciberamenazas en tiempo real.",
    "New Data Source": "Nueva fuente de datos",
    "Root URL": "URL raíz",
    "This section explains how to configure the instance of ANY.RUN Cloud Sandbox in Cortex.":
      "Esta sección explica cómo configurar la instancia de ANY.RUN Cloud Sandbox en Cortex.",
    "API-KEY from your ANY.RUN account is required.": "Se requiere la clave de API de su cuenta de ANY.RUN.",

    // --- ARIA Packet Intelligence (partner-contributed integration) instance setup page ---
    "The ARIA Cybesecurity Solutions Software-Defined Security (SDS) platform integrates with Cortex to add robustness when responding to incidents. The combination of ARIA hardware, in the form of a Secure Intelligent Adapter (SIA), and software, specifically Packet Intelligence and SDS orchestrator (SDSo), provides the elements required to react instantly when an incident is detected. When integrated with the ARIA solution, you can create playbooks that instruct one or more SIAs to add, modify, or delete rules automatically. These rule changes, which take effect immediately, can block conversations, redirect packets to a recorder or VLAN, or perform a variety of other actions.":
      "La plataforma Software-Defined Security (SDS) de ARIA Cybersecurity Solutions se integra con Cortex para aportar solidez a la respuesta ante incidentes. La combinación del hardware de ARIA, en forma de Secure Intelligent Adapter (SIA), y el software, concretamente Packet Intelligence y el orquestador SDS (SDSo), proporciona los elementos necesarios para reaccionar al instante cuando se detecta un incidente. Al integrarse con la solución ARIA, puede crear Playbooks que indiquen a uno o varios SIA que agreguen, modifiquen o eliminen reglas automáticamente. Estos cambios de reglas, que surten efecto de inmediato, pueden bloquear conversaciones, redirigir paquetes a un grabador o a una VLAN, o realizar otras acciones diversas.",
    "Name should be unique, this name is taken":
      "El nombre debe ser único; este nombre ya está en uso",
    "SDSo Base URL (e.g. http://<IP address or FQDN of SDSo Node>:7443)":
      "URL base de SDSo (p. ej., http://<IP address or FQDN of SDSo Node>:7443)",
    "Single engine:":
      "Motor único:",
    "Users should install SDSo onto a server according to the instructions in Software-Defined Security Installation Guide. During the installation process you can determine the IP address or FQDN of your SDSo instance which is used in the SDSo Base URL. You should also install an SIA according to the Secure Intelligent Adapter Installation Guide. For more information on connecting an SDSo and SIA see the Software-Defined Security Orchestrator User Guide. In addition, you must deploy the PI security service to your SIA, see the Packet Intelligence User Guide for more information.":
      "Los usuarios deben instalar SDSo en un servidor siguiendo las instrucciones de Software-Defined Security Installation Guide. Durante el proceso de instalación puede determinar la dirección IP o el FQDN de su instancia de SDSo, que se utiliza en la URL base de SDSo. También debe instalar un SIA siguiendo la Secure Intelligent Adapter Installation Guide. Para obtener más información sobre cómo conectar un SDSo y un SIA, consulte la Software-Defined Security Orchestrator User Guide. Además, debe implementar el servicio de seguridad PI en su SIA; consulte la Packet Intelligence User Guide para obtener más información.",
    "No recommendations are available":
      "No hay recomendaciones disponibles",

    // --- AWS - EC2 integration instance setup page ---
    // NOTE: the trailing link text "AWS Integrations - Authentication" is a doc title and is intentionally left in English.
    "Amazon Web Services Elastic Compute Cloud (EC2).":
      "Amazon Web Services Elastic Compute Cloud (EC2).",
    "Switch to credentials":
      "Cambiar a credenciales",
    "Secret Key":
      "Clave secreta",
    "AWS STS Regional Endpoints":
      "Puntos de conexión regionales de AWS STS",
    "Before you can use AWS EC2, you need to perform several configuration steps in your AWS environment.":
      "Antes de poder usar AWS EC2, debe realizar varios pasos de configuración en su entorno de AWS.",
    "Prerequisites":
      "Requisitos previos",
    "Attach an instance profile with the required permissions to the Cortex server or engine that is running on your AWS environment.":
      "Asocie un perfil de instancia con los permisos necesarios al servidor o motor de Cortex que se ejecuta en su entorno de AWS.",
    "Instance profile requires minimum permission: sts:AssumeRole.":
      "El perfil de instancia requiere el permiso mínimo: sts:AssumeRole.",
    "Instance profile requires permission to assume the roles needed by the AWS integrations.":
      "El perfil de instancia requiere permiso para asumir los roles que necesitan las integraciones de AWS.",
    "Configure AWS Settings":
      "Configurar los ajustes de AWS",
    "Create an IAM Role for the Instance Profile.":
      "Cree un rol de IAM para el perfil de instancia.",
    "Attach a Role to the Instance Profile.":
      "Asocie un rol al perfil de instancia.",
    "Configure the Necessary IAM Roles that the AWS Integration Can Assume.":
      "Configure los roles de IAM necesarios que la integración de AWS puede asumir.",
    "For detailed instructions, see the":
      "Para obtener instrucciones detalladas, consulte",

    // --- AWS - IAM (user lifecycle management) integration instance setup page ---
    "Integrate with AWS's services to execute CRUD and Group operations for employee lifecycle processes.":
      "Se integra con los servicios de AWS para ejecutar operaciones CRUD y de grupo en los procesos del ciclo de vida de los empleados.",
    "Base URL":
      "URL base",
    "Authentication Token":
      "Token de autenticación",
    "Allow creating users":
      "Permitir la creación de usuarios",
    "Allow updating users":
      "Permitir la actualización de usuarios",
    "Allow enabling users":
      "Permitir la habilitación de usuarios",
    "Allow disabling users":
      "Permitir la deshabilitación de usuarios",
    "Automatically create user if not found in update command":
      "Crear automáticamente el usuario si no se encuentra en el comando de actualización",
    "Incoming Mapper":
      "Asignador entrante",

    // --- AWS - Identity and Access Management integration instance setup page ---
    "Amazon Web Services Identity and Access Management (IAM).":
      "Amazon Web Services Identity and Access Management (IAM).",
    "Role Session Name":
      "Nombre de sesión del rol",

    // --- AWS CodeBuild data-source wizard (Step 1: Add Environment Variables) ---
    "Add Environment Variables":
      "Agregar variables de entorno",
    "Configure Subscription":
      "Configurar suscripción",
    "Before you begin, you'll need to add your API key and API ID to your AWS Secrets Manager. Please copy and use the secret names suggested below as the secret keys. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Antes de comenzar, deberá agregar su clave de API y su ID de API a AWS Secrets Manager. Copie y utilice los nombres de secreto sugeridos a continuación como claves de los secretos. Si es necesario, puede generar un nuevo token con el enlace que aparece a continuación y copiar y utilizar los valores generados como valores de sus secretos.",
    "Create the following secrets on your AWS Secrets Manager. Ensure that the IAM service role associated with your CodeBuild project has the necessary permissions to read the Cortex API key and key ID from AWS Secrets Manager.":
      "Cree los siguientes secretos en AWS Secrets Manager. Asegúrese de que el rol de servicio de IAM asociado a su proyecto de CodeBuild tenga los permisos necesarios para leer la clave de API de Cortex y el ID de clave desde AWS Secrets Manager.",
    "Choose the architecture your CI tool runs on:":
      "Elija la arquitectura en la que se ejecuta su herramienta de CI:",
    "Select architecture":
      "Seleccionar arquitectura",

    // --- AWS CodeCommit data-source wizard ---
    // NOTE: the steps below are split by <b>/<button> into several text nodes, so each sentence is translated
    // fragment-by-fragment (DOM order is fixed). AWS console labels / CloudFormation parameter names inside the
    // bold elements (e.g. "CloudFormation > Stacks", "Resource Name Prefix:", "Select Repositories") are left in English.
    "This integration enables you to effectively detect, analyze and remediate security issues.":
      "Esta integración le permite detectar, analizar y corregir problemas de seguridad de forma eficaz.",
    "Download the":
      "Descargue la",
    "CloudFormation template":
      "plantilla de CloudFormation",
    ", alternatively, copy the link and send it to your administrator for the next steps.":
      ", o bien copie el enlace y envíelo a su administrador para los siguientes pasos.",
    "In your AWS console, navigate to":
      "En su consola de AWS, vaya a",
    "Click on":
      "y luego haga clic en",
    ". Upload the template file and hit next. Provide the stack name. Note that the following parameters will be pre populated:":
      ". Cargue el archivo de plantilla y haga clic en Next. Indique el nombre de la pila. Tenga en cuenta que los siguientes parámetros aparecerán rellenados previamente:",
    "You can modify the default value.":
      "Puede modificar el valor predeterminado.",
    "DO NOT change this ID.":
      "NO cambie este ID.",
    "After the stack is created, navigate to":
      "Una vez creada la pila, vaya a",
    ", and verify that the integration is displayed.":
      ", y compruebe que la integración aparece.",
    "Select Repositories: In the":
      "Seleccionar repositorios: en el menú",
    "menu choose":
      "y elija",
    "to complete the integration.":
      "para completar la integración.",

    // --- AbuseIPDB integration instance setup page ---
    // NOTE: the "A+ ... F" source-reliability scale is the standard option list of the "Source Reliability" dropdown shared by many integrations.
    "Central repository to report and identify IP addresses that have been associated with malicious activity online. Check the Detailed Information section for more information on how to configure the integration.":
      "Repositorio central para informar e identificar direcciones IP asociadas con actividad maliciosa en línea. Consulte la sección Información detallada para obtener más información sobre cómo configurar la integración.",
    "AbuseIP server URL":
      "URL del servidor de AbuseIP",
    "API Key (v2)":
      "Clave de API (v2)",
    "Abuse.ch Hunting API URL":
      "URL de la API Hunting de Abuse.ch",
    "Abuse.ch Hunting API Key":
      "Clave de la API Hunting de Abuse.ch",
    "Collect":
      "Recopilar",
    "Source Reliability":
      "Fiabilidad de la fuente",
    "A+ - 3rd party enrichment":
      "A+ - Enriquecimiento de terceros",
    "A - Completely reliable":
      "A - Totalmente fiable",
    "B - Usually reliable":
      "B - Normalmente fiable",
    "C - Fairly reliable":
      "C - Bastante fiable",
    "D - Not usually reliable":
      "D - Normalmente no fiable",
    "E - Unreliable":
      "E - No fiable",
    "F - Reliability cannot be judged":
      "F - No se puede juzgar la fiabilidad",
    "Disable reputation lookups for private IP addresses":
      "Deshabilitar las consultas de reputación para direcciones IP privadas",
    "Minimum score threshold":
      "Umbral mínimo de puntuación",
    "Minimum score from AbuseIPDB for the IP to be considered malicious. (Must be above 20).":
      "Puntuación mínima de AbuseIPDB para que la IP se considere maliciosa. (Debe ser superior a 20).",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout, and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "Buscar en una subred completa muy atrás en el tiempo (p. ej., Days=365) probablemente provocará un tiempo de espera agotado del servidor y recibirá una respuesta 500 Internal Server Error del servidor de AbuseIPDB.",
    "Report Categories":
      "Categorías de informe",
    "Selected items were set up on first connection. You can change these items via the original pages.":
      "Los elementos seleccionados se configuraron en la primera conexión. Puede cambiar estos elementos desde las páginas originales.",

    // --- Active Directory Query (deprecated) integration instance setup page ---
    "Deprecated. Use the Active Directory Query v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Active Directory Query v2.",
    "Server IP (e.g. 192.168.0.1)":
      "IP del servidor (p. ej., 192.168.0.1)",
    "Base DN (e.g. DC=domain,DC=com)":
      "DN base (p. ej., DC=domain,DC=com)",
    "Security Type (none/ssl/tls)":
      "Tipo de seguridad (none/ssl/tls)",
    "Page Size":
      "Tamaño de página",
    "Do not validate server certificate (insecure)":
      "No validar el certificado del servidor (no seguro)",
    "Full path for CA certificate of Active Directory server (type pem)":
      "Ruta completa del certificado de CA del servidor de Active Directory (tipo pem)",
    "There are no additional instructions for this integration.":
      "No hay instrucciones adicionales para esta integración.",

    // --- Active Directory Query v2 integration instance setup page ---
    "The Active Directory Query integration enables you to access and manage Active Directory objects (users, contacts, and computers).":
      "La integración Active Directory Query le permite acceder a los objetos de Active Directory (usuarios, contactos y equipos) y administrarlos.",
    "Server IP address (for example, 192.168.0.1)":
      "Dirección IP del servidor (por ejemplo, 192.168.0.1)",
    "Base DN (for example \"dc=company,dc=com\")":
      "DN base (por ejemplo, \"dc=company,dc=com\")",
    "Secure Connection":
      "Conexión segura",
    "Outgoing Mapper":
      "Asignador saliente",
    "Group CN for terminated employees":
      "CN del grupo para empleados dados de baja",
    "Active Directory search uses paging. You set the page size by specifying the ‘page size’ parameter in the instance settings.":
      "La búsqueda de Active Directory usa paginación. Para establecer el tamaño de página, especifique el parámetro ‘Tamaño de página’ en la configuración de la instancia.",

    // --- Agari Phishing Defense (Partner Contribution) integration instance setup page ---
    // NOTE: the docs sentences are split by inline links into several text nodes, so they are translated
    // fragment-by-fragment ("Quick Start", "this", "page." etc. are link texts / sentence tails).
    "Agari Phishing Defense stops phishing, BEC, and other identity deception attacks that trick employees into harming your business.":
      "Agari Phishing Defense detiene el phishing, el BEC y otros ataques de suplantación de identidad que engañan a los empleados para que perjudiquen a su empresa.",
    "URL to connect to Agari":
      "URL para conectarse a Agari",
    "API Key":
      "Clave de API",
    "Fetches issues":
      "Recupera incidencias",
    "Maximum number of incidents to fetch every time":
      "Número máximo de incidentes que se recuperarán cada vez",
    "First fetch time interval":
      "Intervalo de tiempo de la primera recuperación",
    "Policy action taken":
      "Acción de política realizada",
    "Exclude alerts":
      "Excluir alertas",
    "System Alert":
      "Alerta del sistema",
    "Fetches policy events as per the filter to limit the amount of data. Can be applied to specific fields.":
      "Recupera eventos de política según el filtro para limitar la cantidad de datos. Se puede aplicar a campos específicos.",
    "To use this integration, simply follow the":
      "Para usar esta integración, simplemente siga los pasos de",
    "Quick Start":
      "inicio rápido",
    "steps to enable API access.":
      "para habilitar el acceso a la API.",
    "Contact us":
      "Contáctenos",
    "if you don’t have an Agari account.":
      "si no tiene una cuenta de Agari.",
    "Syntax to filter policy events":
      "Sintaxis para filtrar eventos de política",
    "To filter by applying the valid syntax you can refer to":
      "Para filtrar aplicando la sintaxis válida, puede consultar",
    "this":
      "esta",
    "page.":
      "página.",

    // --- Akamai WAF integration instance setup page ---
    // NOTE: the link text "Akamai Control Panel" (product console name) is intentionally left in English.
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features. This is the modified version where a new command \"akamai-update-network-list-elements\" was added by the SA.":
      "Utilice la integración de Akamai WAF para administrar conjuntos comunes de listas utilizados por diversos productos y funciones de seguridad de Akamai. Esta es la versión modificada en la que el SA añadió un nuevo comando \"akamai-update-network-list-elements\".",
    "Server URL (e.g., https://example.net)":
      "URL del servidor (p. ej., https://example.net)",
    "Client token":
      "Token de cliente",
    "Access token":
      "Token de acceso",
    "Client secret":
      "Secreto de cliente",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as Kona Site Defender, Web App Protector, and Bot Manager. Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "La API Network Lists le permite administrar un conjunto común de listas para su uso en diversos productos de seguridad de Akamai, como Kona Site Defender, Web App Protector y Bot Manager. Las listas de red son conjuntos compartidos de direcciones IP, bloques CIDR o áreas geográficas amplias. Además de administrar sus propias listas, también puede acceder a listas de solo lectura que Akamai actualiza dinámicamente para usted.",
    "To generate API keys go to the":
      "Para generar claves de API, vaya a",
    ". For detailed instructions, see the integration documention.":
      ". Para obtener instrucciones detalladas, consulte la documentación de la integración.",

    // --- Analyst1 (Partner Contribution) integration instance setup page ---
    // NOTE: the docs lists/sentences are split by <b>/<code> into several text nodes, so they are translated
    // fragment-by-fragment. The lone connectors "and" / "or" / "to" between bold items are intentionally NOT registered
    // (too generic: they would also hit AND/OR/To labels elsewhere via the case-insensitive fallback) and stay in English.
    "This integration utilizes Analyst1's system to enrich XSOAR indicators with data provided by the Analyst1 REST API, such as actor and malware information, activity and reported dates, evidence and hit counts, and more.":
      "Esta integración utiliza el sistema de Analyst1 para enriquecer los indicadores de XSOAR con los datos proporcionados por la API REST de Analyst1, como información sobre actores y malware, fechas de actividad e informes, pruebas y número de coincidencias, entre otros.",
    "Basic Authentication":
      "Autenticación básica",
    "Client ID/Username":
      "ID de cliente/Nombre de usuario",
    "Client Secret/Password":
      "Secreto de cliente/Contraseña",
    "Domain of Analyst1 server to use":
      "Dominio del servidor de Analyst1 que se usará",
    "Log Level:":
      "Nivel de registro:",
    "Off":
      "Desactivado",
    "Do not use in CLI by default":
      "No usar en la CLI de forma predeterminada",
    "Risk Score Mapping: Lowest":
      "Asignación de puntuación de riesgo: Mínima",
    "Benign":
      "Benigno",
    "Risk Score Mapping: Low":
      "Asignación de puntuación de riesgo: Baja",
    "Risk Score Mapping: Moderate":
      "Asignación de puntuación de riesgo: Moderada",
    "Suspicious":
      "Sospechoso",
    "Risk Score Mapping: High":
      "Asignación de puntuación de riesgo: Alta",
    "Risk Score Mapping: Critical":
      "Asignación de puntuación de riesgo: Crítica",
    "Risk Score Mapping: Unknown":
      "Asignación de puntuación de riesgo: Desconocida",
    "Apply Analyst1 entity-type tags to indicators":
      "Aplicar etiquetas de tipo de entidad de Analyst1 a los indicadores",
    "Indicator Expiration Method":
      "Método de caducidad del indicador",
    "Indicator Type":
      "Tipo de indicador",
    "Analyst1 Integration Configuration":
      "Configuración de la integración de Analyst1",
    "This integration connects XSOAR to the Analyst1 threat intelligence platform to enrich indicators and manage sensor taskings.":
      "Esta integración conecta XSOAR con la plataforma de inteligencia de amenazas de Analyst1 para enriquecer indicadores y administrar tareas de sensores.",
    "Configuration Parameters":
      "Parámetros de configuración",
    "Server Configuration":
      "Configuración del servidor",
    "Domain of Analyst1 server":
      "Dominio del servidor de Analyst1",
    ": Enter your Analyst1 server domain in the format":
      ": Introduzca el dominio de su servidor de Analyst1 con el formato",
    "Do not include":
      "No incluya",
    "This integration supports two authentication methods. Select one via the":
      "Esta integración admite dos métodos de autenticación. Seleccione uno mediante el campo",
    "dropdown.":
      "(lista desplegable).",
    "Basic Authentication (default)":
      "Autenticación básica (predeterminada)",
    "Enter the":
      "Introduzca",
    "for an Analyst1 account that has the REST role assigned.":
      "de una cuenta de Analyst1 que tenga asignado el rol REST.",
    "In Analyst1, create (or open) an API Key.":
      "En Analyst1, cree (o abra) una clave de API.",
    "Copy the":
      "Copie",
    "Client ID":
      "ID de cliente",
    "from the API Key.":
      "de la clave de API.",
    "In XSOAR, set":
      "En XSOAR, establezca",
    "Enter the Client ID in the":
      "Introduzca el ID de cliente en",
    "field and the Client Secret in the":
      "y el secreto de cliente en",
    "field.":
      "(campos).",
    "Risk Score Mapping (Optional)":
      "Asignación de puntuación de riesgo (opcional)",
    "The integration includes configurable risk score mapping parameters that control how Analyst1 risk scores map to XSOAR verdicts:":
      "La integración incluye parámetros configurables de asignación de puntuación de riesgo que controlan cómo se asignan las puntuaciones de riesgo de Analyst1 a los veredictos de XSOAR:",
    "Lowest":
      "Mínima",
    ": Default mapping is Benign":
      ": La asignación predeterminada es Benigno",
    ": Default mapping is Unknown":
      ": La asignación predeterminada es Desconocido",
    "Moderate":
      "Moderada",
    ": Default mapping is Suspicious":
      ": La asignación predeterminada es Sospechoso",
    ": Default mapping is Malicious":
      ": La asignación predeterminada es Malicioso",
    "These can be customized based on your organization’s risk tolerance and threat response procedures.":
      "Estos valores se pueden personalizar según la tolerancia al riesgo y los procedimientos de respuesta a amenazas de su organización.",
    "Entity Type Tags (Optional)":
      "Etiquetas de tipo de entidad (opcional)",
    "Enable “Apply Analyst1 entity-type tags to indicators” to automatically tag indicators with Analyst1 entity classifications such as:":
      "Habilite “Aplicar etiquetas de tipo de entidad de Analyst1 a los indicadores” para etiquetar automáticamente los indicadores con clasificaciones de entidad de Analyst1, como:",
    "For assistance with this integration, contact Analyst1 support:":
      "Para obtener ayuda con esta integración, póngase en contacto con el soporte de Analyst1:",

    // --- Anomali Security Analytics Alerts (Partner Contribution) integration instance setup page ---
    // NOTE: the product title, support email and URL are intentionally left in English.
    "The Anomali Security Analytics pack allows users to manage security alerts by interacting directly with the Anomali Security Analytics platform. It supports creating search jobs, monitoring their status, retrieving results, and updating alert statuses or comments, streamlining integration with Palo Alto XSOAR.":
      "El paquete Anomali Security Analytics permite a los usuarios gestionar alertas de seguridad interactuando directamente con la plataforma Anomali Security Analytics. Admite la creación de trabajos de búsqueda, la supervisión de su estado, la recuperación de resultados y la actualización de los estados o comentarios de las alertas, lo que agiliza la integración con Palo Alto XSOAR.",
    "Switch to username and password":
      "Cambiar a nombre de usuario y contraseña",
    "(Username, API Key)":
      "(Nombre de usuario, clave de API)",
    "No credentials":
      "Sin credenciales",
    "Fetch query":
      "Consulta de recuperación",
    "Maximum incidents to fetch.":
      "Número máximo de incidentes que se recuperarán.",
    "First fetch time":
      "Hora de la primera recuperación",
    "Incidents Fetch Interval":
      "Intervalo de recuperación de incidentes",
    "To access Anomali Security Analysis Alerts using the API, you must obtain an API key from your Anomali Security Analytics account. Please refer to the Anomali documentation or contact your administrator to get the API credentials. Once obtained, configure the integration by entering the API key in the integration setup page.":
      "Para acceder a Anomali Security Analysis Alerts mediante la API, debe obtener una clave de API de su cuenta de Anomali Security Analytics. Consulte la documentación de Anomali o póngase en contacto con su administrador para obtener las credenciales de API. Una vez obtenida, configure la integración introduciendo la clave de API en la página de configuración de la integración.",

    // --- Anomali ThreatStream (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English.
    "Deprecated. Use Anomali ThreatStream v3 instead. Use Anomali ThreatStream to query and submit threats":
      "Obsoleto. Utilice Anomali ThreatStream v3 en su lugar. Utilice Anomali ThreatStream para consultar y enviar amenazas",
    "Server URL (e.g. https://192.168.0.1)":
      "URL del servidor (p. ej., https://192.168.0.1)",

    // --- Anomali ThreatStream Feed integration instance setup page ---
    // NOTE: the product title and the doc URL are intentionally left in English. The last key is the text node before the
    // <a> link ("register at <link>."), so its translation has no trailing punctuation (the "." after the link is a separate node).
    "Use the Anomali ThreatStream Feed Integration to fetch indicators from the Anomali ThreatStream.":
      "Utilice la integración Anomali ThreatStream Feed para recuperar indicadores de Anomali ThreatStream.",
    "Server URL (e.g., https://www.test.com)":
      "URL del servidor (p. ej., https://www.test.com)",
    "Fetches indicators":
      "Recupera indicadores",
    "Classifier":
      "Clasificador",
    "Mapper (incoming)":
      "Asignador (entrante)",
    "Fetch by":
      "Recuperar por",
    "Modified Time":
      "Hora de modificación",
    "Feed Fetch Interval":
      "Intervalo de recuperación del feed",
    "Anomali ThreatStream Feed Integration Help":
      "Ayuda de la integración Anomali ThreatStream Feed",
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data. This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Anomali ThreatStream es una plataforma líder de inteligencia de amenazas diseñada para ayudar a las organizaciones a recopilar, analizar y actuar sobre grandes volúmenes de datos de amenazas. Esta integración le permite recuperar automáticamente indicadores de compromiso (IOC), como IP, dominios, URL y hashes de archivos, directamente en su plataforma de operaciones de seguridad, lo que mejora su capacidad para detectar y responder a las ciberamenazas.",
    "How to Configure Your Integration":
      "Cómo configurar su integración",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field. To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "Clave de API: pegue en este campo la clave de API que obtuvo de su cuenta de Anomali ThreatStream. Para acceder a ThreatStream mediante la API, necesita un ID de usuario y una clave de API. Para obtener estas credenciales, regístrese en",

    // --- Anomali ThreatStream Feed: additions (per-sentence halves of the two docs paragraphs, in case the paragraph is split
    // into separate text nodes at the line break; plus title/data-tooltip attribute strings: tooltips, "Go to ..." button, clear icon) ---
    "Anomali ThreatStream is a leading threat intelligence platform designed to help organizations collect, analyze, and act on vast amounts of threat data.":
      "Anomali ThreatStream es una plataforma líder de inteligencia de amenazas diseñada para ayudar a las organizaciones a recopilar, analizar y actuar sobre grandes volúmenes de datos de amenazas.",
    "This integration allows you to automatically fetch Indicators of Compromise (IOCs) such as IPs, domains, URLs, and file hashes directly into your security operations platform, enhancing your ability to detect and respond to cyber threats.":
      "Esta integración le permite recuperar automáticamente indicadores de compromiso (IOC), como IP, dominios, URL y hashes de archivos, directamente en su plataforma de operaciones de seguridad, lo que mejora su capacidad para detectar y responder a las ciberamenazas.",
    "API Key: Paste the API key you retrieved from your Anomali ThreatStream account into this field.":
      "Clave de API: pegue en este campo la clave de API que obtuvo de su cuenta de Anomali ThreatStream.",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at":
      "Para acceder a ThreatStream mediante la API, necesita un ID de usuario y una clave de API. Para obtener estas credenciales, regístrese en",
    "Classifier determines the type of issue that is created for events ingested from this integration instance.":
      "El clasificador determina el tipo de incidencia que se crea para los eventos ingeridos desde esta instancia de integración.",
    "Mapping determines how event fields are mapped to the Cortex CLOUD issue's fields.":
      "El mapeo determina cómo se asignan los campos del evento a los campos de la incidencia de Cortex CLOUD.",
    "Go to Classification & Mapping page":
      "Ir a la página de clasificación y mapeo",
    "Cancel Selection":
      "Cancelar selección",

    // --- Anomali ThreatStream v2 (Deprecated) integration instance setup page ---
    // NOTE: the product title is intentionally left in English. The docs paragraph is already registered (ThreatStream Feed page).
    "Deprecated. Use Anomali ThreatStream v3 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Anomali ThreatStream v3.",
    "Threshold of the indicator.":
      "Umbral del indicador.",

    // --- Anomali ThreatStream v3 integration instance setup page ---
    // NOTE: product title / doc h1 / URL are intentionally left in English. The docs paragraph is split by inline <span>s and by line
    // breaks, so it is registered line-by-line and fragment-by-fragment ("If the indicator" + "confidence" + "...").
    // "confidence" is a generic one-word key: the case-insensitive fallback will also translate a standalone "Confidence" elsewhere.
    "Use Anomali ThreatStream to query and submit threats.":
      "Utilice Anomali ThreatStream para consultar y enviar amenazas.",
    "Default DBOT score for indicators with low confidence":
      "Puntuación DBOT predeterminada para indicadores con baja confianza",
    "Remote API":
      "API remota",
    "URL threshold":
      "Umbral de URL",
    "IP threshold":
      "Umbral de IP",
    "Domain threshold":
      "Umbral de dominio",
    "File threshold":
      "Umbral de archivo",
    "Email threshold":
      "Umbral de correo electrónico",
    "Include inactive results":
      "Incluir resultados inactivos",
    "Create relationships":
      "Crear relaciones",
    "Configure Indicator Threshold Parameters":
      "Configurar los parámetros de umbral de indicadores",
    "Each indicator has a threshold parameter that impacts the indicator’s DBotScore calculation.":
      "Cada indicador tiene un parámetro de umbral que afecta al cálculo de DBotScore del indicador.",
    "The indicator DBotScore is calculated based on the threshold parameter as follows:":
      "El DBotScore del indicador se calcula en función del parámetro de umbral de la siguiente manera:",
    "If the indicator":
      "Si el valor de",
    "confidence":
      "confianza",
    "value is above the threshold parameter value, the Score is set to 3 (Malicious)":
      "del indicador es superior al valor del parámetro de umbral, la puntuación se establece en 3 (malicioso)",
    "Otherwise the DBotScore is set to 1 (Good).":
      "De lo contrario, el DBotScore se establece en 1 (bueno).",
    "If the threshold parameter value is not specified, the DBotScore is calculated as follows:":
      "Si no se especifica el valor del parámetro de umbral, el DBotScore se calcula de la siguiente manera:",
    "> 65, the DBotScore value is set to 3 (Malicious).":
      "es superior a 65, el valor de DBotScore se establece en 3 (malicioso).",
    "is between 25 and 65, the DBotScore value is set to 2 (Suspicious).":
      "está entre 25 y 65, el valor de DBotScore se establece en 2 (sospechoso).",
    "< 25, the DBotScore value is set to 1 (Good).":
      "es inferior a 25, el valor de DBotScore se establece en 1 (bueno).",

    // --- Batch: strings reported as still untranslated (user list) + Apollo.io SSPM connector wizard ---
    // NOTE: multi-line doc paragraphs (AbuseIPDB / Akamai) are registered LINE-BY-LINE here in addition to the joined forms above,
    // because the live DOM exposes them as separate lines/text nodes; each line translation concatenates naturally.
    // "Previous" is a generic one-word key (also reached through the case-insensitive fallback).
    "TI Lookup is a searchable database of IOCs, IOAs, IOBs, and events for threat hunting and a service for browsing malicious files by their content.":
      "TI Lookup es una base de datos con capacidad de búsqueda de IOC, IOA, IOB y eventos para la búsqueda de amenazas, y un servicio para explorar archivos maliciosos por su contenido.",
    "You have unsaved changes.":
      "Tiene cambios sin guardar.",
    "Are you sure you want to leave?":
      "¿Está seguro de que desea salir?",
    "Previous":
      "Anterior",
    "Use the following sample as a reference for buildspec.yaml configuration:":
      "Utilice el siguiente ejemplo como referencia para la configuración de buildspec.yaml:",
    "Integrate Application Security with your AWS CodeBuild to gain comprehensive visibility into your CodeBuild platform.":
      "Integre Application Security con su AWS CodeBuild para obtener una visibilidad integral de su plataforma CodeBuild.",
    "Integrate Application Security with your AWS CodeCommit to gain comprehensive visibility into your CodeCommit platform.":
      "Integre Application Security con su AWS CodeCommit para obtener una visibilidad integral de su plataforma CodeCommit.",
    "Searching an entire subnet far back in time (e.g. Days=365) will likely cause a server timeout,":
      "Buscar en toda una subred muy atrás en el tiempo (p. ej., Days=365) probablemente provocará un tiempo de espera del servidor,",
    "and you will receive a 500 Internal Server Error response from AbuseIPDB server.":
      "y recibirá una respuesta 500 Internal Server Error del servidor de AbuseIPDB.",
    "The Network Lists API enables you to manage a common set of lists for use in various Akamai security products such as":
      "La API Network Lists le permite administrar un conjunto común de listas para su uso en varios productos de seguridad de Akamai, como",
    "Kona Site Defender, Web App Protector, and Bot Manager.":
      "Kona Site Defender, Web App Protector y Bot Manager.",
    "Network lists are shared sets of IP addresses, CIDR blocks, or broad geographic areas. In addition to managing your":
      "Las listas de red son conjuntos compartidos de direcciones IP, bloques CIDR o áreas geográficas amplias. Además de administrar sus",
    "own lists, you can also access read-only lists that Akamai dynamically updates for you.":
      "propias listas, también puede acceder a listas de solo lectura que Akamai actualiza dinámicamente para usted.",
    "Collects generic data from Amazon Simple Storage Service (Amazon S3).":
      "Recopila datos genéricos de Amazon Simple Storage Service (Amazon S3).",
    "There are some unsaved changes":
      "Hay cambios sin guardar",
    "Are you sure you want to close this window?":
      "¿Está seguro de que desea cerrar esta ventana?",
    "No, take me back":
      "No, volver",
    "Yes, I am sure":
      "Sí, estoy seguro",
    "To access ThreatStream using the API, you need a user ID and API key. To get these credentials, register at http://ui.threatstream.com.":
      "Para acceder a ThreatStream mediante la API, necesita un ID de usuario y una clave de API. Para obtener estas credenciales, regístrese en http://ui.threatstream.com.",
    "Confidence Threshold":
      "Umbral de confianza",
    "Detect, monitor and alert on settings of your SaaS application.":
      "Detecte, supervise y reciba alertas sobre la configuración de su aplicación SaaS.",
    "Instance URL":
      "URL de la instancia",
    "Security Posture":
      "Postura de seguridad",
    "The Apollo.io API base URL. This is typically https://api.apollo.io for all accounts.":
      "La URL base de la API de Apollo.io. Normalmente es https://api.apollo.io para todas las cuentas.",
    "Your Apollo.io API key. Navigate to Settings → Integrations → API in your Apollo.io account to generate one. SSPM requires this key to authenticate to the Apollo.io API.":
      "Su clave de API de Apollo.io. Vaya a Configuración → Integraciones → API en su cuenta de Apollo.io para generar una. SSPM necesita esta clave para autenticarse en la API de Apollo.io.",

    // --- Batch: strings from the Collector export (Jira / Asimily Insight docs, marketplace card descriptions, SVG icon titles) ---
    // Fragments (", found on ...", ": Enable to ...", "Leave the" etc.) are registered as-is because the live DOM splits sentences at inline elements.
    // Jira terminology follows Jira own localisation (ja 課題 / es incidencias / fr tickets / de Vorgänge); Cortex "incident" keeps the Cortex term.
    "- Enter the API token. To generate an API token, see":
      "- Introduzca el token de API. Para generar un token de API, consulte",
    "- Enter your user email.":
      "- Introduzca su correo electrónico de usuario.",
    "– Represents anomaly alerts.":
      "– Representa las alertas de anomalías.",
    "– Represents vulnerabilities.":
      "– Representa las vulnerabilidades.",
    ", found on the left side menu.":
      ", que se encuentra en el menú lateral izquierdo.",
    ", which are required in the configuration screen. Copy these values and paste them into the respective fields in the configuration screen.":
      ", que se necesitan en la pantalla de configuración. Copie estos valores y péguelos en los campos correspondientes de la pantalla de configuración.",
    ", which will be used to integrate Cortex with Jira:":
      ", que se utilizará para integrar Cortex con Jira:",
    ": Asimily API user credentials. To create a new user, go to":
      ": Credenciales del usuario de la API de Asimily. Para crear un usuario nuevo, vaya a",
    ": Base URL of the Asimily Insight portal. Format:":
      ": URL base del portal de Asimily Insight. Formato:",
    ": Choose a log level from the dropdown.":
      ": Elija un nivel de registro en la lista desplegable.",
    ": Default Classifier and Mapper provided as":
      ": Clasificador y asignador predeterminados proporcionados como",
    ": Enable to fetch anomaly alerts.":
      ": Habilítelo para recuperar alertas de anomalías.",
    ": Enable to fetch device vulnerability incidents.":
      ": Habilítelo para recuperar incidentes de vulnerabilidades de dispositivos.",
    ": Enable to fetch incidents from Asimily Insight into Cortex.":
      ": Habilítelo para recuperar incidentes de Asimily Insight en Cortex.",
    ": Filter to only fetch anomalies of the selected criticality.":
      ": Filtra para recuperar solo las anomalías de la criticidad seleccionada.",
    ": Filter to only fetch CVEs above the specified score threshold.":
      ": Filtra para recuperar solo las CVE por encima del umbral de puntuación especificado.",
    ": Only fetch incidents for devices with specified tags.":
      ": Recupera solo los incidentes de los dispositivos con las etiquetas especificadas.",
    ": Only fetch incidents for specified device families.":
      ": Recupera solo los incidentes de las familias de dispositivos especificadas.",
    ": Set how often incidents should be fetched (e.g.,":
      ": Establece la frecuencia con la que se recuperan los incidentes (p. ej.,",
    ". The OProxy URL is a client side web page that provides an easy interface to copy the authorization code from the response to the integration configuration during the authorization flow. Optionally, if you don’t want to use the OProxy URL, you can use a localhost URL on an unused local port, for example:":
      ". La URL de OProxy es una página web del lado del cliente que ofrece una interfaz sencilla para copiar el código de autorización de la respuesta a la configuración de la integración durante el flujo de autorización. Opcionalmente, si no desea usar la URL de OProxy, puede usar una URL de localhost en un puerto local sin usar, por ejemplo:",
    ". You will then need to copy the code from the URL address bar in the response.":
      ". A continuación, deberá copiar el código de la barra de direcciones de la URL de la respuesta.",
    "(Client ID, Client Secret)":
      "(ID de cliente, secreto de cliente)",
    "(Personal Access Token)":
      "(token de acceso personal)",
    ") that will drop incoming incidents if it is a duplicate. It will search all past incidents with all status. The script can be used for configuring Pre-Process Rules to avoid duplication.":
      ") que descartará los incidentes entrantes si están duplicados. Buscará en todos los incidentes anteriores con cualquier estado. El script se puede usar para configurar reglas de preprocesamiento y así evitar duplicados.",
    "), this means there may be new devices included to fetch incidents or there will be new incidents included for existing devices. It is strongly recommended to":
      "), esto significa que puede haber nuevos dispositivos incluidos para recuperar incidentes o que habrá nuevos incidentes incluidos para los dispositivos existentes. Se recomienda encarecidamente",
    "1. Basic Authentication:":
      "1. Autenticación básica:",
    "3. Private Access Token":
      "3. Token de acceso privado",
    "a. Click":
      "a. Haga clic en",
    "b. Click":
      "b. Haga clic en",
    "Add comments":
      "Agregar comentarios",
    "Add User":
      "Agregar usuario",
    "Admin page":
      "Página de administración",
    "and follow the steps.":
      "y siga los pasos.",
    "API token (Deprecated)":
      "Token de API (obsoleto)",
    "API token (Recommended)":
      "Token de API (recomendado)",
    "API User Name":
      "Nombre de usuario de la API",
    "API Username":
      "Nombre de usuario de la API",
    "Application link":
      "Enlace de aplicación",
    "Application links":
      "Enlaces de aplicación",
    "As of June 2019, Basic authentication with passwords for Jira is no longer supported, please use basic authentication using API Token or use OAuth 1.0. To use basic authentication, follow":
      "Desde junio de 2019, Jira ya no admite la autenticación básica con contraseñas; utilice la autenticación básica con un token de API o utilice OAuth 1.0. Para usar la autenticación básica, siga",
    "Asimily Insight Integration":
      "Integración de Asimily Insight",
    "Asimily Portal URL":
      "URL del portal de Asimily",
    "Authentication Methods":
      "Métodos de autenticación",
    "Authorization code":
      "Código de autorización",
    "AutoFocus documentation":
      "Documentación de AutoFocus",
    "Azure Resource Graph integration is designed to allow for executing Azure Resource Graph commands, like querying resource data.":
      "La integración de Azure Resource Graph está diseñada para permitir la ejecución de comandos de Azure Resource Graph, como la consulta de datos de recursos.",
    "Azure Risky Users provides access to all at-risk users and risk detections in the Azure AD environment.":
      "Azure Risky Users proporciona acceso a todos los usuarios en riesgo y a las detecciones de riesgo del entorno de Azure AD.",
    "back icon":
      "Icono de retroceso",
    "cases and issues icon":
      "Icono de casos e incidencias",
    "dashboards reports icon":
      "Icono de paneles e informes",
    "favorites icon":
      "Icono de favoritos",
    "help icon":
      "Icono de ayuda",
    "inventory icon":
      "Icono de inventario",
    "investigation response icon":
      "Icono de investigación y respuesta",
    "lock filled icon":
      "Icono de candado relleno",
    "modules icon":
      "Icono de módulos",
    "notification bell icon":
      "Icono de campana de notificaciones",
    "posture management icon":
      "Icono de gestión de la postura",
    "resize handle icon":
      "Icono del controlador de cambio de tamaño",
    "settings icon":
      "Icono de configuración",
    "tenent navigator icon":
      "Icono del navegador de tenant",
    "threat management icon":
      "Icono de gestión de amenazas",
    "Basic Authentication permissions":
      "Permisos de autenticación básica",
    "Brandefense is a Cyber Intelligence Platform that responds directly and effectively to today's complex cyber threats.":
      "Brandefense es una plataforma de inteligencia cibernética que responde de forma directa y eficaz a las complejas amenazas cibernéticas actuales.",
    "Browse projects":
      "Examinar proyectos",
    "By default, the key expires one week from today. If you’d like to change the expiration date, pick a new date under Expires on. You’re unable to select a date longer than a year from the date of creation.":
      "De forma predeterminada, la clave caduca una semana después de hoy. Si desea cambiar la fecha de caducidad, elija una nueva fecha en Expires on. No es posible seleccionar una fecha posterior a un año desde la fecha de creación.",
    "Bypass exclusion list":
      "Omitir lista de exclusión",
    "Callback URL":
      "URL de devolución de llamada",
    "Classic Scopes":
      "Ámbitos clásicos",
    "Classifier and Mapper":
      "Clasificador y asignador",
    "Classifiers & Mappers":
      "Clasificadores y asignadores",
    "Click Create API key in the top right.":
      "Haga clic en Create API key en la parte superior derecha.",
    "Click Create to save the API key.":
      "Haga clic en Create para guardar la clave de API.",
    "Click Done and you’ll see the key in your list of API keys.":
      "Haga clic en Done y verá la clave en su lista de claves de API.",
    "Click the Jira Administration tab (the gear icon found in the top right corner) and click":
      "Haga clic en la pestaña Jira Administration (el icono de engranaje que se encuentra en la esquina superior derecha) y haga clic en",
    "Client ID, Client Secret":
      "ID de cliente, secreto de cliente",
    "Cloud authentication":
      "Autenticación en la nube",
    "Cloud ID of your Jira instance (See below)":
      "Cloud ID de su instancia de Jira (consulte más abajo)",
    "Cloud Scopes":
      "Ámbitos de la nube",
    "Collects logs from Microsoft Azure Event Hub.":
      "Recopila registros de Microsoft Azure Event Hub.",
    "Comment entry tag":
      "Etiqueta de entrada de comentario",
    "Configure Pre-Process Rules":
      "Configurar reglas de preprocesamiento",
    "Configure the integration":
      "Configurar la integración",
    "Configure your Jira instance based on the type of your deployment:":
      "Configure su instancia de Jira según el tipo de implementación:",
    "Consumer key (OAuth 1.0)":
      "Clave de consumidor (OAuth 1.0)",
    "Copy the generated Authorization code into the integration instance and save the integration instance.":
      "Copie el código de autorización generado en la instancia de integración y guarde la instancia de integración.",
    "Copy the values for your Organization ID and API key. You’ll need those to access your organization later.":
      "Copie los valores de su ID de organización y su clave de API. Los necesitará para acceder a su organización más adelante.",
    "Create and Manage Azure Virtual Machines.":
      "Crea y administra máquinas virtuales de Azure.",
    "Create attachments":
      "Crear archivos adjuntos",
    "Create issues":
      "Crear incidencias",
    "Delete issues":
      "Eliminar incidencias",
    "Deprecated. No available replacement.":
      "Obsoleto. No hay ningún reemplazo disponible.",
    "Deprecated. Use the Atlassian Jira v3 integration instead":
      "Obsoleto. Utilice en su lugar la integración Atlassian Jira v3",
    "Deprecated. Use the Check Point Firewall v2 integration instead. Manage Check Point firewall via API":
      "Obsoleto. Utilice en su lugar la integración Check Point Firewall v2. Administre el firewall de Check Point mediante la API",
    "Deprecated. Use the VMware Carbon Black App Control v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración VMware Carbon Black App Control v2.",
    "Deprecated. Use the VMware Carbon Black EDR integration instead.":
      "Obsoleto. Utilice en su lugar la integración VMware Carbon Black EDR.",
    "Deprecated. Use Unit 42 Feed integration instead.":
      "Obsoleto. Utilice en su lugar la integración Unit 42 Feed.",
    "Deprecated. Use Unit 42 Intel Objects Feed instead. Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "Obsoleto. Utilice en su lugar Unit 42 Intel Objects Feed. Utilice la integración AutoFocus Tags Feed para recuperar indicadores de AutoFocus Tags.",
    "Developer console":
      "Consola para desarrolladores",
    "Device Family Filter":
      "Filtro de familia de dispositivos",
    "Device Family Filter for Fetch Operation":
      "Filtro de familia de dispositivos para la operación de recuperación",
    "Device Tags Filter":
      "Filtro de etiquetas de dispositivo",
    "Device Tags Filter for Fetch Operation":
      "Filtro de etiquetas de dispositivo para la operación de recuperación",
    "Directory ID":
      "ID de directorio",
    "Edit issues":
      "Editar incidencias",
    "Enable/Disable CRUD Commands":
      "Habilitar/deshabilitar comandos CRUD",
    "Ensure that you possess the necessary permissions by navigating to":
      "Asegúrese de tener los permisos necesarios; para ello, vaya a",
    "Enter a name that you’ll remember to identify the API key.":
      "Introduzca un nombre que recuerde para identificar la clave de API.",
    "External application":
      "Aplicación externa",
    "Fetch Anomaly Alerts":
      "Recuperar alertas de anomalías",
    "Fetch Anomaly Criticality":
      "Criticidad de anomalías que se recuperará",
    "Fetch attachments":
      "Recuperar archivos adjuntos",
    "Fetch comments":
      "Recuperar comentarios",
    "Fetch CVE Score":
      "Puntuación de CVE que se recuperará",
    "Fetch Device CVEs":
      "Recuperar CVE de dispositivos",
    "Fetch incidents":
      "Recuperar incidentes",
    "Fetching incidents by creation time (using the Created field), instead of using IDs, is done by checking the “Use created field to fetch incidents” checkbox.":
      "Para recuperar incidentes por hora de creación (mediante el campo Created) en lugar de usar los ID, marque la casilla «Usar el campo de creación para recuperar incidentes».",
    "fields empty and fill in the following fields:":
      "vacíos y rellene los siguientes campos:",
    "File entry tag":
      "Etiqueta de entrada de archivo",
    "Fill in the required details as explained in the page, by inserting a":
      "Rellene los detalles necesarios como se explica en la página, insertando lo siguiente:",
    "Fill in the required fields:":
      "Rellene los campos obligatorios:",
    "For both instances (Cloud ID & OnPrem), use the":
      "Para ambas instancias (Cloud ID y OnPrem), utilice lo siguiente:",
    "For fetching incidents, please update the query param according to":
      "Para recuperar incidentes, actualice el parámetro de consulta según",
    "For more information see the":
      "Para obtener más información, consulte",
    "from the Playground and follow its instructions.":
      "desde el Playground y siga sus instrucciones.",
    "from the Playground to verify that everything is configured correctly.":
      "desde el Playground para comprobar que todo está configurado correctamente.",
    "From your organization at admin.atlassian.com:":
      "Desde su organización en admin.atlassian.com:",
    "Gets Daily Threat Feed from AutoFocus.":
      "Obtiene el feed diario de amenazas de AutoFocus.",
    "Go to the integration instance configuration.":
      "Vaya a la configuración de la instancia de integración.",
    "Granular Scopes":
      "Ámbitos granulares",
    "High Only":
      "Solo alta",
    "If you modify any of the fetch filters (":
      "Si modifica alguno de los filtros de recuperación (",
    "If you wish the first run to start from a specific time, use “Issue index to start fetching incidents from” param.":
      "Si desea que la primera ejecución comience a partir de una hora específica, utilice el parámetro «Índice de incidencia desde el que empezar a recuperar incidentes».",
    "Incident Fetch Interval":
      "Intervalo de recuperación de incidentes",
    "Incident Types":
      "Tipos de incidente",
    "Incoming":
      "Entrante",
    "Indicator Reputation":
      "Reputación del indicador",
    "Insert the generated token in the":
      "Inserte el token generado en",
    "Integrate Asimily Insight to ingest security anomalies, CVEs, and leverage detailed asset data for streamlined incident investigation.":
      "Integre Asimily Insight para ingerir anomalías de seguridad y CVE, y aproveche datos detallados de activos para agilizar la investigación de incidentes.",
    "Integrate Checkmarx to gain a unified overview of your application security posture.":
      "Integre Checkmarx para obtener una visión unificada de la postura de seguridad de sus aplicaciones.",
    "Integrate with Atlassian's services to execute CRUD operations for employee lifecycle processes.":
      "Integre los servicios de Atlassian para ejecutar operaciones CRUD en los procesos del ciclo de vida de los empleados.",
    "Issue Field to fetch by":
      "Campo de incidencia por el que recuperar",
    "Issue index to start fetching incidents from":
      "Índice de incidencia desde el que empezar a recuperar incidentes",
    "Jira URL, for example: https://demisto.atlassian.net/":
      "URL de Jira, por ejemplo: https://demisto.atlassian.net/",
    "JQL documentation":
      "Documentación de JQL",
    "Leave empty":
      "Dejar vacío",
    "Leave the":
      "Deje los campos",
    "Link issues":
      "Vincular incidencias",
    "Locate permissions for the tasks listed below:":
      "Busque los permisos de las tareas que se indican a continuación:",
    "Log Analytics is a service that helps you collect and analyze data generated by resources in your cloud and on-premises environments.":
      "Log Analytics es un servicio que le ayuda a recopilar y analizar los datos generados por los recursos de sus entornos de nube y locales.",
    "Log in to Jira as a user with":
      "Inicie sesión en Jira como usuario con",
    "Log Level":
      "Nivel de registro",
    "Manage Binalyze AIR forensic acquisition, endpoint isolation, triage, cases, tasks, assets, repositories, and evidence artifacts from Cortex.":
      "Administre desde Cortex la adquisición forense, el aislamiento de endpoints, el triaje, los casos, las tareas, los activos, los repositorios y los artefactos de evidencia de Binalyze AIR.",
    "Max incidents per fetch":
      "Máximo de incidentes por recuperación",
    "Mirror incoming incidents":
      "Reflejar incidentes entrantes",
    "Mirror outgoing incidents":
      "Reflejar incidentes salientes",
    "Notifies you if login credentials to your company are being sold on the dark web.":
      "Le notifica si las credenciales de inicio de sesión de su empresa se están vendiendo en la dark web.",
    "OAuth 2.0 integration":
      "Integración de OAuth 2.0",
    "on the Asimily Insight portal.":
      "(en el portal de Asimily Insight).",
    "on the left side bar. Your Cloud ID will appear in the URL:":
      "en la barra lateral izquierda. Su Cloud ID aparecerá en la URL:",
    "Once the link is created, you will be able to see":
      "Una vez creado el vínculo, podrá ver",
    "Onboard your Azure DevOps SaaS to the Cortex Application Security module to gain comprehensive visibility into your Azure DevOps platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Incorpore su Azure DevOps SaaS al módulo Cortex Application Security para obtener visibilidad integral de los activos de su plataforma Azure DevOps y analizar el código, las configuraciones y los pipelines de CI/CD de sus repositorios en busca de problemas de seguridad.",
    "Onboard your Bitbucket Data Center on-prem to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket Data Center platform assets and scan your repositories’ code for security issues.":
      "Incorpore su Bitbucket Data Center local al módulo Cortex Application Security para obtener visibilidad integral de los activos de su plataforma Bitbucket Data Center y analizar el código de sus repositorios en busca de problemas de seguridad.",
    "Onboard your Bitbucket SaaS to the Cortex Application Security module to gain comprehensive visibility into your Bitbucket platform assets and scan your repositories’ code for security issues.":
      "Incorpore su Bitbucket SaaS al módulo Cortex Application Security para obtener visibilidad integral de los activos de su plataforma Bitbucket y analizar el código de sus repositorios en busca de problemas de seguridad.",
    "OnPrem authentication":
      "Autenticación de OnPrem",
    "OnPrem Scopes":
      "Ámbitos de OnPrem",
    "page, and choose the App you want to integrate with your instance. It must be of type OAuth 2.0. For creating a new app with type OAuth 2.0, click":
      "página y elija la aplicación que desea integrar con su instancia. Debe ser de tipo OAuth 2.0. Para crear una aplicación nueva de tipo OAuth 2.0, haga clic en",
    "Password (Deprecated - Use API token)":
      "Contraseña (obsoleta: use el token de API)",
    "Personal Access Token":
      "Token de acceso personal",
    "Private key (PKCS8 format)":
      "Clave privada (formato PKCS8)",
    "Project Settings":
      "Configuración del proyecto",
    "Query (in JQL) for fetching incidents":
      "Consulta (en JQL) para recuperar incidentes",
    "Query (in JQL) for fetching incidents.":
      "Consulta (en JQL) para recuperar incidentes.",
    "Receives network flow logs from Microsoft Azure Network Watcher.":
      "Recibe registros de flujo de red de Microsoft Azure Network Watcher.",
    "Reset Now":
      "Restablecer ahora",
    "Reset the “last run” timestamp":
      "Restablecer la marca de tiempo de la «última ejecución»",
    "Resetting the “Last Run” Timestamp":
      "Restablecimiento de la marca de tiempo de la «última ejecución»",
    "Run the integration command":
      "Ejecutar el comando de integración",
    "SaaS Posture Security":
      "Seguridad de la postura de SaaS",
    "Save & Exit":
      "Guardar y salir",
    "Save the integration instance.":
      "Guarde la instancia de integración.",
    "scope, in order to retrieve refresh tokens.":
      "ámbito, para poder obtener tokens de actualización.",
    "Select Settings and then API keys.":
      "Seleccione Settings y, a continuación, API keys.",
    "The integration can fetch the following incident types:":
      "La integración puede recuperar los siguientes tipos de incidente:",
    "The integration includes a preprocessing script (":
      "La integración incluye un script de preprocesamiento (",
    "The integration retrieves asset information, anomaly alerts, and CVEs from Asimily Insight—either through scheduled updates or on-demand queries—making it necessary to define a preprocessing rule that discards incoming incidents if they are duplicates.":
      "La integración recupera información de activos, alertas de anomalías y CVE de Asimily Insight, ya sea mediante actualizaciones programadas o consultas a petición, por lo que es necesario definir una regla de preprocesamiento que descarte los incidentes entrantes si están duplicados.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed":
      "La designación del Traffic Light Protocol (TLP) que se aplicará a los indicadores recuperados del feed",
    "There are 2 authentication methods:":
      "Hay 2 métodos de autenticación:",
    "This ensures that incidents related to newly included devices and updated filters are correctly fetched.":
      "Esto garantiza que los incidentes relacionados con los dispositivos recién incluidos y los filtros actualizados se recuperen correctamente.",
    "this tutorial":
      "este tutorial",
    "This will fetch all tickets in your system (including past tickets) that are in Open status and in project soc. After the first run, it will create incidents only for new tickets.":
      "Esto recuperará todos los tickets de su sistema (incluidos los anteriores) que estén en estado Open y en el proyecto soc. Después de la primera ejecución, solo creará incidentes para los tickets nuevos.",
    "Time range for initial data fetch":
      "Intervalo de tiempo para la recuperación inicial de datos",
    "to get the Access Token. Authorizing using OAuth1.0, requires Access Token, Private Key, and Consumer Key.":
      "para obtener el token de acceso. La autorización con OAuth1.0 requiere el token de acceso, la clave privada y la clave de consumidor.",
    "to get the API token.":
      "para obtener el token de API.",
    "To obtain the Authorization code, follow these steps:":
      "Para obtener el código de autorización, siga estos pasos:",
    "to obtain your Access Tokens. Authorizing using a PAT requires the Access Token only.":
      "para obtener sus tokens de acceso. La autorización con un PAT solo requiere el token de acceso.",
    "To reset:":
      "Para restablecer:",
    "To use a Private Access Token, please follow":
      "Para usar un token de acceso privado, siga",
    "To use OAuth1.0 follow":
      "Para usar OAuth1.0, siga",
    "Traffic Light Protocol Color":
      "Color del Traffic Light Protocol",
    "Transition issues":
      "Realizar transiciones de incidencias",
    "Update the project you want to fetch from, using:":
      "Actualice el proyecto desde el que desea recuperar, mediante:",
    "Use created field to fetch incidents":
      "Usar el campo de creación para recuperar incidentes",
    "Use the Azure Key Vault integration to safeguard and manage cryptographic keys and secrets used by cloud applications and services.":
      "Utilice la integración de Azure Key Vault para proteger y administrar las claves criptográficas y los secretos que usan las aplicaciones y los servicios en la nube.",
    "Use the Jira integration to manage issues, create Cortex incidents from Jira projects, and mirror issues to existing issue incidents in Cortex. The integration now supports both OnPrem, and Cloud instances.":
      "Utilice la integración de Jira para administrar incidencias, crear incidentes de Cortex a partir de proyectos de Jira y reflejar incidencias en incidentes de incidencia existentes en Cortex. La integración ahora admite instancias tanto OnPrem como en la nube.",
    "Use this integration to connect securely with an Atlassian Cloud Model Context Protocol (MCP) server and access its tools in real time.":
      "Utilice esta integración para conectarse de forma segura a un servidor Model Context Protocol (MCP) de Atlassian Cloud y acceder a sus herramientas en tiempo real.",
    "Use this integration to read information and send commands to the Check Point Firewall server.":
      "Utilice esta integración para leer información y enviar comandos al servidor de Check Point Firewall.",
    "Username (Basic Authentication)":
      "Nombre de usuario (autenticación básica)",
    "When creating Jira issues through XSOAR, using the mirroring function, make sure that you exclude those issues when fetching incidents. To exclude these issues, tag the relevant issues with a dedicated label and exclude that label from the JQL query (Labels!=).":
      "Al crear incidencias de Jira a través de XSOAR mediante la función de reflejo, asegúrese de excluirlas al recuperar incidentes. Para excluirlas, etiquete las incidencias correspondientes con una etiqueta específica y excluya esa etiqueta de la consulta JQL (Labels!=).",
    "You can authenticate using one of the following methods:":
      "Puede autenticarse con uno de los siguientes métodos:",
    "You can enable and filter these incidents with the following options:":
      "Puede habilitar y filtrar estos incidentes con las siguientes opciones:",
    "You can select which CRUD commands are enabled in the integration instance configuration settings. By default, all commands are enabled.":
      "Puede seleccionar qué comandos CRUD están habilitados en la configuración de la instancia de integración. De forma predeterminada, todos los comandos están habilitados.",
    "Your Jira server URL":
      "URL de su servidor Jira",

    // --- Batch: strings from the Collector export #2 (AutoFocus Feed docs, marketplace card descriptions, feed tooltips) ---
    // Fragments such as "and", "or", "The", "Click the", "Go to the", "From the" are intentionally NOT registered.
    "Activate the API":
      "Activar la API",
    "Activating AutoFocus Licenses":
      "Activación de licencias de AutoFocus",
    "Add your authorization code":
      "Agregar su código de autorización",
    "AutoFocus documentation - Get Tag Details":
      "Documentación de AutoFocus: obtener detalles de etiqueta",
    "AutoFocus documentation - Get Tags":
      "Documentación de AutoFocus: obtener etiquetas",
    "AutoFocus Endpoint URL":
      "URL del endpoint de AutoFocus",
    "Custom Feed info:":
      "Información del feed personalizado:",
    "Samples Feed info:":
      "Información del feed de muestras:",
    "Enter the authorization code.":
      "Introduzca el código de autorización.",
    "Enter this API key when configuring the AutoFocus integration in Cortex.":
      "Introduzca esta clave de API al configurar la integración de AutoFocus en Cortex.",
    "For more info on activating the license, see":
      "Para obtener más información sobre cómo activar la licencia, consulte",
    "For more information about generating URL and adding filter options for custom feeds, please read":
      "Para obtener más información sobre cómo generar la URL y agregar opciones de filtro para feeds personalizados, lea",
    "From the left-side navigation menu, select":
      "En el menú de navegación de la izquierda, seleccione",
    "Get Your API Key":
      "Obtener su clave de API",
    "Gets Custom and Sample feeds from AutoFocus.":
      "Obtiene feeds personalizados y de muestra de AutoFocus.",
    "Indicator Feed":
      "Feed de indicadores",
    "Onboard your CircleCI SaaS service for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Incorpore su servicio CircleCI SaaS para una Application Security integral: integre los análisis de Cortex CLI para su código y proteja sus pipelines de CI/CD.",
    "Only necessary in case a Custom Feed is fetched. Can also support a CSV of Custom feed URLs.":
      "Solo es necesario cuando se recupera un feed personalizado. También admite un CSV de URL de feeds personalizados.",
    "Palo Alto Networks support site":
      "sitio de soporte de Palo Alto Networks",
    "Protect your cloud assets and private network.":
      "Proteja sus activos en la nube y su red privada.",
    "Query - A JSON styled AutoFocus query. For example:":
      "Query: una consulta de AutoFocus con formato JSON. Por ejemplo:",
    "Query and upload samples to Cisco threat grid.":
      "Consulte y cargue muestras en Cisco Threat Grid.",
    "Reliability of the source providing the intelligence data":
      "Fiabilidad de la fuente que proporciona los datos de inteligencia",
    "Samples Feed Query":
      "Consulta del feed de muestras",
    "Samples Feed Scope Type":
      "Tipo de ámbito del feed de muestras",
    "Scalable visibility and security analytics.":
      "Visibilidad y análisis de seguridad escalables.",
    "Scope Type - Either":
      "Tipo de ámbito: uno de",
    "Secure Malware Analytics (formerly Threat Grid) combines advanced sandboxing with threat intelligence into one unified solution to protect organizations from malware.":
      "Secure Malware Analytics (anteriormente Threat Grid) combina sandboxing avanzado con inteligencia sobre amenazas en una única solución unificada para proteger a las organizaciones del malware.",
    "Select the API Key link.":
      "Seleccione el vínculo API Key.",
    "Select values":
      "Seleccionar valores",
    "The Custom Feed URL should be in this form:":
      "La URL del feed personalizado debe tener este formato:",
    "The Security Management Appliance (SMA) is used to centralize services from Email Security Appliances (ESAs) and Web Security Appliances (WSAs).":
      "Security Management Appliance (SMA) se utiliza para centralizar los servicios de Email Security Appliances (ESA) y Web Security Appliances (WSA).",
    "The URL for the custom feed to fetch":
      "La URL del feed personalizado que se recuperará",
    "To connect a custom AutoFocus feed you need to provide the Custom Feed URL.":
      "Para conectar un feed personalizado de AutoFocus, debe proporcionar la URL del feed personalizado.",
    "To connect to a sample AutoFocus feed you need to provide the following parameters:":
      "Para conectarse a un feed de muestra de AutoFocus, debe proporcionar los siguientes parámetros:",
    "To get your API key, you need to add an authorization code, and then activate the API.":
      "Para obtener su clave de API, debe agregar un código de autorización y, a continuación, activar la API.",
    "Use system proxy settings is enabled only when an engine is selected":
      "«Usar la configuración de proxy del sistema» solo se habilita cuando se selecciona un motor",
    "Use the AutoFocus Tags Feed integration to fetch indicators from AutoFocus Tags.":
      "Utilice la integración AutoFocus Tags Feed para recuperar indicadores de AutoFocus Tags.",
    "Use the Cisco Adaptive Security Appliance Software integration to manage interfaces, rules, and network objects.":
      "Utilice la integración de Cisco Adaptive Security Appliance Software para administrar interfaces, reglas y objetos de red.",
    "Use the Cisco Firepower integration for unified management of firewalls, application control, intrusion prevention, URL filtering, and advanced malware protection.":
      "Utilice la integración de Cisco Firepower para la administración unificada de firewalls, control de aplicaciones, prevención de intrusiones, filtrado de URL y protección avanzada contra malware.",
    "When removed from the feed":
      "Cuando se elimina del feed",
    "When selected, the exclusion list is ignored for indicators from this feed. This means that if an indicator from this feed is on the exclusion list, the indicator might still be added to the system.":
      "Si se selecciona, la lista de exclusión se ignora para los indicadores de este feed. Esto significa que, si un indicador de este feed está en la lista de exclusión, aun así podría agregarse al sistema.",

    // --- Batch: strings from the Collector export #4 (Azure Log Analytics / Microsoft self-deployed auth docs, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": These credentials are valid for a single instance only.":
      ": Estas credenciales solo son válidas para una única instancia.",
    "(Certificate Thumbprint)":
      "(huella digital del certificado)",
    "(Client Secret)":
      "(secreto de cliente)",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the integration instance settings fields.":
      "Tras autorizar la aplicación de Cortex, obtendrá un ID, un token y una clave que deben introducirse en los campos de configuración de la instancia de integración.",
    "and allow Cortex access to Azure Log Analytics, an administrator has to approve our app using an admin consent flow by clicking this":
      "y permitir que Cortex acceda a Azure Log Analytics, un administrador debe aprobar nuestra aplicación mediante un flujo de consentimiento de administrador haciendo clic en este",
    "Anthropic Claude AI integration for data security scanning and content analysis":
      "Integración de Anthropic Claude AI para el análisis de seguridad de datos y de contenido",
    "Application redirect URI (for self-deployed mode)":
      "URI de redirección de la aplicación (para el modo autoimplementado)",
    "Authorization Code flow":
      "flujo de código de autorización",
    "Client Credentials flow":
      "flujo de credenciales de cliente",
    "Client Credentials Flow":
      "Flujo de credenciales de cliente",
    "Azure Resource Graph is an Azure service designed to extend Azure Resource Management by providing efficient and performant resource exploration with the ability to query at scale across a given set of resources.":
      "Azure Resource Graph es un servicio de Azure diseñado para ampliar Azure Resource Management, ya que ofrece una exploración de recursos eficiente y de alto rendimiento, con la capacidad de realizar consultas a gran escala en un conjunto determinado de recursos.",
    "Azure Service Management - permission":
      "Azure Service Management: permiso",
    "Log Analytics API - permission":
      "Log Analytics API: permiso",
    "of type":
      "de tipo",
    "Check when authenticating using the Authorization Code flow.":
      "Márquelo al autenticarse mediante el flujo de código de autorización.",
    "Check when authenticating using the Client Credentials flow.":
      "Márquelo al autenticarse mediante el flujo de credenciales de cliente.",

    // --- Batch: strings from the user-reported screenshot (Azure auth type description) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Code Flow.":
      "Tipo de autenticación: puede ser el flujo de autorización de credenciales de cliente (recomendado) o el flujo de código de dispositivo.",

    // --- Batch: strings from the Collector export #5 (v0.1.1: tooltips, Brandefense/Binalyze/Bitbucket docs, marketplace card descriptions, data-source table) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "— For asset-related commands":
      "— Para comandos relacionados con activos",
    "— For creating incidents":
      "— Para crear incidentes",
    "— For CTI threat search capability":
      "— Para la función de búsqueda de amenazas de CTI",
    "— For incident fetching and queries":
      "— Para la recuperación y las consultas de incidentes",
    "— For indicator retrieval":
      "— Para la recuperación de indicadores",
    "— For intelligence reports":
      "— Para informes de inteligencia",
    "— For IoC and threat intelligence data":
      "— Para IoC y datos de inteligencia de amenazas",
    "— For phishing monitoring":
      "— Para la supervisión de phishing",
    "(API Key)":
      "(clave de API)",
    "A Brandefense account with API access enabled.":
      "Una cuenta de Brandefense con el acceso a la API habilitado.",
    "An API Bearer Token generated from the Brandefense platform.":
      "Un token Bearer de API generado desde la plataforma Brandefense.",
    "Add":
      "Agregar",
    "Binalyze AIR Server URL":
      "URL del servidor de Binalyze AIR",
    "Bitbucket Data Center (On-Prem)":
      "Bitbucket Data Center (local)",
    "Choose from repository list":
      "Elegir de la lista de repositorios",
    "Community Contributed Integration":
      "Integración aportada por la comunidad",
    "Comprehensive integration with Databricks workspace APIs for managing clusters, jobs, SQL, pipelines, Unity Catalog, MLflow, IAM, and more.":
      "Integración completa con las API del workspace de Databricks para administrar clústeres, trabajos, SQL, pipelines, Unity Catalog, MLflow, IAM y más.",
    "Configure Domain":
      "Configurar dominio",
    "Connect Docker Hub Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Conecte Docker Hub Container Registry con Cortex Cloud para analizar y proteger sus imágenes de contenedor, garantizando una seguridad y un cumplimiento normativo integrales.",
    "Connector name":
      "Nombre del conector",
    "Copy the generated token and paste it into the":
      "Copie el token generado y péguelo en el campo",
    "field in the integration configuration.":
      "de la configuración de la integración.",
    "Copy the token.":
      "Copie el token.",
    "Create a Personal Access Token":
      "Crear un token de acceso personal",
    "Create a new API token with the minimum required permissions.":
      "Cree un nuevo token de API con los permisos mínimos necesarios.",
    "Cribl Search allows you to query, retrieve, and manage search jobs, datasets, and saved searches across your Cribl Cloud deployment.":
      "Cribl Search le permite consultar, recuperar y administrar trabajos de búsqueda, conjuntos de datos y búsquedas guardadas en su implementación de Cribl Cloud.",
    "Delete instance":
      "Eliminar instancia",
    "Edit instance":
      "Editar instancia",
    "e.g acme.atlassian.com":
      "p. ej., acme.atlassian.com",
    "Enable unified image, code, and API security scanning, analysis and remediation from your command line":
      "Habilite el análisis, la evaluación y la corrección unificados de la seguridad de imágenes, código y API desde la línea de comandos",
    "Endpoint detection and response to manage and query malops, connections and processes.":
      "Detección y respuesta en endpoints para administrar y consultar malops, conexiones y procesos.",
    "Enter the Binalyze AIR Server URL and API Key.":
      "Introduzca la URL del servidor de Binalyze AIR y la clave de API.",
    "Fetching Issue Types":
      "Recuperación de tipos de incidencia",
    "File threat intelligence":
      "Inteligencia de amenazas de archivos",
    "First time fetching":
      "Primera recuperación",
    "Go to the API token or integrations section.":
      "Vaya a la sección de tokens de API o de integraciones.",
    "In Cortex, create a Binalyze AIR Extended integration instance.":
      "En Cortex, cree una instancia de integración de Binalyze AIR Extended.",
    "In order to complete the onboarding, the domain path should be approved in the Platform Egress. A request was send on your behalf and once approved you will be able to onboard again":
      "Para completar la incorporación, la ruta del dominio debe aprobarse en Platform Egress. Se envió una solicitud en su nombre y, una vez aprobada, podrá volver a realizar la incorporación.",
    "Incident":
      "Incidente",
    "Incident Category":
      "Categoría de incidente",
    "Incident Module":
      "Módulo de incidente",
    "Incident Rules":
      "Reglas de incidente",
    "Incident Status":
      "Estado del incidente",
    "Integration with DFIRe (Digital Forensics and Incident Response) platform for case management and IOC indicator tracking.":
      "Integración con la plataforma DFIRe (Digital Forensics and Incident Response) para la gestión de casos y el seguimiento de indicadores IOC.",
    "Intelligence":
      "Inteligencia",
    "Intelligence Category":
      "Categoría de inteligencia",
    "Intelligence Search":
      "Búsqueda de inteligencia",
    "Locking mechanism that prevents concurrent execution of different tasks.":
      "Mecanismo de bloqueo que impide la ejecución simultánea de distintas tareas.",
    "Log in to Binalyze AIR.":
      "Inicie sesión en Binalyze AIR.",
    "Log in to your Brandefense account at":
      "Inicie sesión en su cuenta de Brandefense en:",
    "Malware dynamic analysis sandboxing.":
      "Sandboxing para el análisis dinámico de malware.",
    "Manage Endpoints using Cylance protect.":
      "Administre endpoints con Cylance Protect.",
    "Max Results":
      "Máximo de resultados",
    "Maximum incidents per fetch":
      "Máximo de incidentes por recuperación",
    "Maximum number of incidents to fetch per cycle.":
      "Número máximo de incidentes que se recuperan por ciclo.",
    "No support or maintenance is provided by the author. Customers are encouraged to engage with the user community for questions and guidance at the":
      "El autor no ofrece soporte ni mantenimiento. Se recomienda a los clientes que consulten sus dudas y busquen orientación en la comunidad de usuarios:",
    "Ownership Type":
      "Tipo de propiedad",
    "Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "El paquete también ayuda con la integración con Cortex y proporciona playbooks/plantillas predefinidos para facilitar el uso de la integración.",
    "Paste your Bitbucket Server / Data Center repository URL into the 'Base URL' field below. Project Admin permissions are required.":
      "Pegue la URL del repositorio de Bitbucket Server / Data Center en el campo \"URL base\" que aparece a continuación. Se requieren permisos de Project Admin.",
    "Reliability of the source providing the intelligence data.":
      "Fiabilidad de la fuente que proporciona los datos de inteligencia.",
    "Repositories were last updated on":
      "Última actualización de los repositorios:",
    "Review the requested permissions, and select":
      "Revise los permisos solicitados y seleccione",
    "to connect Prisma Cloud to Bitbucket.":
      "para conectar Prisma Cloud con Bitbucket.",
    "selected":
      "seleccionados",
    "Selected":
      "Seleccionado",
    "Selection Options":
      "Opciones de selección",
    "Server URL (e.g. https://api.brandefense.io)":
      "URL del servidor (p. ej., https://api.brandefense.io)",
    "Setup":
      "Configuración",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets.":
      "Anticípese a las ciberamenazas con Darkmon TIP: inteligencia de amenazas en tiempo real de la Web superficial, profunda y oscura, adaptada a sus activos.",
    "Stay ahead of cyber threats with Darkmon TIP - real-time threat intelligence from the Clear, Deep, and Dark Web tailored to your assets. Pack also helps with integration with Cortex and provides pre-made playbooks/templates to ease integration use.":
      "Anticípese a las ciberamenazas con Darkmon TIP: inteligencia de amenazas en tiempo real de la Web superficial, profunda y oscura, adaptada a sus activos. El paquete también ayuda con la integración con Cortex y proporciona playbooks/plantillas predefinidos para facilitar el uso de la integración.",
    "Steps":
      "Pasos",
    "Sync Now":
      "Sincronizar ahora",
    "Table data is being updated":
      "Los datos de la tabla se están actualizando",
    "The Binalyze AIR Server URL, for example https://air.example.com.":
      "La URL del servidor de Binalyze AIR, por ejemplo, https://air.example.com.",
    "The CrowdStrike Falcon OAuth 2 API (formerly the Falcon Firehose API), enables fetching and resolving detections, searching devices, getting behaviors by ID, containing hosts, and lifting host containment.":
      "La API OAuth 2 de CrowdStrike Falcon (anteriormente la API Falcon Firehose) permite recuperar y resolver detecciones, buscar dispositivos, obtener comportamientos por ID, contener hosts y levantar la contención de hosts.",
    "The Databricks Data Intelligence Platform":
      "Databricks Data Intelligence Platform",
    "This integration uses the Cortex API to access all the core services and capabilities of the Cortex platform.":
      "Esta integración utiliza la API de Cortex para acceder a todos los servicios y capacidades principales de la plataforma Cortex.",
    "This parameter allows you to filter fetching by issue type.":
      "Este parámetro le permite filtrar la recuperación por tipo de incidencia.",
    "This parameter allows you to filter intelligence values by categories.":
      "Este parámetro le permite filtrar los valores de inteligencia por categorías.",
    "This parameter allows you to filter intelligence values with keyword search.":
      "Este parámetro le permite filtrar los valores de inteligencia mediante una búsqueda por palabras clave.",
    "This parameter will request and show the incident's related module category.":
      "Este parámetro solicitará y mostrará la categoría del módulo relacionado con el incidente.",
    "This parameter will request and show the incident's related module.":
      "Este parámetro solicitará y mostrará el módulo relacionado con el incidente.",
    "This parameter will request and show the incident's related template. Don't select any to get all alerts.":
      "Este parámetro solicitará y mostrará la plantilla relacionada con el incidente. No seleccione ninguna para obtener todas las alertas.",
    "This parameter will request incident's by status.":
      "Este parámetro solicitará los incidentes por estado.",
    "Use the CyberArk EPM integration to activate and deactivate CyberArk EPM risk plans for specific endpoints.":
      "Utilice la integración de CyberArk EPM para activar y desactivar los planes de riesgo de CyberArk EPM para endpoints específicos.",
    "Use this integration to connect Cortex to Binalyze AIR for endpoint forensic acquisition, triage, case, task, repository, and isolation operations.":
      "Utilice esta integración para conectar Cortex con Binalyze AIR y realizar operaciones de adquisición forense de endpoints, triaje, casos, tareas, repositorios y aislamiento.",

    // --- Batch: strings from the Collector export #6 (Cisco/CircleCI/Doppel/EWS/Entra ID docs, tooltips, marketplace card descriptions) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    ": There is no need to enter a value in the":
      ": No es necesario introducir ningún valor en el campo",
    "field. It can be left blank. (Visible only on 6.0.2 and lower versions).":
      ". Se puede dejar en blanco. (Solo visible en las versiones 6.0.2 e inferiores).",
    "(API token)":
      "(token de API)",
    "(Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\")":
      "(Clave de API de Stealthwatch Cloud. Debe tener el formato \"ApiKey <username>:<apikey>\")",
    "Stealthwatch Cloud API key. Should be in the form of \"ApiKey <username>:<apikey>\"":
      "Clave de API de Stealthwatch Cloud. Debe tener el formato \"ApiKey <username>:<apikey>\"",
    "Access to Cisco SMA":
      "Acceso a Cisco SMA",
    "Access your Cisco Umbrella account dashboard.":
      "Acceda al panel de su cuenta de Cisco Umbrella.",
    "Add the following environment variables:":
      "Agregue las siguientes variables de entorno:",
    "API Secret":
      "Secreto de API",
    "API token":
      "Token de API",
    "API Token":
      "Token de API",
    "API Version(Support values: v1, v2, v3)":
      "Versión de la API (valores admitidos: v1, v2, v3)",
    "Authentication from a REST API Client":
      "Autenticación desde un cliente de API REST",
    "Base URL, e.g., https://XXX.eu.iphmx.com":
      "URL base, p. ej., https://XXX.eu.iphmx.com",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables.":
      "Antes de comenzar, deberá crear un nuevo contexto en CircleCI llamado \"cortex-secrets\" y agregar su clave de API y su ID de API como variables de entorno.",
    "Please copy and use the variable names suggested below.":
      "Copie y utilice los nombres de variable que se sugieren a continuación.",
    "If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Si es necesario, puede generar un nuevo token con el enlace que aparece a continuación, copiar los valores generados y usarlos como valores de sus secretos.",
    "Before you begin, you'll need to create a new context in CircleCI named \"cortex-secrets\" and add your API key and API ID as environment variables. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Antes de comenzar, deberá crear un nuevo contexto en CircleCI llamado \"cortex-secrets\" y agregar su clave de API y su ID de API como variables de entorno. Copie y utilice los nombres de variable que se sugieren a continuación. Si es necesario, puede generar un nuevo token con el enlace que aparece a continuación, copiar los valores generados y usarlos como valores de sus secretos.",
    "By clicking Authorize, you authorize Palo Alto Networks to: (i) ingest data and perform actions such as suppression on your behalf and (ii) process this data to deliver services to you. You confirm that you have the right to provide this authorization.":
      "Al hacer clic en \"Autorizar\", usted autoriza a Palo Alto Networks a: (i) ingerir datos y realizar acciones, como la supresión, en su nombre y (ii) procesar estos datos para prestarle servicios. Usted confirma que tiene derecho a otorgar esta autorización.",
    "c. Provide a":
      "c. Proporcione un",
    "for your token (e.g., “Cortex Integration”).":
      "para su token (p. ej., “Cortex Integration”).",
    "CI/CD System Scan":
      "Análisis del sistema de CI/CD",
    "Code Scan":
      "Análisis de código",
    "Enable CI/CD system scanning":
      "Habilitar el análisis del sistema de CI/CD",
    "System scanning":
      "Análisis del sistema",
    "Configure Job":
      "Configurar trabajo",
    "Map repositories":
      "Asignar repositorios",
    "Connect Checkmarx One":
      "Conectar Checkmarx One",
    "Sign in to Checkmarx One":
      "Iniciar sesión en Checkmarx One",
    "CircleCI personal API token":
      "Token de API personal de CircleCI",
    "Personal API token":
      "Token de API personal",
    "Copy the personal API token to clipboard and paste it here.":
      "Copie el token de API personal en el portapapeles y péguelo aquí.",
    "Create a personal API token in CircleCI.":
      "Cree un token de API personal en CircleCI.",
    "Create a dedicated user in the organization’s VCS to integrate CircleCI with Cortex, to prevent the integration breaking if the user leaves the organization":
      "Cree un usuario dedicado en el VCS de la organización para integrar CircleCI con Cortex y evitar que la integración deje de funcionar si el usuario abandona la organización",
    "Ensure that the dedicated user follows all the organization’s projects in CircleCI":
      "Asegúrese de que el usuario dedicado siga todos los proyectos de la organización en CircleCI",
    "Login to CircleCI with your version control system (VCS) user credentials.":
      "Inicie sesión en CircleCI con las credenciales de usuario de su sistema de control de versiones (VCS).",
    "To enable Cortex Application Security visibility across all CircleCI projects, you must log in to CircleCI using your VCS credentials Note: the CircleCI user base is integrated with the VCS, which means that CircleCI users inherit the permissions granted to VCS users.":
      "Para habilitar la visibilidad de Cortex Application Security en todos los proyectos de CircleCI, debe iniciar sesión en CircleCI con sus credenciales de VCS. Nota: la base de usuarios de CircleCI está integrada con el VCS, lo que significa que los usuarios de CircleCI heredan los permisos concedidos a los usuarios del VCS.",
    "Cisco recommends that you use different accounts for interfacing with the API and the Firepower User Interface. Credentials cannot be used for both interfaces simultaneously, and will be logged out without warning if used for both.":
      "Cisco recomienda usar cuentas distintas para interactuar con la API y con la interfaz de usuario de Firepower. Las credenciales no se pueden usar en ambas interfaces a la vez y se cerrará la sesión sin previo aviso si se usan en las dos.",
    "Collect logs and data from Dropbox.":
      "Recopile logs y datos de Dropbox.",
    "Configuring Cisco ASA":
      "Configuración de Cisco ASA",
    "Connect to Cisco Umbrella:":
      "Conectarse a Cisco Umbrella:",
    "DBot Score Suspicious Threshold (-100 to 100)":
      "Umbral sospechoso de la puntuación de DBot (de -100 a 100)",
    "Score Malicious Threshold (-100 to 100)":
      "Umbral malicioso de la puntuación (de -100 a 100)",
    "Default is 50. Maximum is 100.":
      "El valor predeterminado es 50. El máximo es 100.",
    "Make sure the malicious threshold is less than the suspicious threshold.":
      "Asegúrese de que el umbral malicioso sea menor que el umbral sospechoso.",
    "Make sure the suspicious threshold is greater than the malicious threshold.":
      "Asegúrese de que el umbral sospechoso sea mayor que el umbral malicioso.",
    "Deprecated. Use ***EWS Extension Online Powershell v3*** instead.":
      "Obsoleto. Utilice ***EWS Extension Online Powershell v3*** en su lugar.",
    "Deprecated. Use the Elasticsearch v2 integration instead.":
      "Obsoleto. Utilice la integración de Elasticsearch v2 en su lugar.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively.":
      "Doppel es una solución moderna de protección frente a riesgos digitales que detecta ataques de phishing y ciberataques contra la marca en los canales emergentes. Doppel analiza millones de canales en línea, entre ellos redes sociales, dominios, anuncios de pago, la dark web y canales emergentes. Doppel puede identificar contenido malicioso y ciberamenazas, y permite a sus clientes eliminar de forma proactiva los riesgos digitales.",
    "The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "El paquete de Cortex para Doppel replica las alertas creadas por Doppel como incidentes de Cortex. El paquete también contiene los comandos para realizar diferentes operaciones con las alertas de Doppel.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel es una solución moderna de protección frente a riesgos digitales que detecta ataques de phishing y ciberataques contra la marca en los canales emergentes. Doppel analiza millones de canales en línea, entre ellos redes sociales, dominios, anuncios de pago, la dark web y canales emergentes. Doppel puede identificar contenido malicioso y ciberamenazas, y permite a sus clientes eliminar de forma proactiva los riesgos digitales. El paquete de Cortex para Doppel replica las alertas creadas por Doppel como incidentes de Cortex. El paquete también contiene los comandos para realizar diferentes operaciones con las alertas de Doppel.",
    "e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "p. ej., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.",
    "Timestamp in ISO format or <number> <time unit>,":
      "Marca de tiempo en formato ISO o \"<number> <time unit>\",",
    "Timestamp in ISO format or <number> <time unit>, e.g., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now.":
      "Marca de tiempo en formato ISO o \"<number> <time unit>\" (p. ej., 2022-01-01T00:00:00.000Z, 12 hours, 7 days, 3 months, now).",
    "First fetch":
      "Primera recuperación",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days).":
      "Marca de tiempo de la primera recuperación (<number> <time unit>, p. ej., 12 hours, 7 days).",
    "Enable sftp on your server CheckPoint guide to walk you through: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281":
      "Habilite sftp en su servidor. Consulte la guía de CheckPoint para obtener ayuda paso a paso: https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk82281",
    "Enter instance display name here":
      "Introduzca aquí el nombre para mostrar de la instancia",
    "Example: Tenant name":
      "Ejemplo: nombre del tenant",
    "Tenant name":
      "Nombre del tenant",
    "The unique string generated in the IAM portal":
      "La cadena única generada en el portal de IAM",
    "Entra ID Groups integration (formely Azure Active Directory Groups) enables you to create and manage different types of groups and group functionality according to your requirements.":
      "La integración de Entra ID Groups (anteriormente Azure Active Directory Groups) le permite crear y administrar diferentes tipos de grupos y funcionalidades de grupo según sus necesidades.",
    "The Entra ID Users integration (formerly Azure Active Directory Users) is a Unified gateway to security insights - all from a unified Microsoft Graph User API.":
      "La integración de Entra ID Users (anteriormente Azure Active Directory Users) es una puerta de enlace unificada a la información de seguridad, todo a través de una API de usuario de Microsoft Graph unificada.",
    "Use the Entra ID Applications integration (formerly Azure Active Directory Applications) to manage authorized applications.":
      "Utilice la integración de Entra ID Applications (anteriormente Azure Active Directory Applications) para administrar las aplicaciones autorizadas.",
    "Use the Entra ID Identity And Access integration to manage roles and members (formerly Azure Active Directory Identity And Access).":
      "Utilice la integración de Entra ID Identity And Access para administrar roles y miembros (anteriormente Azure Active Directory Identity And Access).",
    "Exchange Web Services and Office 365 (mail).":
      "Exchange Web Services y Office 365 (correo).",
    "Exchange Web Services mail sender. Note: this integration supports Office 365 basic authentication only. If you are using Office 365, we recommend using the EWS O365 Integration instead, which supports modern authentication (oauth2). Deprecated. Use EWS v2 instead":
      "Remitente de correo de Exchange Web Services. Nota: esta integración solo admite la autenticación básica de Office 365. Si utiliza Office 365, le recomendamos usar en su lugar la integración EWS O365, que admite la autenticación moderna (oauth2). Obsoleto. Utilice EWS v2 en su lugar",
    "The new EWS O365 integration uses OAuth 2.0 protocol and can be used with Exchange Online and Office 365 (mail).":
      "La nueva integración EWS O365 utiliza el protocolo OAuth 2.0 y se puede usar con Exchange Online y Office 365 (correo).",
    "Use the EWS Extension Online Powershell v3 integration to get information about mailboxes and users in your organization. This integration can also retrieve and modify Tenant Allow/Block Lists.":
      "Utilice la integración EWS Extension Online Powershell v3 para obtener información sobre los buzones y los usuarios de su organización. Esta integración también puede recuperar y modificar las listas de permitidos y bloqueados del tenant.",
    "Feed Name":
      "Nombre del feed",
    "Filter by":
      "Filtrar por",
    "Filter operator":
      "Operador de filtro",
    "Filter value":
      "Valor del filtro",
    "Recipient filter operator":
      "Operador de filtro de destinatario",
    "Recipient filter value":
      "Valor del filtro de destinatario",
    "Message field by which to filter the results.":
      "Campo de mensaje por el que se filtran los resultados.",
    "Operator on the message field.":
      "Operador del campo de mensaje.",
    "Recipient filter value to fetch by message field.":
      "Valor del filtro de destinatario que se recupera por campo de mensaje.",
    "Recipient operator filter.":
      "Filtro de operador de destinatario.",
    "The value to search for.":
      "El valor que se va a buscar.",
    "The date or number of days from when to start fetching indicators.":
      "La fecha o el número de días a partir de los cuales se empiezan a recuperar indicadores.",
    "The Traffic Light Protocol (TLP) designation to apply to indicators fetched from the feed.":
      "La designación del Traffic Light Protocol (TLP) que se aplica a los indicadores recuperados del feed.",
    "HTTP requests timeout in seconds. The default is 60 seconds.":
      "Tiempo de espera de las solicitudes HTTP en segundos. El valor predeterminado es 60 segundos.",
    "Server URL for Cisco Stealthwatch console e.g.: https://ip:port/.":
      "URL del servidor de la consola de Cisco Stealthwatch, p. ej.: https://ip:port/.",
    "Getting Credentials":
      "Obtención de credenciales",
    "How to configure the integration:":
      "Cómo configurar la integración:",
    "Step 1: Obtain Cisco Umbrella Investigate API Key & Secret":
      "Paso 1: Obtener la clave de API y el secreto de Cisco Umbrella Investigate",
    "Step 2: Configure Cortex Credentials":
      "Paso 2: Configurar las credenciales de Cortex",
    "Navigate to API Keys:":
      "Vaya a API Keys:",
    "If you are using ASAv (Cisco Adaptive Security Virtual Appliance) don’t forget to check the ASAv box.":
      "Si utiliza ASAv (Cisco Adaptive Security Virtual Appliance), no olvide marcar la casilla ASAv.",
    "Is ASAv":
      "Es ASAv",
    "In the Smart Console, enable the web api: Management & Setting → Blades → Management API, Advanced Setting → All IP address":
      "En Smart Console, habilite la API web: Management & Setting → Blades → Management API, Advanced Setting → All IP address",
    "In time zone configuration settings, set the following:":
      "En la configuración de la zona horaria, establezca lo siguiente:",
    "In your threat grid instance, click your user name at the right top corner.":
      "En su instancia de Threat Grid, haga clic en su nombre de usuario en la esquina superior derecha.",
    "The time zone should be configured to GMT +00:00.":
      "La zona horaria debe configurarse en GMT +00:00.",
    "Require users to enter additional password":
      "Exigir a los usuarios que introduzcan una contraseña adicional",
    "Select my account.":
      "Seleccione mi cuenta.",
    "Select region":
      "Seleccionar región",
    "Server Port (e.g. 4434)":
      "Puerto del servidor (p. ej., 4434)",
    "Server URL (e.g. example.net or 8.8.8.8)":
      "URL del servidor (p. ej., example.net u 8.8.8.8)",
    "Server URL (e.g., https://192.168.0.1)":
      "URL del servidor (p. ej., https://192.168.0.1)",
    "Stealthwatch's server URL":
      "URL del servidor de Stealthwatch",
    "Supports FMC 6.2.3 and above":
      "Compatible con FMC 6.2.3 y versiones posteriores",
    "Search for and analyze data in real time.":
      "Busque y analice datos en tiempo real.",
    "Search for and analyze data in real time. Supports version 6 and later.":
      "Busque y analice datos en tiempo real. Compatible con la versión 6 y posteriores.",
    "Supports version 6 and later.":
      "Compatible con la versión 6 y posteriores.",
    "The first time you connect to the REST API you may receive an error that the connection is not secure due to an invalid certificate. Add an exception in your browser to use the certificate and accept the connection.":
      "La primera vez que se conecte a la API REST, es posible que reciba un error indicando que la conexión no es segura debido a un certificado no válido. Agregue una excepción en su navegador para usar el certificado y aceptar la conexión.",
    "The user role should have access privilages to the following:":
      "El rol de usuario debe tener privilegios de acceso a lo siguiente:",
    "The username and password credentials are used to authenticate with the Cisco SMA API for the provided instance URL.":
      "Las credenciales de nombre de usuario y contraseña se utilizan para autenticarse en la API de Cisco SMA para la URL de instancia proporcionada.",
    "The username and password required by this integration are the same as the credentials used to login into the Cisco Stelathwatch console.":
      "El nombre de usuario y la contraseña que requiere esta integración son los mismos que las credenciales utilizadas para iniciar sesión en la consola de Cisco Stealthwatch.",
    "Under the API Key section in the left you will see your API.":
      "En la sección API Key de la izquierda verá su API.",
    "Use Docker V2 connector in Cortex Cloud to scan and secure container images from any container registry that supports the Docker V2 protocol, ensuring comprehensive security and compliance.":
      "Utilice el conector Docker V2 en Cortex Cloud para analizar y proteger imágenes de contenedor de cualquier registro de contenedores compatible con el protocolo Docker V2, garantizando una seguridad y un cumplimiento normativo integrales.",
    "User Credentials":
      "Credenciales de usuario",
    "When using Cortex credentials, insert your API key as the credential username and your API secret as the password.":
      "Si utiliza credenciales de Cortex, introduzca su clave de API como nombre de usuario de la credencial y su secreto de API como contraseña.",
    "With Token Based Authentication you obtain a token by providing your username and password. You use this token to access an HTTP service for a limited time period without the need for the username and password with every request. In other words, to eliminate the need for authenticating with your username and password with each request.":
      "Con la autenticación basada en token, se obtiene un token proporcionando el nombre de usuario y la contraseña. Este token se utiliza para acceder a un servicio HTTP durante un período de tiempo limitado sin necesidad de enviar el nombre de usuario y la contraseña en cada solicitud. En otras palabras, se elimina la necesidad de autenticarse con el nombre de usuario y la contraseña en cada solicitud.",
    "OAuth Client":
      "Cliente OAuth",
    "Use the generated API key as the":
      "Utilice la clave de API generada como",
    "Use the generated API secret as the":
      "Utilice el secreto de API generado como",

    // --- Batch: strings from the Collector export #7 (Code42/Contentful/Claude/Cortex CLI wizard, parameter labels and tooltips) ---
    // Fragments such as "and", "or the", "Follow the", "Go to the", "Run the", "Select the", "To get the", "To use the" are intentionally NOT registered.
    "(API Key ID, API Key)":
      "(ID de clave de API, clave de API)",
    "Adjust and refine your configuration settings":
      "Ajuste y perfeccione la configuración",
    "After this API Client is set up, use the API Client ID and Secret (in the “password” field) to configure the Code42 integration.":
      "Una vez configurado este cliente de API, utilice el ID y el secreto del cliente de API (en el campo “password”) para configurar la integración de Code42.",
    "Alert severities to fetch when fetching incidents":
      "Gravedades de alerta que se recuperan al recuperar incidentes",
    "Alerts to fetch per run; note that increasing this value may result in slow performance if too many results are returned at once":
      "Alertas que se recuperan por ejecución; tenga en cuenta que aumentar este valor puede ralentizar el rendimiento si se devuelven demasiados resultados a la vez",
    "Anthropic Claude (Standard Connector)":
      "Anthropic Claude (conector estándar)",
    "API Client ID":
      "ID de cliente de API",
    "API Client Secret":
      "Secreto de cliente de API",
    "API Gateway URL for your Code42 environment":
      "URL de la puerta de enlace de API de su entorno de Code42",
    "API Key ID":
      "ID de clave de API",
    "Authenticate":
      "Autenticar",
    "Authenticate using an Anthropic Claude Compliance Access Key (sk-ant-api01-...)":
      "Autentíquese con una clave de acceso de cumplimiento de Anthropic Claude (sk-ant-api01-...)",
    "Base marketplace url":
      "URL base del marketplace",
    "Capabilities status":
      "Estado de las capacidades",
    "Cisco Umbrella Investigate base URL.":
      "URL base de Cisco Umbrella Investigate.",
    "Code42 provides simple, fast detection and response to everyday data loss from insider threats by focusing on customer data on endpoints and the cloud.":
      "Code42 ofrece una detección y respuesta sencillas y rápidas ante la pérdida diaria de datos causada por amenazas internas, centrándose en los datos de los clientes en los endpoints y en la nube.",
    "Compliance Access Key":
      "Clave de acceso de cumplimiento",
    "Configure":
      "Configurar",
    "Contentful Access Token":
      "Token de acceso de Contentful",
    "Copy":
      "Copiar",
    "Copy and paste the key.":
      "Copie y pegue la clave.",
    "Copy the command and paste it into your terminal or download it.":
      "Copie el comando y péguelo en su terminal, o descárguelo.",
    "Core Server URL":
      "URL del servidor de Core",
    "Cortex integrates with CI/CD pipelines, helping organizations shift-left. Use the Cortex CLI command line tool to scan container images for vulnerabilities, malware, and secrets. To run and authenticate Cortex CLI, follow the steps below.":
      "Cortex se integra con los pipelines de CI/CD y ayuda a las organizaciones a aplicar el enfoque shift-left. Utilice la herramienta de línea de comandos Cortex CLI para analizar imágenes de contenedor en busca de vulnerabilidades, malware y secretos. Para ejecutar y autenticar Cortex CLI, siga los pasos que se indican a continuación.",
    "create an API Client":
      "crear un cliente de API",
    "Create instance":
      "Crear instancia",
    "Default timeout (seconds) for wait on locks to be released":
      "Tiempo de espera predeterminado (segundos) hasta que se liberen los bloqueos",
    "First fetch time range (<number> <time unit>, e.g., 1 hour, 30 minutes)":
      "Intervalo de tiempo de la primera recuperación (<number> <time unit>, p. ej., 1 hour, 30 minutes)",
    "For Cortex or Cortex XSIAM, use the Copy API URL button on the API Keys page. For Cortex, use the server URL.":
      "Para Cortex o Cortex XSIAM, utilice el botón Copy API URL de la página API Keys. Para Cortex, utilice la URL del servidor.",
    "From the ID column, copy the Key ID.":
      "En la columna ID, copie el ID de la clave.",
    "Generate an API Key and API Key ID":
      "Generar una clave de API y un ID de clave de API",
    "Go to Settings -> Configurations -> API Keys.":
      "Vaya a Settings -> Configurations -> API Keys.",
    "Include the list of files in returned incidents.":
      "Incluir la lista de archivos en los incidentes devueltos.",
    "Instance configuration completed":
      "Configuración de la instancia completada",
    "Latest version":
      "Última versión",
    "Make sure your API key has the proper permissions. For more information, please refer to the":
      "Asegúrese de que su clave de API tenga los permisos adecuados. Para obtener más información, consulte:",
    "Marketplace content packs":
      "Paquetes de contenido del marketplace",
    "Please follow the documentation below for step by step guide on how to onboard your Contentful instance":
      "Siga la documentación que aparece a continuación para obtener una guía paso a paso sobre cómo incorporar su instancia de Contentful",
    "Review your instance configuration":
      "Revise la configuración de su instancia",
    "Run automated actions and remediation commands against the connected service.":
      "Ejecute acciones automatizadas y comandos de corrección en el servicio conectado.",
    "SaaS Posture Configuration Monitoring":
      "Supervisión de la configuración de postura de SaaS",
    "Scan and protect data across the Claude service":
      "Analice y proteja los datos en todo el servicio de Claude",
    "Select OS":
      "Seleccionar sistema operativo",
    "Start typing..":
      "Empiece a escribir..",
    "Sub capabilities":
      "Subcapacidades",
    "Sync integration cache":
      "Sincronizar la caché de la integración",
    "The access token is used to authenticate requests to the Contentful Management API. It must have the required permissions to access your organization's configuration.":
      "El token de acceso se utiliza para autenticar las solicitudes a la API de gestión de Contentful. Debe tener los permisos necesarios para acceder a la configuración de su organización.",
    "The Core Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "La integración Core Locking permite evitar la ejecución simultánea de scripts o comandos mediante un flujo de espera, bloqueo y liberación (mutex).",
    "To authenticate with Cortex CLI, grant it executable permissions and then copy the API key and API key ID below and substitute it with $[CORTEX_API_KEY] and $[CORTEX_API_KEY_ID].":
      "Para autenticarse con Cortex CLI, concédale permisos de ejecución y, a continuación, copie la clave de API y el ID de clave de API que aparecen abajo y sustituya con ellos $[CORTEX_API_KEY] y $[CORTEX_API_KEY_ID].",
    "To configure this integration, you will need to":
      "Para configurar esta integración, deberá",
    "within the Code42 console with the following permissions:":
      "en la consola de Code42 con los siguientes permisos:",
    "Use tenant":
      "Usar tenant",
    "Use the lock name argument to support multiple locks in different flows.":
      "Utilice el argumento lock name para admitir varios bloqueos en diferentes flujos.",
    "Verification pending":
      "Verificación pendiente",
    "Verification Pending":
      "Verificación pendiente",
    "Whether API calls should be made to the current tenant instead of the main tenant.":
      "Indica si las llamadas a la API deben realizarse al tenant actual en lugar de al tenant principal.",
    "Whether authentication should be using \"Standard\" API key or \"Advanced\" API key. For XSOAR version < 8.0.0, choose \"Standard\".":
      "Indica si la autenticación debe usar una clave de API \"Standard\" o \"Advanced\". Para las versiones de XSOAR anteriores a la 8.0.0, elija \"Standard\".",
    "Whether to sync the integration cache with the database (Available from Cortex).":
      "Indica si se debe sincronizar la caché de la integración con la base de datos (disponible desde Cortex).",
    "With upload results permissions":
      "Con permisos de carga de resultados",

    // --- Batch: strings from the Collector export #8 (CrowdStrike/CyberArk EPM/Cybereason/Cribl parameter labels, tooltips and integration card descriptions) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "(Application ID, Application Secret)":
      "(ID de aplicación, secreto de aplicación)",
    "(Client ID, Secret)":
      "(ID de cliente, secreto)",
    "(Credentials, Password)":
      "(credenciales, contraseña)",
    "(Tenant API Key)":
      "(clave de API del tenant)",
    "(Deprecated) Required for local(EPM) authentication only. This parameter is deprecated and no longer used.":
      "(Obsoleto) Necesario solo para la autenticación local (EPM). Este parámetro está obsoleto y ya no se utiliza.",
    "Advanced threat protection with added local management controls.":
      "Protección avanzada contra amenazas con controles de administración local adicionales.",
    "Advanced: Time in minutes to look back when fetching events and detections":
      "Avanzado: tiempo en minutos que se retrocede al recuperar eventos y detecciones",
    "Advanced: Time in minutes to look back when fetching incidents and detections":
      "Avanzado: tiempo en minutos que se retrocede al recuperar incidentes y detecciones",
    "An Identity and Access Management integration template.":
      "Una plantilla de integración de administración de identidades y accesos.",
    "Application Secret":
      "Secreto de aplicación",
    "Asset types to fetch":
      "Tipos de activos que se recuperarán",
    "Assets are collected and stored in datasets.":
      "Los activos se recopilan y se almacenan en conjuntos de datos.",
    "Assets Fetch Interval":
      "Intervalo de recuperación de activos",
    "Authenticate with an API token":
      "Autenticarse con un token de API",
    "Check this box to Enable Polling for Cybereason EPP Malops.":
      "Marque esta casilla para habilitar el sondeo de Malops de Cybereason EPP.",
    "Choose what event types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Elija qué tipos de eventos recuperar. Puede elegir cualquier combinación. Nota: los registros del endpoint de detección de la interfaz de CrowdStrike Falcon pueden ser de los tipos 'Endpoint Detection' y 'OFP Detection'.",
    "Choose what incident types to fetch - You can choose any combination. Note:":
      "Elija qué tipos de incidentes recuperar. Puede elegir cualquier combinación. Nota:",
    "Choose what incident types to fetch - You can choose any combination. Note: Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Elija qué tipos de incidentes recuperar. Puede elegir cualquier combinación. Nota: los registros del endpoint de detección de la interfaz de CrowdStrike Falcon pueden ser de los tipos 'Endpoint Detection' y 'OFP Detection'.",
    "Records from the detection endpoint of the CrowdStrike Falcon UI could be of types: 'Endpoint Detection' and 'OFP Detection'.":
      "Los registros del endpoint de detección de la interfaz de CrowdStrike Falcon pueden ser de los tipos 'Endpoint Detection' y 'OFP Detection'.",
    "client_id: Service username (configured as OAuth confidential client).":
      "client_id: nombre de usuario del servicio (configurado como cliente confidencial de OAuth).",
    "client_secret: Service user password for OAuth2 authentication.":
      "client_secret: contraseña del usuario del servicio para la autenticación OAuth2.",
    "Collect logs and data from Google Workspace.":
      "Recopile registros y datos de Google Workspace.",
    "Collects logs and data from a Google Cloud Platform (GCP) Pub/Sub.":
      "Recopila registros y datos de un Pub/Sub de Google Cloud Platform (GCP).",
    "Connect GitLab Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Conecte GitLab Container Registry con Cortex Cloud para analizar y proteger sus imágenes de contenedor, garantizando una seguridad y un cumplimiento integrales.",
    "Connect Harbor Container Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Conecte Harbor Container Registry con Cortex Cloud para analizar y proteger sus imágenes de contenedor, garantizando una seguridad y un cumplimiento integrales.",
    "Detections from On-Demand Scans filter query":
      "Consulta de filtro de detecciones de análisis bajo demanda",
    "Deprecated - We recommend using GSuite Admin instead. Google apps Admin API, or GSuite":
      "Obsoleto. Recomendamos usar GSuite Admin en su lugar. Google apps Admin API o GSuite",
    "Deprecated. Use FireEyeHX v2 instead.":
      "Obsoleto. Utilice FireEyeHX v2 en su lugar.",
    "Deprecated. Use IBM QRadar v2 or IBM QRadar v3 instead.":
      "Obsoleto. Utilice IBM QRadar v2 o IBM QRadar v3 en su lugar.",
    "Deprecated. Use the IBM QRadar v3 integration instead. Fetch offenses from QRadar using Cortex. Supports API versions until 10.0. You can fetch the offenses with their related events and assets by creating a comma-separated list of event fields.":
      "Obsoleto. Utilice en su lugar la integración IBM QRadar v3. Recupera ofensas de QRadar mediante Cortex. Admite versiones de API hasta la 10.0. Puede recuperar las ofensas con sus eventos y activos relacionados creando una lista de campos de evento separados por comas.",
    "Endpoint detection and response to manage and query Cybereason Malops, Connections , Processes and many more.":
      "Detección y respuesta en endpoints para administrar y consultar Malops, conexiones, procesos y mucho más de Cybereason.",
    "Endpoint Detections filter query":
      "Consulta de filtro de detecciones de endpoint",
    "Endpoint Information":
      "Información del endpoint",
    "EPM Region-based tenant URL":
      "URL del tenant basada en la región de EPM",
    "Event Fetch types":
      "Tipos de recuperación de eventos",
    "Events Fetch Interval":
      "Intervalo de recuperación de eventos",
    "ExtraHop Reveal(x) for Cortex is a network detection and response solution that provides complete visibility of network communications at enterprise scale, real-time threat detections backed by machine learning, and guided investigation workflows that simplify response.":
      "ExtraHop Reveal(x) for Cortex es una solución de detección y respuesta de red que ofrece visibilidad completa de las comunicaciones de red a escala empresarial, detecciones de amenazas en tiempo real respaldadas por aprendizaje automático y flujos de trabajo de investigación guiados que simplifican la respuesta.",
    "F5 Silverline Threat Intelligence is a cloud-based service incorporating external IP reputation and reducing threat-based communications. By identifying IP addresses and security categories associated with malicious activity, this managed service integrates dynamic lists of threatening IP addresses with the Silverline cloud-based platform, adding context-based security to policy decisions.":
      "F5 Silverline Threat Intelligence es un servicio basado en la nube que incorpora la reputación de IP externa y reduce las comunicaciones basadas en amenazas. Al identificar las direcciones IP y las categorías de seguridad asociadas con actividad maliciosa, este servicio administrado integra listas dinámicas de direcciones IP amenazantes con la plataforma basada en la nube de Silverline, añadiendo seguridad basada en el contexto a las decisiones de política.",
    "Fetch Asset types":
      "Recuperar tipos de activos",
    "Fetch assets":
      "Recuperar activos",
    "Fetch Assets":
      "Recuperar activos",
    "Fetch assets and vulnerabilities":
      "Recuperar activos y vulnerabilidades",
    "Fetch by \"MALOP UPDATE TIME\" (Fetching by Malop creation time is no longer supported)":
      "Recuperar por \"MALOP UPDATE TIME\" (la recuperación por hora de creación de Malop ya no es compatible)",
    "Fetch events":
      "Recuperar eventos",
    "FireEye Email Security (EX) series protects against breaches caused by advanced email attacks.":
      "La serie FireEye Email Security (EX) protege contra las brechas causadas por ataques avanzados de correo electrónico.",
    "FireEye Endpoint Security is an integrated solution that detects and protects endpoints against known and unknown threats. This integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. You can extract critical data and effectively operate the security operations automated playbook.":
      "FireEye Endpoint Security es una solución integrada que detecta y protege los endpoints frente a amenazas conocidas y desconocidas. Esta integración proporciona acceso a información sobre endpoints, adquisiciones, alertas, indicadores y contención. Puede extraer datos críticos y operar eficazmente el playbook automatizado de operaciones de seguridad.",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days, 3 months, 1 year)":
      "Marca de tiempo de la primera recuperación (<número> <unidad de tiempo>, p. ej., 12 hours, 7 days, 3 months, 1 year)",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days)":
      "Marca de tiempo de la primera recuperación (<número> <unidad de tiempo>, p. ej., 12 hours, 7 days)",
    "Flashpoint Vulnerability Feed Integration allows importing vulnerability intelligence from the Flashpoint platform, empowering teams to reduce exposure windows by identifying high-risk vulnerabilities weeks before public sources. This includes independent research, zero-day disclosures, analyst recommendations, affected and non-affected versions, and over 105,000 vulnerabilities not found in the public NVD/CVE feeds database.":
      "Flashpoint Vulnerability Feed Integration permite importar inteligencia de vulnerabilidades desde la plataforma Flashpoint, lo que ayuda a los equipos a reducir las ventanas de exposición al identificar vulnerabilidades de alto riesgo semanas antes que las fuentes públicas. Esto incluye investigación independiente, divulgaciones de día cero, recomendaciones de analistas, versiones afectadas y no afectadas, y más de 105 000 vulnerabilidades que no se encuentran en la base de datos pública de feeds NVD/CVE.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud. FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments. The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "FortiGate ofrece una convergencia impecable que puede escalar a cualquier ubicación: oficina remota, sucursal, campus, centro de datos y nube. FortiGate siempre ha cumplido el concepto de firewalls de malla híbrida con FortiManager para una administración unificada y una seguridad coherente en entornos híbridos complejos. El sistema operativo Fortinet FortiOS proporciona visibilidad y seguridad profundas en una variedad de factores de forma.",
    "Freshservice is a service management solution that allows customers to manage service requests, incidents, change requests tasks, and problem investigation.":
      "Freshservice es una solución de gestión de servicios que permite a los clientes gestionar solicitudes de servicio, incidentes, tareas de solicitudes de cambio e investigación de problemas.",
    "G Suite or Google Workspace Admin is an integration to perform an action on IT infrastructure, create users, update settings, and more administrative tasks.":
      "G Suite o Google Workspace Admin es una integración para realizar acciones en la infraestructura de TI, crear usuarios, actualizar la configuración y realizar otras tareas administrativas.",
    "Gmail API and user management (This integration replaces the Gmail functionality in the GoogleApps API and G Suite integration).":
      "Gmail API y administración de usuarios (esta integración reemplaza la funcionalidad de Gmail en la API de GoogleApps y la integración de G Suite).",
    "Gmail API using OAuth 2.0.":
      "API de Gmail con OAuth 2.0.",
    "Google Compute Engine delivers virtual machines running in Google's innovative data centers and worldwide fiber network. Compute Engine's tooling and workflow support enable scaling from single instances to global, load-balanced cloud computing.":
      "Google Compute Engine ofrece máquinas virtuales que se ejecutan en los innovadores centros de datos y la red mundial de fibra de Google. Las herramientas y la compatibilidad con flujos de trabajo de Compute Engine permiten escalar desde instancias individuales hasta una computación en la nube global con equilibrio de carga.",
    "Google Sheets is a spreadsheet program that is part of the free web-based Google applications to create and format spreadsheets. Use this integration to create and modify spreadsheets.":
      "Google Sheets es un programa de hojas de cálculo que forma parte de las aplicaciones web gratuitas de Google para crear y dar formato a hojas de cálculo. Utilice esta integración para crear y modificar hojas de cálculo.",
    "HTTP Timeout":
      "Tiempo de espera de HTTP",
    "IBM QRadar SIEM helps security teams accurately detect and prioritize threats across the enterprise, supports API versions 10.1 and above. Provides intelligent insights that enable teams to respond quickly to reduce the impact of incidents.":
      "IBM QRadar SIEM ayuda a los equipos de seguridad a detectar y priorizar con precisión las amenazas en toda la empresa y admite versiones de API 10.1 y posteriores. Proporciona información inteligente que permite a los equipos responder rápidamente para reducir el impacto de los incidentes.",
    "Identity URL":
      "URL de identidad",
    "IDP Detections filter query":
      "Consulta de filtro de detecciones de IDP",
    "In new Cuckoo installations, a random API token is automatically generated for you, and located in the cuckoo.conf file. In order to authenticate with an API token, insert ‘__token’ in the “Username” textbox, and the token itself in the “Password” textbox.":
      "En las nuevas instalaciones de Cuckoo, se genera automáticamente un token de API aleatorio, que se encuentra en el archivo cuckoo.conf. Para autenticarse con un token de API, introduzca '__token' en el cuadro de texto \"Username\" y el propio token en el cuadro de texto \"Password\".",
    "In order to use the CrowdStrike Falcon integration, the API client and secret must have the following scopes and permissions:":
      "Para usar la integración de CrowdStrike Falcon, el cliente de API y el secreto deben tener los siguientes ámbitos y permisos:",
    "Incident Fetch types":
      "Tipos de recuperación de incidentes",
    "Integrate Application Security with your HCP Terraform organization to gain visibility into your Terraform runs.":
      "Integre Application Security con su organización de HCP Terraform para obtener visibilidad de sus ejecuciones de Terraform.",
    "Integrate with Envoy Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Integre con los servicios de Envoy Identity Access Management para ejecutar operaciones CRUD en los procesos del ciclo de vida de los empleados.",
    "Integrate with Exceed LMS Identity Access Management services to execute CRUD operations to employee lifecycle processes.":
      "Integre con los servicios de Exceed LMS Identity Access Management para ejecutar operaciones CRUD en los procesos del ciclo de vida de los empleados.",
    "Integrate with GitHub services to perform Identity Lifecycle Management operations.":
      "Integre con los servicios de GitHub para realizar operaciones de administración del ciclo de vida de identidades.",
    "Integration to GitHub API.":
      "Integración con la API de GitHub.",
    "Integration version of the httpv2 automation used to send HTTP requests for API calls to endpoints not associated with an existing XSOAR integration.":
      "Versión de integración de la automatización httpv2 que se utiliza para enviar solicitudes HTTP para llamadas a la API a endpoints no asociados con una integración de XSOAR existente.",
    "IOA filter query":
      "Consulta de filtro de IOA",
    "IOM filter query":
      "Consulta de filtro de IOM",
    "Log events are collected and stored in datasets.":
      "Los eventos de registro se recopilan y se almacenan en conjuntos de datos.",
    "Long running instance":
      "Instancia de ejecución prolongada",
    "Long running instance for Spotlight vulnerabilities":
      "Instancia de ejecución prolongada para vulnerabilidades de Spotlight",
    "Manage identity and access control for Google Cloud Platform resources.":
      "Administre la identidad y el control de acceso de los recursos de Google Cloud Platform.",
    "Mobile Detections filter query":
      "Consulta de filtro de detecciones móviles",
    "NGSIEM automated leads fetch query":
      "Consulta de recuperación de leads automatizados de NGSIEM",
    "NGSIEM cases fetch query":
      "Consulta de recuperación de casos de NGSIEM",
    "NGSIEM Detection fetch query":
      "Consulta de recuperación de detecciones de NGSIEM",
    "NGSIEM incidents fetch query":
      "Consulta de recuperación de incidentes de NGSIEM",
    "OFP Detections filter query":
      "Consulta de filtro de detecciones de OFP",
    "Onboard your GitHub Enterprise on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitHub Enterprise platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Incorpore su GitHub Enterprise local al módulo Cortex Application Security para obtener visibilidad integral de los activos de la plataforma GitHub Enterprise y analizar el código, las configuraciones y los pipelines de CI/CD de sus repositorios en busca de problemas de seguridad.",
    "Onboard your GitHub SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitHub platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Incorpore su GitHub SaaS al módulo Cortex Application Security para obtener visibilidad integral de los activos de la plataforma GitHub y analizar el código, las configuraciones y los pipelines de CI/CD de sus repositorios en busca de problemas de seguridad.",
    "Onboard your GitLab SaaS to the Cortex Application Security module to gain comprehensive visibility into your GitLab platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Incorpore su GitLab SaaS al módulo Cortex Application Security para obtener visibilidad integral de los activos de la plataforma GitLab y analizar el código, las configuraciones y los pipelines de CI/CD de sus repositorios en busca de problemas de seguridad.",
    "Onboard your GitLab Self Managed on-prem to the Cortex Application Security module to gain comprehensive visibility into your GitLab Self Managed platform assets and scan your repositories’ code, configurations, and CI/CD pipelines for security issues.":
      "Incorpore su GitLab Self Managed local al módulo Cortex Application Security para obtener visibilidad integral de los activos de la plataforma GitLab Self Managed y analizar el código, las configuraciones y los pipelines de CI/CD de sus repositorios en busca de problemas de seguridad.",
    "Only one collection mode per instance.":
      "Solo un modo de recopilación por instancia.",
    "Organization Permissions":
      "Permisos de la organización",
    "Perform malware dynamic analysis.":
      "Realice análisis dinámico de malware.",
    "Prerequisites for OAuth 2.0 Authentication":
      "Requisitos previos para la autenticación OAuth 2.0",
    "Recon filter query":
      "Consulta de filtro de Recon",
    "Reliability of the source providing the intelligence data. Currently used for “CVE” reputation command.":
      "Fiabilidad de la fuente que proporciona los datos de inteligencia. Actualmente se utiliza para el comando de reputación \"CVE\".",
    "Required API client scopes":
      "Ámbitos de cliente de API necesarios",
    "Send push notifications to mobile app":
      "Envíe notificaciones push a la aplicación móvil",
    "Server URL (e.g., https://api.crowdstrike.com)":
      "URL del servidor (p. ej., https://api.crowdstrike.com)",
    "Service username (configured as OAuth confidential client).":
      "Nombre de usuario del servicio (configurado como cliente confidencial de OAuth).",
    "Spotlight asset and vulnerability collection retrieves only vulnerabilities updated within the last 100 days, keeping each collection focused on recent data.":
      "La recopilación de activos y vulnerabilidades de Spotlight recupera solo las vulnerabilidades actualizadas en los últimos 100 días, de modo que cada recopilación se centre en datos recientes.",
    "Spotlight vulnerabilities only.":
      "Solo vulnerabilidades de Spotlight.",
    "Submit a high volume of samples to run in a sandbox and view reports.":
      "Envíe un gran volumen de muestras para ejecutarlas en un sandbox y consulte los informes.",
    "Supported asset types include:":
      "Los tipos de activos admitidos incluyen:",
    "Supported in Cortex and Cortex Platform.":
      "Compatible con Cortex y Cortex Platform.",
    "Supported in Cortex and Cortex Platform. Input a value between 1-500. Default is 15.":
      "Compatible con Cortex y Cortex Platform. Introduzca un valor entre 1 y 500. El valor predeterminado es 15.",
    "Tenant API Key":
      "Clave de API del tenant",
    "tenant_url: The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud)":
      "tenant_url: la URL del tenant de la región de EPM (p. ej., https://api-na.epm.cyberark.cloud)",
    "The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "El ID de aplicación de la aplicación web de OAuth2 Server configurada en Identity Administration.",
    "The asset sources to ingest into the Cortex Unified Asset Inventory.":
      "Las fuentes de activos que se ingerirán en el Cortex Unified Asset Inventory.",
    "The base URL assigned to your organization: https://${workspaceName}-${organizationId}.cribl.cloud":
      "La URL base asignada a su organización: https://${workspaceName}-${organizationId}.cribl.cloud",
    "The Cortex Core - IOCs integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "La integración Cortex Core - IOCs utiliza la API de Cortex para la detección y la respuesta, integrando de forma nativa datos de red, endpoints y nube para detener ataques sofisticados.",
    "The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud).":
      "El FQDN de CyberArk Identity para la autenticación OAuth2 (p. ej., https://abc1234.id.cyberark.cloud).",
    "The fetch interval for assets and vulnerabilities. It is recommended to set it to 1 hour.":
      "El intervalo de recuperación de activos y vulnerabilidades. Se recomienda establecerlo en 1 hora.",
    "The Illusive Attack Management API allows customers to retrieve detected incidents with a forensics timeline, attack surface insights, collect forensics on-demand, and manage a variety of operations with regard to deceptive entities, deception policies, and more.":
      "La API de Illusive Attack Management permite a los clientes recuperar los incidentes detectados con una línea de tiempo forense, obtener información sobre la superficie de ataque, recopilar datos forenses bajo demanda y gestionar diversas operaciones relacionadas con entidades de engaño, políticas de engaño y más.",
    "The Indicator of Attack (IOA) fetch query. This is an FQL filter that is combined with the time-range filter using AND. For example: cloud_provider:'aws'. For more information, see the Falcon Query Language (FQL) documentation at: https://www.falconpy.io/Usage/Falcon-Query-Language.html.":
      "La consulta de recuperación de Indicator of Attack (IOA). Es un filtro FQL que se combina con el filtro de intervalo de tiempo mediante AND. Por ejemplo: cloud_provider:'aws'. Para obtener más información, consulte la documentación de Falcon Query Language (FQL) en: https://www.falconpy.io/Usage/Falcon-Query-Language.html.",
    "The tenant URL for EPM region (e.g., https://api-na.epm.cyberark.cloud).":
      "La URL del tenant de la región de EPM (p. ej., https://api-na.epm.cyberark.cloud).",
    "The timeout of the HTTP requests sent to Cortex API (in seconds).":
      "El tiempo de espera de las solicitudes HTTP enviadas a la API de Cortex (en segundos).",
    "THF Polygon is a Malware Detonation & Research platform designed for deep dynamic analysis and enhanced indicators extraction. THF Polygon analyzes submitted files and urls and extracts deep IOCs that appear when malicious code is triggered and executed. Polygon could be used either for application-level tasks (like smtp-based mail filtering) and analytical purposes (files/urls analysis for verdict, report and indicators).":
      "THF Polygon es una plataforma de detonación e investigación de malware diseñada para el análisis dinámico profundo y la extracción mejorada de indicadores. THF Polygon analiza los archivos y URL enviados y extrae IOC profundos que aparecen cuando se activa y ejecuta el código malicioso. Polygon puede utilizarse tanto para tareas a nivel de aplicación (como el filtrado de correo basado en SMTP) como con fines analíticos (análisis de archivos/URL para obtener veredicto, informe e indicadores).",
    "Third Party Detection fetch query":
      "Consulta de recuperación de detecciones de terceros",
    "This integration is enabled by default for the new CrowdStrike Raptor version.":
      "Esta integración está habilitada de forma predeterminada para la nueva versión CrowdStrike Raptor.",
    "This integration was integrated and tested with version 23.2.1 of Cybereason Server":
      "Esta integración se integró y se probó con la versión 23.2.1 de Cybereason Server",
    "To authenticate to EPM with OAuth2, provide the following:":
      "Para autenticarse en EPM con OAuth2, proporcione lo siguiente:",
    "To specify an endpoint, use the following command arguments:":
      "Para especificar un endpoint, utilice los siguientes argumentos de comando:",
    "token_url: The CyberArk Identity FQDN for OAuth2 authentication (e.g., https://abc1234.id.cyberark.cloud)":
      "token_url: el FQDN de CyberArk Identity para la autenticación OAuth2 (p. ej., https://abc1234.id.cyberark.cloud)",
    "Troubleshooting":
      "Solución de problemas",
    "Use Falcon Query Language (FQL) to filter results. For more information, see the [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).":
      "Utilice Falcon Query Language (FQL) para filtrar los resultados. Para obtener más información, consulte la [FQL Syntax Documentation](https://www.falconpy.io/Usage/Falcon-Query-Language.html).",
    "Use the Cortex Github Action to integrate with your GitHub Workflows and gain visibility into your workflows.":
      "Utilice Cortex Github Action para integrarse con sus flujos de trabajo de GitHub y obtener visibilidad de ellos.",
    "Use the Falcon Query Language to refine the data collected. For more information, refer to the FQL syntax documentation: https://www.falconpy.io/Usage/Falcon-Query-Language.html":
      "Utilice Falcon Query Language para refinar los datos recopilados. Para obtener más información, consulte la documentación de la sintaxis de FQL: https://www.falconpy.io/Usage/Falcon-Query-Language.html",
    "Use the Generic Export Indicators Service integration to provide an endpoint with a list of indicators as a service for the system indicators.":
      "Utilice la integración Generic Export Indicators Service para proporcionar a un endpoint una lista de indicadores como servicio para los indicadores del sistema.",
    "Use the Generic SQL integration to run SQL queries on the following databases: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata and Trino.":
      "Utilice la integración Generic SQL para ejecutar consultas SQL en las siguientes bases de datos: MySQL, PostgreSQL, Microsoft SQL Server, Oracle, Teradata y Trino.",
    "Use the Google Maps API.":
      "Utilice la API de Google Maps.",
    "Use this integration to connect securely with a GitHub Model Context Protocol (MCP) server and access its tools in real time.":
      "Utilice esta integración para conectarse de forma segura a un servidor GitHub Model Context Protocol (MCP) y acceder a sus herramientas en tiempo real.",
    "Use this integration to connect to an MCP server and automatically discover its available tools.":
      "Utilice esta integración para conectarse a un servidor MCP y descubrir automáticamente sus herramientas disponibles.",
    "Use this parameter to determine the look-back period for searching for events that were created before the last run time and did not match the query when they were created.":
      "Utilice este parámetro para determinar el período de retroceso para buscar eventos que se crearon antes de la hora de la última ejecución y que no coincidían con la consulta cuando se crearon.",
    "Use this parameter to determine the look-back period for searching for incidents that were created before the last run time and did not match the query when they were created.":
      "Utilice este parámetro para determinar el período de retroceso para buscar incidentes que se crearon antes de la hora de la última ejecución y que no coincidían con la consulta cuando se crearon.",
    "Username (Only if your cuckoo service requires HTTP auth)":
      "Nombre de usuario (solo si su servicio cuckoo requiere autenticación HTTP)",
    "Web App ID":
      "ID de aplicación web",
    "web_app_id: The Application ID of the OAuth2 Server web app configured in Identity Administration.":
      "web_app_id: el ID de aplicación de la aplicación web de OAuth2 Server configurada en Identity Administration.",
    "When using this parameter, note that:":
      "Al utilizar este parámetro, tenga en cuenta que:",

    // --- Batch: strings from the Collector export #9 (integration card descriptions, error/maintenance messages, dashboard widget titles) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A utility for testing incident fetching with mock JSON data.":
      "Una utilidad para probar la recuperación de incidentes con datos JSON simulados.",
    "Access the full set of possibilities the JoeSandbox Cloud provides via the RESTful Web API v2.":
      "Acceda a todas las posibilidades que ofrece JoeSandbox Cloud a través de la RESTful Web API v2.",
    "Agent Content Version Breakdown (Top 5)":
      "Desglose de versiones de contenido del agente (las 5 principales)",
    "Agent Version Breakdown (Top 5)":
      "Desglose de versiones del agente (las 5 principales)",
    "Top Hosts (Top 10 | Last 30 days)":
      "Hosts principales (los 10 principales | últimos 30 días)",
    "Collect and assess security posture of the Snowflake data cloud.":
      "Recopile y evalúe la postura de seguridad de la nube de datos de Snowflake.",
    "Collect logs and data from Salesforce.":
      "Recopile registros y datos de Salesforce.",
    "Collects logs and data from Okta identity and access management service.":
      "Recopila registros y datos del servicio de administración de identidades y accesos de Okta.",
    "Connect JFrog Container Registry with Cortex Cloud to scan and secure your container images, ensuring robust artifact management and enhanced security.":
      "Conecte JFrog Container Registry con Cortex Cloud para analizar y proteger sus imágenes de contenedor, garantizando una administración sólida de artefactos y una seguridad mejorada.",
    "Connect OpenShift Internal Registry with Cortex Cloud using the Kubernetes datasource to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Conecte OpenShift Internal Registry con Cortex Cloud mediante el origen de datos de Kubernetes para analizar y proteger sus imágenes de contenedor, garantizando una seguridad y un cumplimiento integrales.",
    "Connect Sonatype Nexus Registry with Cortex Cloud to scan and secure your container images, ensuring comprehensive security and compliance.":
      "Conecte Sonatype Nexus Registry con Cortex Cloud para analizar y proteger sus imágenes de contenedor, garantizando una seguridad y un cumplimiento integrales.",
    "Deprecated. Use Joe Security v2 instead.":
      "Obsoleto. Utilice Joe Security v2 en su lugar.",
    "Enterprise Mobility Management (EMM) for Apple devices (Mac, iPhone, Apple TV, iPad). Can be used to control various configurations via different policies, install and uninstall applications, lock devices, smart groups searches, and more.":
      "Enterprise Mobility Management (EMM) para dispositivos Apple (Mac, iPhone, Apple TV, iPad). Se puede utilizar para controlar diversas configuraciones mediante distintas políticas, instalar y desinstalar aplicaciones, bloquear dispositivos, realizar búsquedas de grupos inteligentes y más.",
    "Error Occurred":
      "Se produjo un error",
    "Failed getting content pack recommended":
      "Error al obtener el paquete de contenido recomendado",
    "failed to get content items status":
      "error al obtener el estado de los elementos de contenido",
    "Failed to retrieve data source":
      "Error al recuperar el origen de datos",
    "Integrate Application Security with your Terraform Enterprise organization to gain visibility into your Terraform runs.":
      "Integre Application Security con su organización de Terraform Enterprise para obtener visibilidad de sus ejecuciones de Terraform.",
    "Integrate Semgrep to gain a unified overview of your application security posture.":
      "Integre Semgrep para obtener una visión unificada de la postura de seguridad de sus aplicaciones.",
    "Integrate Snyk to gain a unified overview of your application security posture.":
      "Integre Snyk para obtener una visión unificada de la postura de seguridad de sus aplicaciones.",
    "Integrate SonarQube to gain a unified overview of your application security posture.":
      "Integre SonarQube para obtener una visión unificada de la postura de seguridad de sus aplicaciones.",
    "Integrate Veracode to gain a unified overview of your application security posture.":
      "Integre Veracode para obtener una visión unificada de la postura de seguridad de sus aplicaciones.",
    "Microsoft Entra ID (formerly Azure AD) integration for identity & access posture monitoring":
      "Integración de Microsoft Entra ID (anteriormente Azure AD) para la supervisión de la postura de identidad y acceso",
    "MongoDB Atlas cloud database platform":
      "Plataforma de base de datos en la nube MongoDB Atlas",
    "Multi-service security integration for Microsoft 365 including OneDrive, SharePoint, Teams, and Entra ID.":
      "Integración de seguridad multiservicio para Microsoft 365, que incluye OneDrive, SharePoint, Teams y Entra ID.",
    "New data is being collected":
      "Se están recopilando datos nuevos",
    "Onboard your Jenkins server for comprehensive Application Security: Integrate Cortex CLI scans for your code, and secure your CI/CD pipelines.":
      "Incorpore su servidor Jenkins para una Application Security integral: integre los análisis de Cortex CLI para su código y proteja sus pipelines de CI/CD.",
    "Please try again later":
      "Inténtelo de nuevo más tarde",
    "Select dashboard":
      "Seleccionar panel",
    "Show Less":
      "Mostrar menos",
    "Something went wrong...":
      "Algo salió mal...",
    "Sorry, something went wrong...":
      "Lo sentimos, algo salió mal...",
    "The Cortex Core IR integration uses the Cortex API for detection and response, by natively integrating network, endpoint, and cloud data to stop sophisticated attacks.":
      "La integración Cortex Core IR utiliza la API de Cortex para la detección y la respuesta, integrando de forma nativa datos de red, endpoints y nube para detener ataques sofisticados.",
    "Under Maintenance":
      "En mantenimiento",

    // --- Batch: strings from the Collector export #10 (dashboard picker/empty-state strings, Cylance deprecation notice) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "+ Create new dashboard":
      "+ Crear panel nuevo",
    "Command Centers":
      "Centros de comando",
    "Common Dashboards":
      "Paneles comunes",
    "Troubleshooting Instances":
      "Solución de problemas de instancias",
    "Troubleshooting Playbooks":
      "Solución de problemas de playbooks",
    "Automation Insights":
      "Información de automatización",
    "Connect Data Sources":
      "Conectar orígenes de datos",
    "Get started with Cortex Cloud by connecting your cloud environment as data sources.":
      "Comience a usar Cortex Cloud conectando su entorno de nube como orígenes de datos.",
    "Ready to Secure Your Cloud?":
      "¿Listo para proteger su nube?",
    "Scanning in Progress...":
      "Análisis en curso...",
    "Your top priority vulnerabilities will be here shortly":
      "Sus vulnerabilidades de máxima prioridad aparecerán aquí en breve",
    "Deprecated. This service has been discontinued for external users by Cylance. No available replacement.":
      "Obsoleto. Cylance ha dejado de ofrecer este servicio a usuarios externos. No hay ningún reemplazo disponible.",

    // --- Batch: strings from the Collector export #11 (Databricks/Doppel integration docs and parameters, Databricks posture wizard, Bitbucket cards) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "“403 Forbidden” errors on specific commands:":
      "Errores “403 Forbidden” en comandos específicos:",
    "“Test failed” when configuring the integration:":
      "“Test failed” al configurar la integración:",
    "(API Key (V1))":
      "(clave de API (V1))",
    "(Client ID (V2), Client Secret (V2))":
      "(ID de cliente (V2), secreto de cliente (V2))",
    "(User API Key (V1))":
      "(clave de API de usuario (V1))",
    "API Key (V1)":
      "Clave de API (V1)",
    "User API Key (V1)":
      "Clave de API de usuario (V1)",
    "Client ID (V2)":
      "ID de cliente (V2)",
    "Client Secret (V2)":
      "Secreto de cliente (V2)",
    "Organization Code (V1)":
      "Código de organización (V1)",
    "Doppel Tenant URL":
      "URL del tenant de Doppel",
    "Attach alert screenshots to incidents":
      "Adjuntar capturas de pantalla de alertas a los incidentes",
    "Check “First fetch time” — a very short window may miss older events":
      "Compruebe “First fetch time”: una ventana muy corta puede omitir eventos más antiguos",
    "Check that the token has permission to access SQL Warehouses (used for connectivity test)":
      "Compruebe que el token tenga permiso para acceder a SQL Warehouses (se utiliza para la prueba de conectividad)",
    "Confirm “Fetch types” is set to at least one of: SQL Alerts, Failed Jobs":
      "Confirme que “Fetch types” esté configurado con al menos uno de estos valores: SQL Alerts, Failed Jobs",
    "Copy the token immediately — it will not be shown again":
      "Copie el token de inmediato: no se volverá a mostrar",
    "Databricks Free Edition does not support all APIs (e.g., SCIM, cluster creation). Commands targeting unsupported features will return 403":
      "Databricks Free Edition no admite todas las API (p. ej., SCIM, creación de clústeres). Los comandos dirigidos a funciones no admitidas devolverán 403",
    "Ensure the Personal Access Token is valid and has not expired":
      "Asegúrese de que el token de acceso personal sea válido y no haya caducado",
    "For SQL Alerts, verify alerts exist and have been triggered in your workspace":
      "En el caso de SQL Alerts, compruebe que existan alertas y que se hayan activado en su área de trabajo",
    "Increase the HTTP timeout in the integration instance advanced settings if needed":
      "Aumente el tiempo de espera de HTTP en la configuración avanzada de la instancia de integración si es necesario",
    "Log in to your Databricks workspace":
      "Inicie sesión en su área de trabajo de Databricks",
    "Some APIs require admin-level permissions. Verify your token’s user has the required role":
      "Algunas API requieren permisos de nivel de administrador. Compruebe que el usuario del token tenga el rol necesario",
    "How to Generate a Personal Access Token":
      "Cómo generar un token de acceso personal",
    "Test Configuration":
      "Probar configuración",
    "Databricks Workspace URL":
      "URL del área de trabajo de Databricks",
    "Fetch incidents returns no results:":
      "La recuperación de incidentes no devuelve resultados:",
    "Timeout errors on large queries:":
      "Errores de tiempo de espera en consultas grandes:",
    "Fetch incidents timeout":
      "Tiempo de espera de recuperación de incidentes",
    "Fetch types":
      "Tipos de recuperación",
    "Number of incidents for each fetch.":
      "Número de incidentes por cada recuperación.",
    "Polling interval":
      "Intervalo de sondeo",
    "Issue type (if classifier doesn't exist)":
      "Tipo de problema (si no existe un clasificador)",
    "No issue type":
      "Sin tipo de problema",
    "Issue type will be set by this field if a Classifier does not exist. If a classifier is selected, it will take precedence.":
      "Si no existe un clasificador, este campo establecerá el tipo de problema. Si se selecciona un clasificador, este tendrá prioridad.",
    "Default polling interval value for `demisto-lock-get`, can be overridden by the \"polling_interval\" argument.":
      "Valor predeterminado del intervalo de sondeo de `demisto-lock-get`; se puede reemplazar con el argumento \"polling_interval\".",
    "Due to API limitations, the maximum is 100.":
      "Debido a limitaciones de la API, el máximo es 100.",
    "e.g., 3 days, 1 week":
      "p. ej., 3 days, 1 week",
    "The Doppel API version to use. V1 authenticates with a static API Key; V2 authenticates with OAuth 2.0 client credentials (Client ID and Client Secret). New Doppel API capabilities are added to V2 only, so V2 is recommended.":
      "La versión de la API de Doppel que se utilizará. V1 se autentica con una clave de API estática; V2 se autentica con credenciales de cliente OAuth 2.0 (ID de cliente y secreto de cliente). Las nuevas funciones de la API de Doppel solo se añaden a V2, por lo que se recomienda V2.",
    "The Doppel server URL that will be used for calling the APIs.":
      "La URL del servidor de Doppel que se utilizará para llamar a las API.",
    "The interval specifies the cadence with which the Doppel alerts be fetched.":
      "El intervalo especifica la frecuencia con la que se recuperan las alertas de Doppel.",
    "The Organization Code to use for connection with Doppel. Applies to API Version V1 only; V2 scopes requests to your organization automatically.":
      "El código de organización que se utilizará para la conexión con Doppel. Se aplica solo a la versión V1 de la API; V2 limita las solicitudes a su organización automáticamente.",
    "The time limit in seconds for fetch incidents to run. Leave this empty to cancel the timeout limit.":
      "El límite de tiempo en segundos para la ejecución de la recuperación de incidentes. Déjelo vacío para cancelar el límite de tiempo.",
    "Types of events to fetch as incidents.":
      "Tipos de eventos que se recuperarán como incidentes.",
    "Whether incoming mirroring downloads the alert screenshot and attaches it to the incident as a War Room file entry whenever the screenshot version changes. Screenshots are stored in your Cortex instance. The doppel-get-alert-screenshot command works regardless of this setting.":
      "Indica si la duplicación entrante descarga la captura de pantalla de la alerta y la adjunta al incidente como entrada de archivo de War Room cada vez que cambia la versión de la captura. Las capturas se almacenan en su instancia de Cortex. El comando doppel-get-alert-screenshot funciona independientemente de este ajuste.",
    "Details for Doppel workflow":
      "Detalles del flujo de trabajo de Doppel",
    "Credentials for the API Version you select (see below).":
      "Credenciales para la versión de la API que seleccione (consulte más abajo).",
    "Reach out to Doppel to get access to the above information.":
      "Póngase en contacto con Doppel para obtener acceso a la información anterior.",
    "Name of the instance.":
      "Nombre de la instancia.",
    "Doppel is a Modern Digital Risk Protection Solution, that detects the phishing and brand cyber attacks on the emerging channels. Doppel scans millions of channels online which includes, social media, domains, paid ads, dark web, emerging channels, etc. Doppel can identify the malicious content and cyber threats, and enables their customers to take down the digital risks proactively. The Cortex pack for Doppel provides mirrors the alerts created by Doppel as Cortex incidents. The pack also contains the commands to perform different operations on Doppel alerts.":
      "Doppel es una solución moderna de protección contra riesgos digitales que detecta ataques cibernéticos de phishing y de marca en los canales emergentes. Doppel analiza millones de canales en línea, como redes sociales, dominios, anuncios de pago, dark web y canales emergentes. Doppel puede identificar contenido malicioso y ciberamenazas, y permite a sus clientes eliminar los riesgos digitales de forma proactiva. El paquete de Cortex para Doppel replica las alertas creadas por Doppel como incidentes de Cortex. El paquete también contiene los comandos para realizar distintas operaciones en las alertas de Doppel.",
    "The Demisto Locking integration allows prevention of concurrent execution of scripts or commands, using a wait-lock-release flow (mutex).":
      "La integración Demisto Locking permite evitar la ejecución simultánea de scripts o comandos mediante un flujo de espera-bloqueo-liberación (mutex).",
    "Allow access by IP's":
      "Permitir el acceso por IP",
    "Applicable Broker VMs":
      "Broker VM aplicables",
    "Both cloud and region will be used for scanning and can incur cost and compliance if selected incorrectly.":
      "Tanto la nube como la región se utilizarán para el análisis, y una selección incorrecta puede generar costes y problemas de cumplimiento.",
    "Choose regions":
      "Elegir regiones",
    "Databricks Account ID":
      "ID de cuenta de Databricks",
    "Databricks Instance":
      "Instancia de Databricks",
    "Define static IPs and cloud regions for the connector if required by your security settings.":
      "Defina IP estáticas y regiones de nube para el conector si lo exige su configuración de seguridad.",
    "Enter instance name":
      "Introduzca el nombre de la instancia",
    "Establish Connection":
      "Establecer conexión",
    "For Container Registries with network policies, it is required to allow access from the following IP addresses:":
      "En los registros de contenedores con políticas de red, es necesario permitir el acceso desde las siguientes direcciones IP:",
    "Insert Account ID":
      "Introduzca el ID de cuenta",
    "Insert Application id":
      "Introduzca el ID de aplicación",
    "Integrate Cloud Security with your Databricks Account to gain comprehensive visibility into any data and posture risk existing in your Databricks environment.This integration enables automated scanning of all assets in Databricks,including data classification and risk assessment.":
      "Integre Cloud Security con su cuenta de Databricks para obtener visibilidad integral de los datos y los riesgos de postura existentes en su entorno de Databricks. Esta integración permite el análisis automatizado de todos los activos de Databricks, incluida la clasificación de datos y la evaluación de riesgos.",
    "Invalid account ID":
      "ID de cuenta no válido",
    "My Databricks account protected by network policies":
      "Mi cuenta de Databricks protegida por políticas de red",
    "Scan with Broker VM":
      "Analizar con Broker VM",
    "Scanning in private networks is done using broker VM infrastructure":
      "El análisis en redes privadas se realiza mediante la infraestructura de Broker VM",
    "Scanning is done on infrastructure deployed to a cloud account owned by you. This mode requires additional cloud provider permissions and may incur additional cloud costs.":
      "El análisis se realiza en una infraestructura implementada en una cuenta de nube de su propiedad. Este modo requiere permisos adicionales del proveedor de nube y puede generar costes adicionales de nube.",
    "Select a cloud provider and region in order to retrieve an IP address.":
      "Seleccione un proveedor de nube y una región para obtener una dirección IP.",
    "Select Cloud provider":
      "Seleccionar proveedor de nube",
    "Select Cluster":
      "Seleccionar clúster",
    "Verify Connection":
      "Verificar conexión",

    // --- Batch: fragment strings for the Databricks integration doc page (fragments whose neighbouring nodes are known; registered as a set so the sentence reads correctly) ---
    // Fragments such as "and", "The", "In the", "by searching for", "Do not enable", "To get an API client ID and secret, contact" are intentionally NOT registered.
    "A Databricks workspace with a valid URL (e.g.,":
      "Un área de trabajo de Databricks con una URL válida (p. ej.,",
    "A Personal Access Token (PAT) with at minimum":
      "Un token de acceso personal (PAT) con acceso",
    "access. Admin-level permissions are required for IAM (SCIM), IP access lists, and global init script commands":
      "como mínimo. Se requieren permisos de nivel de administrador para IAM (SCIM), listas de acceso IP y comandos de scripts de inicio globales",
    "Click your username in the top-right corner and select":
      "Haga clic en su nombre de usuario en la esquina superior derecha y seleccione",
    "Enter a description and optional lifetime, then click":
      "Introduzca una descripción y una duración opcional y, a continuación, haga clic en",
    "Verify the Workspace URL is correct (no trailing slash, includes":
      "Compruebe que la URL del área de trabajo sea correcta (sin barra final, incluye",
    ": Your workspace URL (e.g.,":
      ": La URL de su área de trabajo (p. ej.,",
    ": The PAT generated above":
      ": El PAT generado anteriormente",
    ": Enable to pull SQL alerts and failed job runs as incidents":
      ": Habilítelo para extraer alertas SQL y ejecuciones de trabajos fallidas como incidentes",
    "SQL Statement Execute may time out for long-running queries. Use":
      "SQL Statement Execute puede agotar el tiempo de espera en consultas de larga duración. Utilice",
    "to poll for results":
      "para sondear los resultados",

    // --- Batch: EWS O365 / Exchange Online / Dropbox / Elasticsearch integration doc page (Collector export 2026-10-11 09:38) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Action Required":
      "Acción necesaria",
    "App authentication":
      "Autenticación de aplicación",
    "Important note: Retirement of RBAC Application Impersonation":
      "Nota importante: retirada de RBAC Application Impersonation",
    "Microsoft EWS Retirement and EwsAllowedAppIds":
      "Retirada de Microsoft EWS y EwsAllowedAppIds",
    "Permissions Needed":
      "Permisos necesarios",
    "Set up the Third Party System":
      "Configurar el sistema de terceros",
    "Verify that the admin account has sufficient Exchange Online permissions":
      "Compruebe que la cuenta de administrador tenga permisos suficientes de Exchange Online",
    "For customers using a Self-Deployed Application":
      "Para clientes que utilizan una aplicación autoimplementada",
    "For customers using the Cortex Application authentication method":
      "Para clientes que utilizan el método de autenticación de Cortex Application",
    "(For full details, complete timelines, and PowerShell scripts for safely appending to an existing allow list, refer to the official Microsoft documentation:":
      "(Para obtener información completa, cronogramas detallados y scripts de PowerShell para agregar entradas de forma segura a una lista de permitidos existente, consulte la documentación oficial de Microsoft:",
    "After authorizing the Demisto app, you will get an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields.":
      "Después de autorizar la aplicación Demisto, obtendrá un ID, un token y una clave, que deben agregarse a los campos correspondientes de la configuración de la instancia de integración.",
    "As of February 2025, the Impersonation access type of the integration is deprecated by Microsoft, read about it":
      "Desde febrero de 2025, Microsoft ha dejado obsoleto el tipo de acceso Impersonation de la integración; obtenga más información",
    "As part of this transition, Microsoft is moving away from unrestricted EWS access and has introduced a new tenant-level allow list called":
      "Como parte de esta transición, Microsoft está abandonando el acceso sin restricciones a EWS y ha introducido una nueva lista de permitidos a nivel de tenant llamada",
    "Assign Azure AD roles to the application.":
      "Asigne roles de Azure AD a la aplicación.",
    "Assign custom role groups to the application using service principals.":
      "Asigne grupos de roles personalizados a la aplicación mediante entidades de servicio.",
    "Attach the .cer file to your Azure app.":
      "Adjunte el archivo .cer a su aplicación de Azure.",
    "Attach the .cer file to your Azure App.":
      "Adjunte el archivo .cer a su aplicación de Azure.",
    "Authentication Type (NTLM, Basic, or Digest). For Office 365 use Basic.":
      "Tipo de autenticación (NTLM, Basic o Digest). Para Office 365, utilice Basic.",
    "Authentication: Email address (for Office 365) or DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "Autenticación: dirección de correo electrónico (para Office 365) o DOMAIN\\USERNAME (p. ej., DEMISTO.INT\\admin)",
    "Connect to Exchange Online PowerShell and add the Application ID.":
      "Conéctese a Exchange Online PowerShell y agregue el ID de aplicación.",
    "Copy the contents of the .txt file and paste it in the Certificate parameter of the integration’s instance.":
      "Copie el contenido del archivo .txt y péguelo en el parámetro Certificate de la instancia de la integración.",
    "Create the application:":
      "Cree la aplicación:",
    "Create the certificate in Cortex XSOAR/XSIAM.":
      "Cree el certificado en Cortex XSOAR/XSIAM.",
    "Default is to filter by received-time, which works well if the folder is an \"Inbox\". But for a folder emails are dragged into for attention, if we filter by received-time, out-of-order processing of emails means some are ignored. Filtering by modified-time works better for such a scenario. This works best if any modifications (such as tagging) happens before moving the email into the folder, such that the move into the folder is the last modification, and triggers Cortex to fetch it as an incident.":
      "De forma predeterminada se filtra por hora de recepción, lo cual funciona bien si la carpeta es una \"Bandeja de entrada\". Pero en una carpeta a la que se arrastran correos para su atención, si se filtra por hora de recepción, el procesamiento desordenado de los correos hace que algunos se ignoren. Filtrar por hora de modificación funciona mejor en ese escenario. Esto funciona mejor si cualquier modificación (como el etiquetado) se realiza antes de mover el correo a la carpeta, de modo que el movimiento a la carpeta sea la última modificación y haga que Cortex lo recupere como incidente.",
    "Default version is used when accessing the EWS API to determine the API version.":
      "Se utiliza la versión predeterminada al acceder a la API de EWS para determinar la versión de la API.",
    "Directory and metadata:":
      "Directorio y metadatos:",
    "Log collection:":
      "Recopilación de registros:",
    "Inventory data snapshots are collected every 10 minutes.":
      "Las instantáneas de datos de inventario se recopilan cada 10 minutos.",
    "Download the certificateBase34.txt file.":
      "Descargue el archivo certificateBase34.txt.",
    "Email address from which to fetch incidents":
      "Dirección de correo electrónico desde la que recuperar incidentes",
    "Enable Dropbox Log Collection":
      "Habilitar la recopilación de registros de Dropbox",
    "Enter a unique name for this DropBox instance":
      "Introduzca un nombre único para esta instancia de DropBox",
    "Enter DropBox Access Code for authenticating requests":
      "Introduzca el código de acceso de DropBox para autenticar las solicitudes",
    "Enter DropBox app key for authenticating requests":
      "Introduzca la clave de aplicación de DropBox para autenticar las solicitudes",
    "Enter DropBox App Secret for authenticating requests":
      "Introduzca el secreto de aplicación de DropBox para autenticar las solicitudes",
    "access code":
      "código de acceso",
    "app key":
      "clave de aplicación",
    "app secret":
      "secreto de aplicación",
    "Ensure EWS is enabled for your tenant.":
      "Asegúrese de que EWS esté habilitado para su tenant.",
    "Elastic version 2.* or 5.*":
      "Elastic versión 2.* o 5.*",
    "Exchange Online URL":
      "URL de Exchange Online",
    "Exchange URL or Server IP address":
      "URL de Exchange o dirección IP del servidor",
    "ID / Application ID":
      "ID / ID de aplicación",
    "ID can be received from the admin consent procedure - see Detailed Instructions.":
      "El ID se puede obtener del procedimiento de consentimiento del administrador; consulte las instrucciones detalladas.",
    "Token can be received from the admin consent procedure - see Detailed Instructions.":
      "El token se puede obtener del procedimiento de consentimiento del administrador; consulte las instrucciones detalladas.",
    "Follow your preferred method’s guide on how to use the admin consent flow in order to receive your authentication information:":
      "Siga la guía del método que prefiera sobre cómo usar el flujo de consentimiento del administrador para recibir su información de autenticación:",
    "For Office 365, use https://outlook.office365.com/EWS/Exchange.asmx (default) as the Server URL.":
      "Para Office 365, utilice https://outlook.office365.com/EWS/Exchange.asmx (predeterminada) como URL del servidor.",
    "For the integration to work, the Azure AD application’s service principal must have the correct permissions assigned in the Exchange Online role groups.":
      "Para que la integración funcione, la entidad de servicio de la aplicación de Azure AD debe tener asignados los permisos correctos en los grupos de roles de Exchange Online.",
    "Has impersonation rights":
      "Tiene derechos de suplantación",
    "Mark fetched emails as read":
      "Marcar los correos recuperados como leídos",
    "Skip unparsable emails during fetch incidents":
      "Omitir los correos que no se puedan analizar durante la recuperación de incidentes",
    "Trust server certificate":
      "Confiar en el certificado del servidor",
    "Use a self deployed Azure Application":
      "Usar una aplicación de Azure autoimplementada",
    "Use legacy attachment name":
      "Usar el nombre de archivo adjunto heredado",
    "If this is the only application you are allowing, run the following command (replace":
      "Si esta es la única aplicación que permite, ejecute el siguiente comando (reemplace",
    "with your actual Application Client ID):":
      "por su ID de cliente de aplicación real):",
    "In Azure, go to Entra ID (Overview blade) and copy the":
      "En Azure, vaya a Entra ID (hoja Información general) y copie el valor de",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, enter your saved password in the":
      "En Cortex XSOAR/XSIAM, en la configuración de la instancia de integración, introduzca la contraseña guardada en",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the application ID in":
      "En Cortex XSOAR/XSIAM, en la configuración de la instancia de integración, pegue el ID de aplicación en",
    "In Cortex XSOAR/XSIAM, in the integration instance configuration, paste the Domain name in":
      "En Cortex XSOAR/XSIAM, en la configuración de la instancia de integración, pegue el nombre de dominio en",
    "In order to function as expected, set the following permissions:":
      "Para que funcione como se espera, configure los siguientes permisos:",
    "In the Add assignments flyout that opens, find and select the app that you created in Step 1.":
      "En el panel flotante Add assignments que se abre, busque y seleccione la aplicación que creó en el paso 1.",
    "In the Certificates tab, upload the publickey.cer file.":
      "En la pestaña Certificates, cargue el archivo publickey.cer.",
    "In the Cortex XSOAR/XSIAM Playground, download the publickey.cer file":
      "En el Playground de Cortex XSOAR/XSIAM, descargue el archivo publickey.cer",
    "In the integration instance configuration, paste the text in the":
      "En la configuración de la instancia de integración, pegue el texto en",
    "In the left menu of the newly created application, click":
      "En el menú de la izquierda de la aplicación recién creada, haga clic en",
    "In the Azure app, navigate to":
      "En la aplicación de Azure, vaya a",
    "In the Azure application, in the left menu, click":
      "En la aplicación de Azure, en el menú de la izquierda, haga clic en",
    "In the Request API permissions page, click":
      "En la página Request API permissions, haga clic en",
    "In the left sidebar, select:":
      "En la barra lateral izquierda, seleccione:",
    "In the top bar, select:":
      "En la barra superior, seleccione:",
    "Index time field, used to sort and limit data":
      "Campo de hora del índice, utilizado para ordenar y limitar los datos",
    "Index/indexes to fetch incidents from (comma separated)":
      "Índice(s) desde los que recuperar incidentes (separados por comas)",
    "Key / Application Secret":
      "Clave / Secreto de aplicación",
    "Log in using an admin account that can manage role assignments for the Azure AD application (for example, a Global Administrator or Privileged Role Administrator).":
      "Inicie sesión con una cuenta de administrador que pueda administrar las asignaciones de roles de la aplicación de Azure AD (por ejemplo, un administrador global o un administrador de roles con privilegios).",
    "Mailbox to run commands on and to fetch incidents from.":
      "Buzón en el que ejecutar comandos y desde el que recuperar incidentes.",
    "Mailbox to run commands on and to fetch incidents from. To use this functionality, your account must have delegation for the account specified. For more information, see https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information":
      "Buzón en el que ejecutar comandos y desde el que recuperar incidentes. Para usar esta funcionalidad, su cuenta debe tener delegación para la cuenta especificada. Para obtener más información, consulte https://xsoar.pan.dev/docs/reference/integrations/ewso365#additional-information",
    "Maximum number of incidents per fetch (up to 200). Performance might be affected by a value higher than 50.":
      "Número máximo de incidentes por recuperación (hasta 200). Un valor superior a 50 puede afectar al rendimiento.",
    "Member Devices":
      "Dispositivos miembro",
    "Name of the folder from which to fetch incidents":
      "Nombre de la carpeta desde la que recuperar incidentes",
    "Name of the folder from which to fetch incidents (supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing)":
      "Nombre de la carpeta desde la que recuperar incidentes (admite ID de carpeta de Exchange y subcarpetas, p. ej., Inbox/Phishing)",
    "Supports Exchange Folder ID and sub-folders e.g. Inbox/Phishing.":
      "Admite ID de carpeta de Exchange y subcarpetas, p. ej., Inbox/Phishing.",
    "Note - for more information go to the official":
      "Nota: para obtener más información, consulte el sitio oficial de",
    "Note: Remember your password since you will need it to create your integration instance.":
      "Nota: recuerde su contraseña, ya que la necesitará para crear su instancia de integración.",
    "Note: The information in the Playground is sensitive information. You should delete the information by running the following command:":
      "Nota: la información del Playground es información confidencial. Debe eliminarla ejecutando el siguiente comando:",
    "Open the downloaded txt file and copy the text.":
      "Abra el archivo txt descargado y copie el texto.",
    "Open the Microsoft Purview Portal: https://purview.microsoft.com/":
      "Abra el portal de Microsoft Purview: https://purview.microsoft.com/",
    "Palo Alto Networks is making the necessary updates to align our shared Application ID with Microsoft’s new requirements, so you do not need to run the steps above. However, because this change is enforced and controlled entirely by Microsoft, we cannot validate the changes in advance or guarantee uninterrupted functionality. Palo Alto Networks is not responsible for any disruptions resulting from this rollout. We recommend verifying that your integration continues to function as expected once the October 2026 enforcement takes effect.":
      "Palo Alto Networks está realizando las actualizaciones necesarias para alinear nuestro ID de aplicación compartido con los nuevos requisitos de Microsoft, por lo que no necesita ejecutar los pasos anteriores. Sin embargo, como Microsoft aplica y controla este cambio por completo, no podemos validar los cambios de antemano ni garantizar un funcionamiento ininterrumpido. Palo Alto Networks no se responsabiliza de las interrupciones derivadas de este despliegue. Le recomendamos que compruebe que su integración sigue funcionando como se espera cuando entre en vigor la aplicación obligatoria de octubre de 2026.",
    "You are responsible for updating your tenant configuration before the October 2026 enforcement takes effect. To ensure this integration continues to function without disruption, you must add the Entra Application (Client) ID used by this integration to your Exchange Online tenant’s allow list.":
      "Usted es responsable de actualizar la configuración de su tenant antes de que entre en vigor la aplicación obligatoria de octubre de 2026. Para garantizar que esta integración siga funcionando sin interrupciones, debe agregar el ID de aplicación (cliente) de Entra utilizado por esta integración a la lista de permitidos de su tenant de Exchange Online.",
    "Query to fetch incidents by (Lucene style)":
      "Consulta para recuperar incidentes (estilo Lucene)",
    "Sender Mailbox":
      "Buzón del remitente",
    "Server URL (e.g. http://192.168.0.1:9200)":
      "URL del servidor (p. ej., http://192.168.0.1:9200)",
    "Server Version (2007, 2010, 2010_SP2, 2013, or 2016)":
      "Versión del servidor (2007, 2010, 2010_SP2, 2013 o 2016)",
    "The application ID from the Azure portal":
      "El ID de aplicación del portal de Azure",
    "The organization used in app-only authentication":
      "La organización utilizada en la autenticación solo de aplicación",
    "The organization used in app-only authentication.":
      "La organización utilizada en la autenticación solo de aplicación.",
    "There are two application authentication methods available.":
      "Hay dos métodos de autenticación de aplicaciones disponibles.",
    "This command replaces the entire allow list. If you already have other approved EWS applications, first read the current list and append the new ID so that you don’t overwrite existing entries.":
      "Este comando reemplaza toda la lista de permitidos. Si ya tiene otras aplicaciones EWS aprobadas, lea primero la lista actual y agregue el nuevo ID para no sobrescribir las entradas existentes.",
    "Time format as kept in ElasticSearch, leave empty to use default":
      "Formato de hora tal como se guarda en ElasticSearch; déjelo vacío para usar el predeterminado",
    "Time format is goland style format. For more details, look at:":
      "El formato de hora es de estilo Goland. Para obtener más información, consulte:",
    "To allow access to EWS O365, an administrator has to approve the Demisto app using an admin consent flow, by clicking on the following":
      "Para permitir el acceso a EWS O365, un administrador debe aprobar la aplicación Demisto mediante un flujo de consentimiento del administrador, haciendo clic en el siguiente enlace:",
    "To avoid disruptions, it is imperative that administrators begin transitioning their applications immediately.":
      "Para evitar interrupciones, es imprescindible que los administradores comiencen a migrar sus aplicaciones de inmediato.",
    "To create the application, follow the instructions in this":
      "Para crear la aplicación, siga las instrucciones de esta",
    "To identify accounts using the ApplicationImpersonation role use the Exchange Online PowerShell command:":
      "Para identificar las cuentas que usan el rol ApplicationImpersonation, utilice el siguiente comando de Exchange Online PowerShell:",
    "To obtain the access code, click":
      "Para obtener el código de acceso, haga clic en",
    "and sign in with your Dropbox Business account credentials.":
      "y inicie sesión con las credenciales de su cuenta de Dropbox Business.",
    "To use this integration, you need to connect an application with a certificate.":
      "Para usar esta integración, debe conectar una aplicación con un certificado.",
    "Under Exchange, click the":
      "En Exchange, haga clic en",
    "We highly recommend using the":
      "Para las operaciones de buzón, recomendamos encarecidamente utilizar la",
    "integration for mailbox operations such as reading, searching, and managing emails and attachments, as Microsoft itself recommends transitioning from EWS to Graph-based APIs.":
      "integración (como lectura, búsqueda y administración de correos y archivos adjuntos), ya que el propio Microsoft recomienda migrar de EWS a las API basadas en Graph.",
    "What time field should we filter incidents by?":
      "¿Por qué campo de hora se deben filtrar los incidentes?",
    "When 'Mark fetched emails as read' is enabled and emails are fetched by modification time, emails will be re-fetched in the next cycle after being marked as read (due to metadata changes). This is expected behavior.":
      "Cuando 'Mark fetched emails as read' está habilitado y los correos se recuperan por hora de modificación, los correos se volverán a recuperar en el siguiente ciclo después de marcarse como leídos (debido a cambios en los metadatos). Este es el comportamiento esperado.",
    "You have two options:":
      "Tiene dos opciones:",
    "Search for the following role groups:":
      "Busque los siguientes grupos de roles:",
    "If not listed, click":
      "Si no aparece en la lista, haga clic en",
    "On the Assignments page that opens, select":
      "En la página Assignments que se abre, seleccione",
    "On the Roles and administrators page that opens, find and select one of the supported roles by clicking on the":
      "En la página Roles and administrators que se abre, busque y seleccione uno de los roles admitidos haciendo clic en",
    "Microsoft has announced the final phase of Exchange Web Services (EWS) retirement in Exchange Online, with phased disablement beginning in October 2026.":
      "Microsoft ha anunciado la fase final de la retirada de Exchange Web Services (EWS) en Exchange Online, con una desactivación gradual que comenzará en octubre de 2026.",
    "application used for authentication":
      "aplicación utilizada para la autenticación",

    // --- Batch: follow-up for the 09:38 export: items missed in the previous batch (EWS Extension Online PowerShell doc, Elasticsearch DQ label) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Use DQ syntax to map elastic JSON struct to incident fields, use :: as mapping seperator":
      "Utilice la sintaxis DQ para asignar la estructura JSON de Elastic a los campos de incidente y utilice :: como separador de asignación",
    ". Starting in October 2026, Microsoft will block all EWS traffic by default. Applications will only be able to access EWS if their specific Application (Client) ID is explicitly added to this allow list by the tenant administrator.":
      ". A partir de octubre de 2026, Microsoft bloqueará de forma predeterminada todo el tráfico de EWS. Las aplicaciones solo podrán acceder a EWS si el administrador del tenant ha agregado explícitamente su ID de aplicación (cliente) específico a esta lista de permitidos.",
    "Deprecated. Use EWS v2 instead.":
      "Obsoleto. Utilice EWS v2 en su lugar.",
    "Deprecated. Use EWS Extension Online Powershell v3 instead.":
      "Obsoleto. Utilice EWS Extension Online Powershell v3 en su lugar.",
    "Deprecated. Use":
      "Obsoleto. Utilice",
    "instead.":
      "en su lugar.",
    "- Client Credential Flow.":
      "- Flujo de credenciales de cliente.",
    "– a highly privileged security role that also provides full access.":
      "– un rol de seguridad con privilegios elevados que también proporciona acceso completo.",
    "– the most privileged role and fully supported for this integration.":
      "– el rol con más privilegios y totalmente compatible con esta integración.",
    ". Assign the following API permission to the application:":
      ". Asigne el siguiente permiso de API a la aplicación:",
    "Run the":
      "Ejecute el comando",
    "command in Cortex to acquire the certificate.":
      "en Cortex para obtener el certificado.",
    "command in the Playground to acquire the certificate.":
      "en el Playground para obtener el certificado.",
    "Open the role and verify that the":
      "Abra el rol y compruebe que la",
    "service principal of the Azure AD application used by the integration":
      "entidad de servicio de la aplicación de Azure AD utilizada por la integración",
    "is listed.":
      "aparece en la lista.",
    "The role":
      "El rol",
    "is eligible for this integration.":
      "es apto para esta integración.",
    "Search for":
      "Busque",
    "in the Search box.":
      "en el cuadro de búsqueda.",
    ", give the application a name (for example:":
      ", asigne un nombre a la aplicación (por ejemplo:",
    ") and click":
      ") y haga clic en",
    ", search for":
      ", busque",
    "and assign the required roles.":
      "y asigne los roles necesarios.",
    "and copy the Application (client) ID.":
      "y copie el ID de aplicación (cliente).",
    "Fore more information check the":
      "Para obtener más información, consulte la",
    "Microsoft Documentation.":
      "Documentación de Microsoft.",
    "guide":
      "guía",
    "Azure AD portal":
      "portal de Azure AD",

    // --- Batch: Elasticsearch v2 / Kibana / Microsoft Graph (Entra ID) integration doc page (Collector export 2026-10-12 07:23) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- API Key Auth: Enter the API Key ID and API Key.":
      "- API Key Auth: introduzca el ID de la clave de API y la clave de API.",
    "- Basic Auth: Enter Username and Password.":
      "- Basic Auth: introduzca el nombre de usuario y la contraseña.",
    "- Bearer Auth: Enter Username and Password.":
      "- Bearer Auth: introduzca el nombre de usuario y la contraseña.",
    "- Index":
      "- Índice",
    "- Index time field":
      "- Campo de hora del índice",
    "- Query String or Raw Query":
      "- Cadena de consulta o Raw Query",
    "— Bulk-update the status of security detection alerts (open, acknowledged, closed).":
      "— Actualice de forma masiva el estado de las alertas de detección de seguridad (abiertas, reconocidas, cerradas).",
    "— Create, update, delete, and import/export value lists used in detection rules.":
      "— Cree, actualice, elimine e importe/exporte listas de valores utilizadas en reglas de detección.",
    "— Create, update, delete, and list Kibana cases; add comments, attach files, and link alerts to cases.":
      "— Cree, actualice, elimine y enumere casos de Kibana; agregue comentarios, adjunte archivos y vincule alertas a los casos.",
    "— List rule types, retrieve rules, enable/disable rules, mute/unmute alerts.":
      "— Enumere tipos de reglas, recupere reglas, habilite/deshabilite reglas y silencie/reactive alertas.",
    "— Manage Kibana exception lists and their items, including Elastic Endpoint exceptions.":
      "— Administre las listas de excepciones de Kibana y sus elementos, incluidas las excepciones de Elastic Endpoint.",
    ", the required privilege is also scoped to the feature that owns the object:":
      ", el privilegio necesario también está limitado a la función que es propietaria del objeto:",
    ". The level required depends on the operation:":
      ". El nivel necesario depende de la operación:",
    "Objects owned by":
      "Los objetos pertenecientes a",
    "(e.g. SIEM detection rules, Security cases) require the":
      "(p. ej., reglas de detección SIEM, casos de Security) requieren el",
    "(e.g. Stack Rules) require the":
      "(p. ej., Stack Rules) requieren el",
    "require the":
      "requieren el",
    "feature privilege.":
      "privilegio de función.",
    "feature privileges":
      "privilegios de función",
    "(for example,":
      "(por ejemplo,",
    "). Kibana is usually hosted separately from Elasticsearch, so this URL cannot be derived from the Elasticsearch":
      "). Kibana suele alojarse por separado de Elasticsearch, por lo que esta URL no se puede derivar de la siguiente configuración de Elasticsearch:",
    "<number> <time unit>, e.g., 12 hours, 7 days":
      "<number> <time unit> (p. ej., 12 hours, 7 days)",
    "3 formats supported:":
      "Se admiten 3 formatos:",
    "A detailed explanation on how to register an app can be found":
      "Puede encontrar una explicación detallada sobre cómo registrar una aplicación",
    "Additional Configuration Parameters Details":
      "Detalles de los parámetros de configuración adicionales",
    "After authorizing the Cortex XSAOR app, you will get an ID, Token, and Key which needs to be added to the integration instance configuration’s corresponding fields.":
      "Después de autorizar la aplicación Cortex XSOAR, obtendrá un ID, un token y una clave, que deben agregarse a los campos correspondientes de la configuración de la instancia de integración.",
    "Alerts to Fetch":
      "Alertas que se van a recuperar",
    "Allow secret generators commands execution":
      "Permitir la ejecución de comandos generadores de secretos",
    "Allows raw DSL queries. For more information about Query DSL see":
      "Permite consultas DSL sin procesar. Para obtener más información sobre Query DSL, consulte",
    "API Client ID created in the User management UI.":
      "API Client ID creado en la interfaz de User management.",
    "API Client Secret created in the User management UI.":
      "API Client Secret creado en la interfaz de User management.",
    "API Key Authentication":
      "Autenticación con clave de API",
    "Application ID (Client ID for Client credentials mode)":
      "ID de aplicación (ID de cliente para el modo Client credentials)",
    "Application redirect URI (for Authorization Code flow mode)":
      "URI de redirección de la aplicación (para el modo de flujo Authorization Code)",
    "Application redirect URI (for Self Deployed - Authorization Code Flow)":
      "URI de redirección de la aplicación (para autoimplementada - flujo Authorization Code)",
    "Apply the filter to fetch policy events having actions such as \"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\". Fetches all types of actions by default.":
      "Aplique el filtro para recuperar eventos de política con acciones como \"deliver\", \"mark-spam\", \"move\", \"inbox\", \"delete\", \"none\". De forma predeterminada, recupera todos los tipos de acciones.",
    "Authentication Based on Azure Managed Identities":
      "Autenticación basada en identidades administradas de Azure",
    "Authentication based on Entra ID applications":
      "Autenticación basada en aplicaciones de Entra ID",
    "Authorization code (for Authorization Code flow mode - received from the authorization step. see Detailed Instructions)":
      "Código de autorización (para el modo de flujo Authorization Code; se recibe en el paso de autorización; consulte las instrucciones detalladas)",
    "Authorization code (for Self Deployed - Authorization Code Flow)":
      "Código de autorización (para autoimplementada - flujo Authorization Code)",
    "Authorization type":
      "Tipo de autorización",
    "Azure AD endpoint":
      "Punto de conexión de Azure AD",
    "Azure AD endpoint associated with a national cloud.":
      "Punto de conexión de Azure AD asociado a una nube nacional.",
    "Bearer Authentication":
      "Autenticación Bearer",
    "Click the":
      "Haga clic en el botón",
    "button and you will be prompted to grant Cortex permissions for your Entra ID Users.":
      ". A continuación, se le solicitará que conceda permisos a Cortex para sus usuarios de Entra ID.",
    "button and you will receive your ID, token, and key. You will need to enter these when you configure the Entra ID Users integration instance in Cortex.":
      ". Recibirá su ID, token y clave. Deberá introducirlos al configurar la instancia de integración de Entra ID Users en Cortex.",
    "By default, Microsoft Entra ID Protection risk level is used as Cortex XSOAR/XSIAM issue severity. Select this option to override original risk level reported by Microsoft Entra ID Protection.":
      "De forma predeterminada, el nivel de riesgo de Microsoft Entra ID Protection se utiliza como gravedad del problema de Cortex XSOAR/XSIAM. Seleccione esta opción para anular el nivel de riesgo original notificado por Microsoft Entra ID Protection.",
    "Checking this box will allow running commands that generate and print secrets. Make sure to add restrictions to the related commands. For more information please refer to the following guide - <MFA guide>":
      "Al marcar esta casilla se permite ejecutar comandos que generan e imprimen secretos. Asegúrese de agregar restricciones a los comandos relacionados. Para obtener más información, consulte la siguiente guía: <MFA guide>",
    "Client Credentials Flow (Recommended)":
      "Flujo Client Credentials (recomendado)",
    "Client Secret (required for Client Credentials mode)":
      "Secreto de cliente (obligatorio para el modo Client Credentials)",
    "Close Mirrored Elasticsearch Incident":
      "Cerrar el incidente de Elasticsearch reflejado",
    "Close Mirrored XSOAR Incident":
      "Cerrar el incidente de XSOAR reflejado",
    "Comma-separated list of fields to fetch (the `_source` field is always included).":
      "Lista de campos que se van a recuperar, separados por comas (el campo `_source` siempre se incluye).",
    "Detection Alerts":
      "Alertas de detección",
    "Device Code Flow":
      "Flujo Device Code",
    "Elastic Cloud deployments:":
      "Implementaciones de Elastic Cloud:",
    "Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "Ejemplo: created_at.after(2020-11-11T09:16:44Z) o id.eq(537557694)",
    "Syntax: field.operator(operand) {and/or field.operator(operand)}":
      "Sintaxis: field.operator(operand) {and/or field.operator(operand)}",
    "Syntax: field.operator(operand) {and/or field.operator(operand)} Example: created_at.after(2020-11-11T09:16:44Z) or id.eq(537557694)":
      "Sintaxis: field.operator(operand) {and/or field.operator(operand)} Ejemplo: created_at.after(2020-11-11T09:16:44Z) o id.eq(537557694)",
    "Exception Lists & Items":
      "Listas de excepciones y elementos",
    "Exclude alerts while fetching policy events of type 'Message Alert' or 'System Alert'.":
      "Excluya las alertas al recuperar eventos de política de tipo 'Message Alert' o 'System Alert'.",
    "Fetch alerts for case":
      "Recuperar alertas del caso",
    "Fetch Cases":
      "Recuperar casos",
    "Fetch cases by Severity":
      "Recuperar casos por gravedad",
    "Fetch cases by Status":
      "Recuperar casos por estado",
    "Fetch incident types":
      "Tipos de incidente que se van a recuperar",
    "Fetch Security Alerts":
      "Recuperar alertas de seguridad",
    "Fetching security alerts requires:":
      "Para recuperar alertas de seguridad se necesita lo siguiente:",
    "field (DSL query). The index must follow one of these patterns:":
      "(consulta DSL). El índice debe seguir uno de estos patrones:",
    "Fields to Fetch":
      "Campos que se van a recuperar",
    "First fetch timestamp":
      "Marca de tiempo de la primera recuperación",
    "For further information about type mapping, see":
      "Para obtener más información sobre la asignación de tipos, consulte",
    "For information, see":
      "Para obtener información, consulte",
    "For more info about API Key management see":
      "Para obtener más información sobre la administración de claves de API, consulte",
    "For more info see":
      "Para obtener más información, consulte",
    "For more information about the Lucene syntax, see the link in the help section.":
      "Para obtener más información sobre la sintaxis de Lucene, consulte el enlace de la sección de ayuda.",
    "For more information see the link in the help section.":
      "Para obtener más información, consulte el enlace de la sección de ayuda.",
    "ID or Client ID":
      "ID o ID de cliente",
    "Key or Client Secret":
      "Clave o secreto de cliente",
    "Token or Tenant ID":
      "Token o ID de tenant",
    "Incident Mirroring Direction":
      "Dirección de reflejo de incidentes",
    "Index time field":
      "Campo de hora del índice",
    "Index to fetch incidents from":
      "Índice desde el que recuperar incidentes",
    "Kibana Integration":
      "Integración de Kibana",
    "Kibana Server URL":
      "URL del servidor de Kibana",
    "Kibana Spaces":
      "Espacios de Kibana",
    "Kibana Spaces (optional)":
      "Espacios de Kibana (opcional)",
    "Map JSON fields into labels":
      "Asignar campos JSON a etiquetas",
    "Max Fetch Incidents Returned":
      "Número máximo de incidentes recuperados devueltos",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Las integraciones de Microsoft (Graph y Azure) en Cortex utilizan aplicaciones de Entra ID para autenticarse con las API de Microsoft. Estas integraciones utilizan servicios de autenticación compatibles con los estándares OAuth 2.0 y OpenID Connect, que utilizan una aplicación para iniciar sesión o delegar la autenticación. Para obtener más información, consulte Microsoft identity platform overview.",
    "Mirroring is only available for Elasticsearch Security Alerts and Cases.":
      "El reflejo solo está disponible para Elasticsearch Security Alerts y Cases.",
    "Not all fields can be used for sorting in Elasticsearch. Sorting is only supported for fields of the following types:":
      "En Elasticsearch no todos los campos se pueden usar para ordenar. La ordenación solo se admite para campos de los siguientes tipos:",
    "Note: Depending on the authentication method that you use, the integration parameters might change.":
      "Nota: según el método de autenticación que utilice, los parámetros de la integración pueden cambiar.",
    "On-premises (self-managed) deployments:":
      "Implementaciones locales (autoadministradas):",
    "Operations covered":
      "Operaciones cubiertas",
    "Override Microsoft Entra ID Protection risk level":
      "Anular el nivel de riesgo de Microsoft Entra ID Protection",
    "POST / PUT / PATCH / DELETE — create, update, delete, and change-state commands":
      "POST / PUT / PATCH / DELETE: comandos de creación, actualización, eliminación y cambio de estado",
    "Privilege level":
      "Nivel de privilegio",
    "Query String":
      "Cadena de consulta",
    "Query String is queried using the Lucene syntax. For more information about the Lucene syntax see":
      "La cadena de consulta se consulta mediante la sintaxis de Lucene. Para obtener más información sobre la sintaxis de Lucene, consulte",
    "Query string uses the Lucene syntax.":
      "La cadena de consulta utiliza la sintaxis de Lucene.",
    "Query string uses the Lucene syntax. For more information about the Lucene syntax, see the link in the help section. The query will be used when fetching incidents. Index time field will be used as a filter in the query. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "La cadena de consulta utiliza la sintaxis de Lucene. Para obtener más información sobre la sintaxis de Lucene, consulte el enlace de la sección de ayuda. La consulta se utilizará al recuperar incidentes. El campo de hora del índice se utilizará como filtro en la consulta. El botón de prueba de la integración no comprueba completamente la validez de la recuperación de incidentes. Para verificar que la instancia está configurada correctamente para recuperar incidentes, ejecute el comando '!es-integration-health-check'.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string.":
      "Raw Query permite consultas DSL sin procesar y anulará la cadena de sintaxis de Lucene de 'Query String'.",
    "Raw Query allows raw DSL queries and will override the 'Query String' Lucene syntax string. Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes. For more information see the link in the help section. The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "Raw Query permite consultas DSL sin procesar y anulará la cadena de sintaxis de Lucene de 'Query String'. Los resultados no se filtrarán ni se ordenarán. Utilice parámetros adicionales en la consulta sin procesar para estos fines. Para obtener más información, consulte el enlace de la sección de ayuda. El botón de prueba de la integración no comprueba completamente la validez de la recuperación de incidentes. Para verificar que la instancia está configurada correctamente para recuperar incidentes, ejecute el comando '!es-integration-health-check'.",
    "Results will not be filtered or sorted. Use additional parameters in the raw query for these purposes.":
      "Los resultados no se filtrarán ni se ordenarán. Utilice parámetros adicionales en la consulta sin procesar para estos fines.",
    "The integration test button doesn't fully test the fetch incidents validity. To verify that the instance is set up correctly for fetching incidents, run the '!es-integration-health-check' command.":
      "El botón de prueba de la integración no comprueba completamente la validez de la recuperación de incidentes. Para verificar que la instancia está configurada correctamente para recuperar incidentes, ejecute el comando '!es-integration-health-check'.",
    "The query will be used when fetching incidents. Index time field will be used as a filter in the query.":
      "La consulta se utilizará al recuperar incidentes. El campo de hora del índice se utilizará como filtro en la consulta.",
    "Relevant only if the integration is running on Azure VM. If selected, authenticates based on the value provided for the Azure Managed Identities Client ID field. If no value is provided for the Azure Managed Identities Client ID field, authenticates based on the System Assigned Managed Identity. For additional information, see the Help tab.":
      "Solo es relevante si la integración se ejecuta en una máquina virtual de Azure. Si se selecciona, autentica según el valor proporcionado en el campo Azure Managed Identities Client ID. Si no se proporciona ningún valor en el campo Azure Managed Identities Client ID, autentica según la identidad administrada asignada por el sistema. Para obtener más información, consulte la pestaña Help.",
    "Required Kibana Privileges":
      "Privilegios de Kibana necesarios",
    "Select the authentication type and enter the appropriate credentials:":
      "Seleccione el tipo de autenticación e introduzca las credenciales correspondientes:",
    "Select the authentication type and enter the appropriate credentials: - Basic Auth: Enter Username and Password. - Bearer Auth: Enter Username and Password. - API Key Auth: Enter the API Key ID and API Key.":
      "Seleccione el tipo de autenticación e introduzca las credenciales correspondientes: - Basic Auth: introduzca el nombre de usuario y la contraseña. - Bearer Auth: introduzca el nombre de usuario y la contraseña. - API Key Auth: introduzca el ID de la clave de API y la clave de API.",
    "Select what type of Identity alert from MSGraph you want to ingest.":
      "Seleccione qué tipo de alerta de Identity de MSGraph desea ingerir.",
    "Server URL (e.g., https://graph.microsoft.com)":
      "URL del servidor (p. ej., https://graph.microsoft.com)",
    "Severity of the Cortex XSOAR/XSIAM issue to be created if Microsoft Entra ID Protection risk level override has been selected. Severity will be the same for all Microsoft Entra ID Protection alerts.":
      "Gravedad del problema de Cortex XSOAR/XSIAM que se creará si se ha seleccionado la anulación del nivel de riesgo de Microsoft Entra ID Protection. La gravedad será la misma para todas las alertas de Microsoft Entra ID Protection.",
    "Simple-Date - A plain date string. You must specify the format in which the date is stored. For more information about time formatting, see":
      "Simple-Date: una cadena de fecha simple. Debe especificar el formato en el que se almacena la fecha. Para obtener más información sobre el formato de hora, consulte",
    "Suppress Errors for Non Found Groups":
      "Suprimir errores de grupos no encontrados",
    "Suppress Errors for Non Found Users":
      "Suprimir errores de usuarios no encontrados",
    "Tenant ID (required for Client Credentials mode)":
      "ID de tenant (obligatorio para el modo Client Credentials)",
    "This integration includes a set of":
      "Esta integración incluye un conjunto de",
    "that let you interact with Kibana directly from Cortex — no separate Kibana integration required.":
      "que le permiten interactuar con Kibana directamente desde Cortex, sin necesidad de una integración de Kibana independiente.",
    "The “Test” button does not fully validate the fetch incidents functionality. To ensure the instance is correctly fetching incidents, run the":
      "El botón [Test] no valida completamente la función de recuperación de incidentes. Para asegurarse de que la instancia recupera correctamente los incidentes, ejecute el comando",
    "The case severities to fetch. If none is chosen, all severity levels will be returned. Relevant only for incident type Elasticsearch Case.":
      "Las gravedades de los casos que se van a recuperar. Si no se elige ninguna, se devolverán todos los niveles de gravedad. Solo es relevante para el tipo de incidente Elasticsearch Case.",
    "The case statuses to fetch. If none is chosen, in-progress and open will be returned. Relevant only for incident type Elasticsearch Case.":
      "Los estados de los casos que se van a recuperar. Si no se elige ninguno, se devolverán in-progress y open. Solo es relevante para el tipo de incidente Elasticsearch Case.",
    "The Elasticsearch server to which the integration connects. Ensure that the URL includes the correct Elasticsearch port. The default port for Elasticsearch v7 and below is 9200. Use the Server URL for on-premises deployments.":
      "El servidor de Elasticsearch al que se conecta la integración. Asegúrese de que la URL incluya el puerto correcto de Elasticsearch. El puerto predeterminado de Elasticsearch v7 y anteriores es 9200. Utilice el Server URL para implementaciones locales.",
    "The Elasticsearch v2 integration supports Elasticsearch 6.0.0 and later.":
      "La integración de Elasticsearch v2 admite Elasticsearch 6.0.0 y versiones posteriores.",
    "The maximum number of incidents per request from Entra ID. Default is 50.":
      "El número máximo de incidentes por solicitud de Entra ID. El valor predeterminado es 50.",
    "The maximum number of results per fetch":
      "El número máximo de resultados por recuperación",
    "The mirroring direction. Mirroring works only for incident types Elasticsearch Security Alert and Elasticsearch Case.":
      "La dirección del reflejo. El reflejo solo funciona para los tipos de incidente Elasticsearch Security Alert y Elasticsearch Case.",
    "The time field used for sorting and limiting results. If using a nested field, separate field names with dot notation.":
      "El campo de hora utilizado para ordenar y limitar los resultados. Si utiliza un campo anidado, separe los nombres de campo con notación de puntos.",
    "The time range to consider for the initial data fetch in the format <number> <unit>. For example, 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours, etc.":
      "El intervalo de tiempo que se considerará para la recuperación inicial de datos, con el formato <number> <unit>. Por ejemplo, 1 hour, 2 hours, 6 hours, 12 hours, 24 hours, 48 hours, etc.",
    "The time range to consider for the initial data fetch. (<number> <unit>, e.g., 2 minutes, 2 hours, 2 days, 2 months, 2 years). Default is 3 days.":
      "El intervalo de tiempo que se considerará para la recuperación inicial de datos. (<number> <unit>, p. ej., 2 minutes, 2 hours, 2 days, 2 months, 2 years). El valor predeterminado es 3 days.",
    "The type of incident to fetch from Elasticsearch (Security Alert, Case, or other entity).":
      "El tipo de incidente que se recuperará de Elasticsearch (Security Alert, Case u otra entidad).",
    "There are two application authentication methods available:":
      "Hay dos métodos de autenticación de aplicaciones disponibles:",
    "There are two different authentication methods for self-deployed configuration:":
      "Hay dos métodos de autenticación diferentes para la configuración autoimplementada:",
    "This integration was integrated and tested with versions 6.6.2, 7.3, 8.4.1 of Elasticsearch.":
      "Esta integración se integró y probó con las versiones 6.6.2, 7.3 y 8.4.1 de Elasticsearch.",
    "Time field type":
      "Tipo de campo de hora",
    "Timestamp-Milliseconds - A numeric value representing the number of milliseconds since the Unix epoch. Example: ‘1572164838123’":
      "Timestamp-Milliseconds: un valor numérico que representa el número de milisegundos transcurridos desde la época Unix. Ejemplo: ‘1572164838123’",
    "Timestamp-Second - A numeric value representing the number of seconds since the Unix epoch (00:00:00 UTC on 1 January 1970). Example: ‘1572164838’":
      "Timestamp-Second: un valor numérico que representa el número de segundos transcurridos desde la época Unix (00:00:00 UTC del 1 de enero de 1970). Ejemplo: ‘1572164838’",
    "To allow access to Entra ID Groups, an administrator has to approve the Cortex app using an admin consent flow, by clicking this":
      "Para permitir el acceso a los grupos de Entra ID, un administrador debe aprobar la aplicación Cortex mediante un flujo de consentimiento del administrador, haciendo clic en este enlace:",
    "To connect to Microsoft Graph Identity & Access using either Cortex Graph app or the Self-Deployed Graph app:":
      "Para conectarse a Microsoft Graph Identity & Access mediante la aplicación Cortex Graph o la aplicación Graph autoimplementada:",
    "To connect to Microsoft Graph Services using either the Cortex Azure app or the self-deployed Azure app:":
      "Para conectarse a Microsoft Graph Services mediante la aplicación Cortex Azure o la aplicación Azure autoimplementada:",
    "To use a self-configured Azure application, you need to add a new Azure app registration in the Azure portal. To add the registration, see this":
      "Para usar una aplicación de Azure configurada por usted mismo, debe agregar un nuevo registro de aplicación de Azure en el portal de Azure. Para agregar el registro, consulte este",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration.":
      "Para usar una aplicación de Azure configurada por usted mismo, debe agregar un nuevo registro de aplicación de Azure en el portal de Azure. Para agregar el registro, consulte este",
    "To use Microsoft Graph Services, you need to configure authentication. There are three authentication methods available:":
      "Para usar Microsoft Graph Services, debe configurar la autenticación. Hay tres métodos de autenticación disponibles:",
    "To use the Cortex Azure application, use the default application ID (597c0375-766f-4e6d-ad2a-f48117044ac5).":
      "Para usar la aplicación Cortex Azure, utilice el ID de aplicación predeterminado (597c0375-766f-4e6d-ad2a-f48117044ac5).",
    "To use the Cortex Azure application, use the default application ID (6b071e63-f701-454b-9e54-ede4c96483e6).":
      "Para usar la aplicación Cortex Azure, utilice el ID de aplicación predeterminado (6b071e63-f701-454b-9e54-ede4c96483e6).",
    "To use this integration, you need to configure authentication. There are three authentication methods available:":
      "Para usar esta integración, debe configurar la autenticación. Hay tres métodos de autenticación disponibles:",
    "Type of authentication - could be Client Credentials Authorization Flow (recommended) or Device Flow":
      "Tipo de autenticación: puede ser Client Credentials Authorization Flow (recomendado) o Device Flow",
    "Use a self-deployed Azure application and authenticate using the Client Credentials flow.":
      "Utilice una aplicación de Azure autoimplementada y autentíquese mediante el flujo Client Credentials.",
    "Use Client Credentials Authorization Flow":
      "Usar Client Credentials Authorization Flow",
    "Use this option when required to customize the URL to the Microsoft Graph User endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Utilice esta opción cuando necesite personalizar la URL del punto de conexión de Microsoft Graph User. Puede encontrar más información aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Value Lists":
      "Listas de valores",
    "We recommend using the Client Credentials flow.":
      "Le recomendamos que utilice el flujo Client Credentials.",
    "What you can do with Kibana commands":
      "Qué puede hacer con los comandos de Kibana",
    "When selecting the Custom option, the Server URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Al seleccionar la opción Custom, se debe rellenar el parámetro Server URL. Puede encontrar más información sobre las nubes nacionales aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When using the Authorization Code flow, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation.":
      "Al usar el flujo Authorization Code, asegúrese de que el usuario con el que se autentica tenga los roles pertinentes en Azure AD para ejecutar la operación.",
    "Whether closing the Cortex incident is mirrored in Elasticsearch.":
      "Indica si el cierre del incidente de Cortex se refleja en Elasticsearch.",
    "Whether closing the Elasticsearch alert or case is mirrored in Cortex.":
      "Indica si el cierre de la alerta o del caso de Elasticsearch se refleja en Cortex.",
    "Whether to fetch alerts associated with each Elasticsearch Case. You must have read privileges for the Cases feature in the Management, Observability, or Security section of the Kibana feature privileges.":
      "Indica si se deben recuperar las alertas asociadas a cada Elasticsearch Case. Debe tener privilegios de lectura para la función Cases en la sección Management, Observability o Security de los privilegios de función de Kibana.",
    "You can authenticate either by Entra ID applications or by Azure Managed Identities.":
      "Puede autenticarse mediante aplicaciones de Entra ID o identidades administradas de Azure.",
    "You need to grant Cortex authorization to access Entra ID Users.":
      "Debe conceder autorización a Cortex para acceder a los usuarios de Entra ID.",

    // --- Batch: Elasticsearch v2 / Kibana URL setup list: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Kibana URL":
      "URL de Kibana",
    "parameter to the address of your Kibana server, including the port if it is not the default (e.g.":
      "en la dirección de su servidor de Kibana, incluido el puerto si no es el predeterminado (p. ej.,",
    "You can leave":
      "Puede dejar vacío el parámetro",
    "empty. The URL is then derived automatically from the":
      ". En ese caso, la URL se deriva automáticamente de",
    ", by replacing the":
      ", sustituyendo el",
    "segment of the hostname with":
      "segmento del nombre de host por",
    "becomes":
      "se convierte en",
    "When":
      "Cuando el parámetro",
    "is set, it always takes precedence over the derivation from the":
      "está definido, siempre tiene prioridad sobre la derivación a partir de",

    // --- Batch: Microsoft Graph / Azure Managed Identity setup steps: fragments with a known neighbouring structure (follow-up to the 07:23 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use the":
      "Para usar el comando",
    "command, you must use with the Authorization Code flow.":
      "debe utilizar el flujo Authorization Code.",
    "Select the":
      "Marque la casilla",
    "checkbox and leave the":
      "y deje el campo",
    "field empty.":
      "vacío.",

    // --- Batch: ExtraHop Reveal(x) / Flashpoint Ignite / F5 Silverline / FireEye HX / Kenna / McAfee / Envoy / Microsoft integration docs and parameter tooltips (07:55 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ". Each API call fetches a maximum of 200 detection events.":
      ". Cada llamada a la API recupera un máximo de 200 eventos de detección.",
    "Advanced Filter":
      "Filtro avanzado",
    "api_admin role.":
      "rol api_admin.",
    "api_analyst role.":
      "rol api_analyst.",
    "Applies a filter to the list of detections based on a JSON-specific query.":
      "Aplica un filtro a la lista de detecciones basado en una consulta específica de JSON.",
    "Applies a filter to the list of detections based on a JSON-specific query. Example for detections: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead. For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at https://docs.extrahop.com/current/rest-api-guide/":
      "Aplica un filtro a la lista de detecciones basado en una consulta específica de JSON. Ejemplo para detecciones: { \"categories\": [\"sec.attack\"], \"risk_score_min\": 51 } Si no se especifican categories ni category, categories se establecerá en [\"sec.attack\"]. La API ha dejado obsoleto el campo category, por lo que debe utilizar el campo categories. Para obtener una referencia completa de los campos de filtro de detecciones de ExtraHop, consulte la documentación de la API REST de ExtraHop en https://docs.extrahop.com/current/rest-api-guide/",
    "Applies a filter to the list of detections or metrics based on a JSON-specific query.":
      "Aplica un filtro a la lista de detecciones o métricas basado en una consulta específica de JSON.",
    "As the F5 Silverline API does not support fetch incidents for now, we retrieve alerts via a log collector.":
      "Como la API de F5 Silverline no admite por ahora la recuperación de incidentes, recuperamos las alertas mediante un recopilador de registros.",
    "Attack Types":
      "Tipos de ataque",
    "Backfill vulnerabilities by providing date or relative timestamp.":
      "Rellene vulnerabilidades anteriores indicando una fecha o una marca de tiempo relativa.",
    "Backfill vulnerabilities by providing date or relative timestamp. Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Default: 3 days.":
      "Rellene vulnerabilidades anteriores indicando una fecha o una marca de tiempo relativa. Formatos admitidos: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Valor predeterminado: 3 days.",
    "Formats accepted: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "Formatos admitidos: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Default: 3 days.":
      "Valor predeterminado: 3 days.",
    "Click on the":
      "Haga clic en el botón",
    "button and paste it into the “API Key” parameter. Then, click on the":
      "y péguelo en el parámetro “API Key”. A continuación, haga clic en el botón",
    "button to save the generated token and close the token generation page.":
      "para guardar el token generado y cerrar la página de generación de tokens.",
    "Click on your profile icon on the top right and select the":
      "Haga clic en su icono de perfil en la esquina superior derecha y seleccione la opción",
    "option from the dropdown. Alternatively, click on":
      "en el menú desplegable. También puede hacer clic en",
    "to be taken directly to the Generate Token page.":
      "para ir directamente a la página Generate Token.",
    "Enter the required details (i.e., Token Name, Ignite Username) and click on":
      "Introduzca los detalles necesarios (es decir, Token Name, Ignite Username) y haga clic en",
    "If you already have an API key you can find it there.":
      "Si ya tiene una clave de API, puede encontrarla allí.",
    "If you do not have an API Key, generate one by clicking":
      "Si no tiene una clave de API, genere una haciendo clic en",
    "Login/Register at":
      "Inicie sesión o regístrese en",
    "Configure an API account on Flashpoint Ignite":
      "Configurar una cuenta de API en Flashpoint Ignite",
    "Configure an instance for ExtraHop Reveal(x)":
      "Configurar una instancia para ExtraHop Reveal(x)",
    "Due to a known limitation, clicking the":
      "Debido a una limitación conocida, hacer clic varias veces seguidas en el botón",
    "button several times in quick succession may result in an “Unauthorized” error, even after a successful result was initially returned. It is enough to receive one success message to verify that the configuration is correct. “Unauthorized” error messages received from repeated clicking of the instance configuration":
      "puede provocar un error “Unauthorized”, incluso después de haber obtenido inicialmente un resultado correcto. Basta con recibir un mensaje de éxito para verificar que la configuración es correcta. Los mensajes de error “Unauthorized” recibidos al hacer clic repetidamente en el botón de configuración de la instancia",
    "button do not affect the validity of the instance if the initial response was successful.":
      "no afectan a la validez de la instancia si la respuesta inicial fue correcta.",
    "Complete the following configuration options:":
      "Complete las siguientes opciones de configuración:",
    "Connect to McAfee TIE using the McAfee DXL client.":
      "Conéctese a McAfee TIE mediante el cliente McAfee DXL.",
    "Create relationships between indicators as part of Enrichment.":
      "Cree relaciones entre indicadores como parte del enriquecimiento.",
    "CWE IDs":
      "ID de CWE",
    "Deprecated. Use McAfee ePO v2 instead.":
      "Obsoleto. Utilice McAfee ePO v2 en su lugar.",
    "Deprecated. Use McAfee Threat Intelligence Exchange V2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración McAfee Threat Intelligence Exchange V2.",
    "Deprecated. Use the Kafka v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Kafka v2.",
    "Deprecated. Use the Mattermost v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Mattermost v2.",
    "Deprecated. Use the McAfee ESM v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración McAfee ESM v2.",
    "Enter a unique":
      "Introduzca un",
    "for the instance.":
      "único para la instancia.",
    "Envoy Integration consists of a set of API endpoints that allow customers to automate provisioning of users.":
      "La integración de Envoy consta de un conjunto de puntos de conexión de API que permiten a los clientes automatizar el aprovisionamiento de usuarios.",
    "Example for detections:":
      "Ejemplo para detecciones:",
    "Fetch limit":
      "Límite de recuperación",
    "Fetching F5 Silverline Alerts":
      "Recuperación de alertas de F5 Silverline",
    "Filter by associated product names (case-insensitive).":
      "Filtre por nombres de producto asociados (sin distinguir mayúsculas de minúsculas).",
    "Filter by associated vendor names (case-insensitive).":
      "Filtre por nombres de proveedor asociados (sin distinguir mayúsculas de minúsculas).",
    "Filter by Attack type classification.":
      "Filtre por clasificación del tipo de ataque.",
    "Filter by CWE IDs assigned by Mitre.":
      "Filtre por los ID de CWE asignados por Mitre.",
    "Filter by location type classification.":
      "Filtre por clasificación del tipo de ubicación.",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Filtre por el límite inferior de la puntuación CVSS v2. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 7.0",
    "Filter by lower limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Filtre por el límite inferior de la puntuación CVSS v2. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 7.0 Nota: el valor debe ser un número de coma flotante entre 0 y 10.",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Filtre por el límite inferior de la puntuación CVSS v3. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 7.0",
    "Filter by lower limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Filtre por el límite inferior de la puntuación CVSS v3. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 7.0 Nota: el valor debe ser un número de coma flotante entre 0 y 10.",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0":
      "Filtre por el límite inferior de la puntuación CVSS v4. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 7.0",
    "Filter by lower limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 7.0 Note: Value must be a float between 0 and 10.":
      "Filtre por el límite inferior de la puntuación CVSS v4. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 7.0 Nota: el valor debe ser un número de coma flotante entre 0 y 10.",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Filtre por el límite superior de la puntuación CVSS v2. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 10.0",
    "Filter by upper limit of the CVSS v2 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Filtre por el límite superior de la puntuación CVSS v2. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 10.0 Nota: el valor debe ser un número de coma flotante entre 0 y 10.",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Filtre por el límite superior de la puntuación CVSS v3. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 10.0",
    "Filter by upper limit of the CVSS v3 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Filtre por el límite superior de la puntuación CVSS v3. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 10.0 Nota: el valor debe ser un número de coma flotante entre 0 y 10.",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0":
      "Filtre por el límite superior de la puntuación CVSS v4. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 10.0",
    "Filter by upper limit of the CVSS v4 score. Prioritizes Flashpoint generated scores when possible. Example value 10.0 Note: Value must be a float between 0 and 10.":
      "Filtre por el límite superior de la puntuación CVSS v4. Prioriza las puntuaciones generadas por Flashpoint cuando es posible. Valor de ejemplo: 10.0 Nota: el valor debe ser un número de coma flotante entre 0 y 10.",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5":
      "Filtre por el límite inferior de la puntuación EPSS v3. Valor de ejemplo: 0.5",
    "Filter by lower limit of the EPSS v3 score. Example value 0.5 Note: Value must be a float between 0 and 1.":
      "Filtre por el límite inferior de la puntuación EPSS v3. Valor de ejemplo: 0.5 Nota: el valor debe ser un número de coma flotante entre 0 y 1.",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0":
      "Filtre por el límite superior de la puntuación EPSS v3. Valor de ejemplo: 1.0",
    "Filter by upper limit of the EPSS v3 score. Example value 1.0 Note: Value must be a float between 0 and 1.":
      "Filtre por el límite superior de la puntuación EPSS v3. Valor de ejemplo: 1.0 Nota: el valor debe ser un número de coma flotante entre 0 y 1.",
    "Note: Value must be a float between 0 and 1.":
      "Nota: el valor debe ser un número de coma flotante entre 0 y 1.",
    "Note: Value must be a float between 0 and 10.":
      "Nota: el valor debe ser un número de coma flotante entre 0 y 10.",
    "Filter by Ransomware score.":
      "Filtre por puntuación de ransomware.",
    "Filter by reference types.":
      "Filtre por tipos de referencia.",
    "Filter by reference values. Use with Reference Types to filter by specific reference type.":
      "Filtre por valores de referencia. Utilícelo junto con Reference Types para filtrar por un tipo de referencia específico.",
    "Filter by severity, which is calculated based on CVSS values.":
      "Filtre por gravedad, que se calcula a partir de los valores CVSS.",
    "Filter by Tags":
      "Filtrar por etiquetas",
    "Filter vulnerabilities by tags.":
      "Filtre las vulnerabilidades por etiquetas.",
    "FireEye Endpoint Security is an integrated solution that detects what others miss and protects endpoints against known and unknown threats. The HX Cortex integration provides access to information about endpoints, acquisitions, alerts, indicators, and containment. Customers can extract critical data and effectively operate a security operations automated playbook":
      "FireEye Endpoint Security es una solución integrada que detecta lo que otros pasan por alto y protege los endpoints frente a amenazas conocidas y desconocidas. La integración HX Cortex proporciona acceso a información sobre endpoints, adquisiciones, alertas, indicadores y contención. Los clientes pueden extraer datos críticos y operar de forma eficaz un playbook automatizado de operaciones de seguridad",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 3 days)":
      "Marca de tiempo de la primera recuperación (<number> <time unit>, p. ej., 12 hours, 3 days)",
    "For a complete reference to the Extrahop detections filter fields, please refer to the ExtraHop REST API documentation at":
      "Para obtener una referencia completa de los campos de filtro de detecciones de ExtraHop, consulte la documentación de la API REST de ExtraHop en",
    "For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "Por ejemplo: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "If configuring an instance for ExtraHop Reveal(x) 360, select":
      "Si configura una instancia para ExtraHop Reveal(x) 360, seleccione",
    "If configuring an instance for ExtraHop Reveal(x) Enterprise, unselect":
      "Si configura una instancia para ExtraHop Reveal(x) Enterprise, anule la selección de",
    "If the categories and category are not specified, then categories will be set to [\"sec.attack\"]. The category field is deprecated by the API, so please use the categories field instead.":
      "Si no se especifican categories ni category, categories se establecerá en [\"sec.attack\"]. La API ha dejado obsoleto el campo category, por lo que debe utilizar el campo categories.",
    "In F5 Silverline portal, go to":
      "En el portal de F5 Silverline, vaya a",
    "In order to fetch alerts, follow the instructions":
      "Para recuperar alertas, siga las instrucciones",
    "Indicates whether to allow connections without verifying SSL certificate's validity.":
      "Indica si se permiten conexiones sin verificar la validez del certificado SSL.",
    "Indicates whether to use XSOAR's system proxy settings to connect to the API.":
      "Indica si se utiliza la configuración de proxy del sistema de XSOAR para conectarse a la API.",
    "Info level for fetched alerts":
      "Nivel de información de las alertas recuperadas",
    "Integrated advanced threat detection: Enhancing protection from network edge to endpoint.":
      "Detección avanzada de amenazas integrada: mejora la protección desde el perímetro de la red hasta el endpoint.",
    "Integration instance settings":
      "Configuración de la instancia de integración",
    "Specifies the type of incident to be created for detection events ingested by this instance if a":
      "Especifica el tipo de incidente que se creará para los eventos de detección ingeridos por esta instancia (si no se especifica un",
    "is not specified.":
      ").",
    "Known Limitations":
      "Limitaciones conocidas",
    "KOI is an endpoint security platform that provides visibility and control over browser extensions, SaaS applications, and web-based threats.":
      "KOI es una plataforma de seguridad de endpoints que proporciona visibilidad y control sobre las extensiones del navegador, las aplicaciones SaaS y las amenazas basadas en la web.",
    "Locations":
      "Ubicaciones",
    "Magnet Automate is an orchestration and automation platform that accelerates your digital forensics investigations by automating workflows and integrating with various forensic tools.":
      "Magnet Automate es una plataforma de orquestación y automatización que acelera sus investigaciones forenses digitales mediante la automatización de flujos de trabajo y la integración con diversas herramientas forenses.",
    "Max incidents to fetch":
      "Número máximo de incidentes que se van a recuperar",
    "Maximum CVSS v2 Score":
      "Puntuación CVSS v2 máxima",
    "Maximum CVSS v3 Score":
      "Puntuación CVSS v3 máxima",
    "Maximum CVSS v4 Score":
      "Puntuación CVSS v4 máxima",
    "Maximum EPSS v3 Score":
      "Puntuación EPSS v3 máxima",
    "Minimum CVSS v2 Score":
      "Puntuación CVSS v2 mínima",
    "Minimum CVSS v3 Score":
      "Puntuación CVSS v3 mínima",
    "Minimum CVSS v4 Score":
      "Puntuación CVSS v4 mínima",
    "Minimum EPSS v3 Score":
      "Puntuación EPSS v3 mínima",
    "Microsoft 365 Defender is a unified pre- and post-breach enterprise defense suite that natively coordinates detection, prevention, investigation, and response across endpoints, identities, email, and applications to provide integrated protection against sophisticated attacks.":
      "Microsoft 365 Defender es un conjunto de defensa empresarial unificado para antes y después de una brecha que coordina de forma nativa la detección, la prevención, la investigación y la respuesta en endpoints, identidades, correo electrónico y aplicaciones para proporcionar protección integrada frente a ataques sofisticados.",
    "Microsoft Defender for Endpoint (previously Microsoft Defender Advanced Threat Protection (ATP)) is a unified platform for preventative protection, post-breach detection, automated investigation, and response.":
      "Microsoft Defender for Endpoint (anteriormente Microsoft Defender Advanced Threat Protection (ATP)) es una plataforma unificada para la protección preventiva, la detección posterior a una brecha, la investigación automatizada y la respuesta.",
    "Microsoft Graph grants Cortex authorized access to a user's Microsoft Outlook mail data in a personal account or organization account.":
      "Microsoft Graph concede a Cortex acceso autorizado a los datos de correo de Microsoft Outlook de un usuario en una cuenta personal o de organización.",
    "Microsoft Intune is a Microsoft cloud-based management solution that provides for mobile device and operating system management.":
      "Microsoft Intune es una solución de administración basada en la nube de Microsoft que permite administrar dispositivos móviles y sistemas operativos.",
    "On Cloud":
      "En la nube",
    "Product Names":
      "Nombres de producto",
    "Vendor Names":
      "Nombres de proveedor",
    "Ransomware Score":
      "Puntuación de ransomware",
    "Reference Types":
      "Tipos de referencia",
    "Reference Values":
      "Valores de referencia",
    "Provides the tags to be added to the indicators. Supports CSV values.":
      "Proporciona las etiquetas que se agregarán a los indicadores. Admite valores CSV.",
    "Select if the instance connects to an ExtraHop Reveal(x) 360 system. Leave unselected if connecting to ExtraHop Reveal(x) Enterprise. Default value is false.":
      "Seleccione esta opción si la instancia se conecta a un sistema ExtraHop Reveal(x) 360. Déjela sin seleccionar si se conecta a ExtraHop Reveal(x) Enterprise. El valor predeterminado es false.",
    "Select to disable running commands through the Cortex CLI on this instance of the integration.":
      "Seleccione esta opción para deshabilitar la ejecución de comandos mediante Cortex CLI en esta instancia de la integración.",
    "Select to enable this instance to fetch detection events. Otherwise, select":
      "Seleccione esta opción para que esta instancia recupere eventos de detección. De lo contrario, seleccione",
    "Send email notifications to users":
      "Enviar notificaciones por correo electrónico a los usuarios",
    "Send emails implemented in Python with embedded image support.":
      "Envío de correos electrónicos implementado en Python con compatibilidad con imágenes incrustadas.",
    "Send messages and notifications to your team members.":
      "Envíe mensajes y notificaciones a los miembros de su equipo.",
    "Server URL (e.g. https://192.168.0.1:3000)":
      "URL del servidor (p. ej., https://192.168.0.1:3000)",
    "Server URL (e.g., https://192.168.0.1:3000)":
      "URL del servidor (p. ej., https://192.168.0.1:3000)",
    "Server URL to connect to Flashpoint Ignite.":
      "URL del servidor para conectarse a Flashpoint Ignite.",
    "Specifies how detection events ingested by this instance are mapped to Cortex incident fields.":
      "Especifica cómo se asignan los eventos de detección ingeridos por esta instancia a los campos de incidente de Cortex.",
    "Specifies how often the instance fetches detection events. Because each API call fetches a maximum of 200 detection events, we recommend specifying one minute intervals to fetch all detection events.":
      "Especifica con qué frecuencia la instancia recupera eventos de detección. Dado que cada llamada a la API recupera un máximo de 200 eventos de detección, se recomienda especificar intervalos de un minuto para recuperar todos los eventos de detección.",
    "Specifies the beginning timestamp from which to start fetching detection events.":
      "Especifica la marca de tiempo inicial desde la que se empezarán a recuperar los eventos de detección.",
    "Specifies the level of logging to enable for this instance of the integration.":
      "Especifica el nivel de registro que se habilitará para esta instancia de la integración.",
    "Specifies the type of incident to be created for detection events ingested by this instance.":
      "Especifica el tipo de incidente que se creará para los eventos de detección ingeridos por esta instancia.",
    "Specifies whether to allow connections without verifying SSL certificate’s validity.":
      "Especifica si se permiten conexiones sin verificar la validez del certificado SSL.",
    "Specifies whether to run the instance of the integration on a single engine.":
      "Especifica si la instancia de la integración se ejecuta en un único motor.",
    "Specifies whether to use XSOAR system proxy settings to connect to the API.":
      "Especifica si se utiliza la configuración de proxy del sistema de XSOAR para conectarse a la API.",
    "Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ":
      "Formatos admitidos: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ",
    "The API key required for authentication if connecting to ExtraHop Reveal(x) Enterprise.":
      "La clave de API necesaria para la autenticación si se conecta a ExtraHop Reveal(x) Enterprise.",
    "The API key to use for the connection.":
      "La clave de API que se utilizará para la conexión.",
    "The client ID generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "El ID de cliente generado en su sistema ExtraHop que se necesita para la autenticación si se conecta a ExtraHop Reveal(x) 360.",
    "The client secret generated on your ExtraHop system that is required for authentication if connecting to ExtraHop Reveal(x) 360.":
      "El secreto de cliente generado en su sistema ExtraHop que se necesita para la autenticación si se conecta a ExtraHop Reveal(x) 360.",
    "The Microsoft Management Activity API integration enables you to subscribe or unsubscribe to different audits, receive their content, and fetch new content as incidents.":
      "La integración de Microsoft Management Activity API permite suscribirse a distintas auditorías o cancelar la suscripción, recibir su contenido y recuperar contenido nuevo como incidentes.",
    "The URL of the ExtraHop system this instance will connect to.":
      "La URL del sistema ExtraHop al que se conectará esta instancia.",
    "The URL of your FireEye account.":
      "La URL de su cuenta de FireEye.",
    "The UTC date or relative timestamp from where to start fetching incidents.":
      "La fecha UTC o la marca de tiempo relativa desde la que se empezarán a recuperar incidentes.",
    "The UTC date or relative timestamp from where to start fetching incidents. Supported formats: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ For example: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z":
      "La fecha UTC o la marca de tiempo relativa desde la que se empezarán a recuperar incidentes. Formatos admitidos: N minutes, N hours, N days, N weeks, N months, N years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ Por ejemplo: 10 minutes, 5 hours, 8 days, 2 weeks, 8 months, 2021-12-31, 01 Mar 2021, 01 Feb 2021 04:45:33, 2022-04-17T14:05:44Z",
    "There are two types of permissions":
      "Hay dos tipos de permisos",
    "This integration enables using Elastic Security for SIEM for security operations management and searching Elastic logs. This pack is to be used in combination with the Elasticsearch v2 integration.":
      "Esta integración permite usar Elastic Security for SIEM para la administración de operaciones de seguridad y la búsqueda de registros de Elastic. Este paquete debe utilizarse junto con la integración de Elasticsearch v2.",
    "To configure an instance of F5 Silverline, you need to obtain the following information.":
      "Para configurar una instancia de F5 Silverline, debe obtener la siguiente información.",
    "To configure the integration, enter your credentials in the following fields:":
      "Para configurar la integración, introduzca sus credenciales en los siguientes campos:",
    "To set up an instance, you need to add the following:":
      "Para configurar una instancia, debe agregar lo siguiente:",
    "Unified gateway to security insights - all from a unified Microsoft Graph Security API.":
      "Puerta de enlace unificada a la información de seguridad, todo desde una API unificada de Microsoft Graph Security.",
    "Use the integration to get logs from the O365 service.":
      "Utilice la integración para obtener registros del servicio O365.",
    "Use the Kenna v2 integration to search and update vulnerabilities, schedule a run connector, and manage tags and attributes.":
      "Utilice la integración Kenna v2 para buscar y actualizar vulnerabilidades, programar la ejecución de un conector y administrar etiquetas y atributos.",
    "Use the Lastline v2 integration to provide threat analysts and incident response teams with the advanced malware isolation and inspection environment needed to safely execute advanced malware samples, and understand their behavior.":
      "Utilice la integración Lastline v2 para proporcionar a los analistas de amenazas y a los equipos de respuesta a incidentes el entorno avanzado de aislamiento e inspección de malware necesario para ejecutar de forma segura muestras de malware avanzado y comprender su comportamiento.",
    "Use the Microsoft Graph API integration to interact with Microsoft APIs that do not have dedicated integrations in Cortex, for example, Mail Single-User, etc.":
      "Utilice la integración Microsoft Graph API para interactuar con las API de Microsoft que no tienen integraciones específicas en Cortex, por ejemplo, Mail Single-User, etc.",
    "Use the Microsoft Search API in Microsoft Graph to search content stored in OneDrive or SharePoint: files, folders, lists, list items, or sites.":
      "Utilice Microsoft Search API en Microsoft Graph para buscar contenido almacenado en OneDrive o SharePoint: archivos, carpetas, listas, elementos de lista o sitios.",
    "Use the MITRE ATT&CK® feed to fetch MITRE’s Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) content. MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. The ATT&CK knowledge base is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community.":
      "Utilice el feed de MITRE ATT&CK® para recuperar el contenido de Adversarial Tactics, Techniques, and Common Knowledge (ATT&CK®) de MITRE. MITRE ATT&CK es una base de conocimiento de acceso global sobre tácticas y técnicas de adversarios basada en observaciones del mundo real. La base de conocimiento ATT&CK se utiliza como base para el desarrollo de modelos y metodologías de amenazas específicos en el sector privado, en el gobierno y en la comunidad de productos y servicios de ciberseguridad.",
    "User Name and Password":
      "Nombre de usuario y contraseña",
    "When you have api_analyst permissions, you cannot approve a containment for the host.":
      "Cuando tiene permisos api_analyst, no puede aprobar la contención de un host.",
    "You can use with fireeye-hx-host-containment command for sending a containment request.":
      "Puede utilizarlo con el comando fireeye-hx-host-containment para enviar una solicitud de contención.",
    "Your F5 Silverline server URL":
      "URL de su servidor de F5 Silverline",
    "Your server URL":
      "URL de su servidor",
    "Your username and password when logging in to your FireEye account.":
      "Su nombre de usuario y contraseña al iniciar sesión en su cuenta de FireEye.",

    // --- Batch: GCP service account setup / Freshservice / Forcepoint / FortiGate / Glean integration docs and parameters (08:29 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    ", add the users or groups that are allowed to use and manage the service account.":
      ", agregue los usuarios o grupos que pueden usar y administrar la cuenta de servicio.",
    ", select the IAM roles to grant to the service account.":
      ", seleccione los roles de IAM que se concederán a la cuenta de servicio.",
    ", then click":
      ", y luego haga clic en",
    ". Note that you must have permission to add members to the organization or project for the":
      ". Tenga en cuenta que debe tener permiso para agregar miembros a la organización o al proyecto para",
    "(Account username, Password)":
      "(nombre de usuario de la cuenta, contraseña)",
    "A list of the required permissions for every command can be found below.":
      "A continuación se incluye una lista de los permisos necesarios para cada comando.",
    "A new API key will be generated for you. Copy the generated API key and keep it secure.":
      "Se generará una nueva clave de API. Copie la clave de API generada y manténgala en un lugar seguro.",
    "Account username":
      "Nombre de usuario de la cuenta",
    "Add a member and roles to a project or organization. In the":
      "Agregue un miembro y roles a un proyecto o a una organización.",
    "Add a title, description, and ID and ensure the role is marked for General Availability.":
      "Agregue un título, una descripción y un ID, y asegúrese de que el rol esté marcado como General Availability.",
    "Add the required permissions by clicking":
      "Agregue los permisos necesarios haciendo clic en",
    "After choosing an authentication method, click":
      "Después de elegir un método de autenticación, haga clic en",
    "At the top-left, click the navigation menu >":
      "En la parte superior izquierda, haga clic en el menú de navegación >",
    "Check the Version 8.5.5 or later flag to switch to use these newer api endpoints.":
      "Marque la opción Version 8.5.5 or later para cambiar a estos puntos de conexión de API más recientes.",
    "Click on your profile icon in the top-right corner and select “Profile settings” from the dropdown menu.":
      "Haga clic en su icono de perfil en la esquina superior derecha y seleccione “Profile settings” en el menú desplegable.",
    "Click the down arrow in the top menu bar for the project.":
      "Haga clic en la flecha hacia abajo de la barra de menú superior del proyecto.",
    "Click the email address for the service account you created.":
      "Haga clic en la dirección de correo electrónico de la cuenta de servicio que creó.",
    "Click the navigation menu and select":
      "Haga clic en el menú de navegación y seleccione",
    "Command Name":
      "Nombre del comando",
    "Command Required Permissions":
      "Permisos necesarios para el comando",
    "Could not authorize":
      "No se pudo autorizar",
    "Create a Custom Role":
      "Crear un rol personalizado",
    "Create a Project":
      "Crear un proyecto",
    "Create a Service Account":
      "Crear una cuenta de servicio",
    "Create a Service Account & Service Account Key":
      "Crear una cuenta de servicio y una clave de cuenta de servicio",
    "Create a Service Account Key":
      "Crear una clave de cuenta de servicio",
    "Credentials and Password":
      "Credenciales y contraseña",
    "drop-down list, select":
      "lista desplegable, seleccione",
    "drop-down list, select an organization that contains the GCP project(s) that you want the integration to monitor.":
      "lista desplegable, seleccione una organización que contenga los proyectos de GCP que desea que la integración supervise.",
    "drop-down list, select the required roles.":
      "lista desplegable, seleccione los roles necesarios.",
    "Enable Google Workspace APIs":
      "Habilitar las API de Google Workspace",
    "Enter an API token and your Server URL.":
      "Introduzca un token de API y la URL de su servidor.",
    "Enter your Server URL -":
      "Introduzca la URL de su servidor:",
    "Fetch tasks for each ticket type and consider them in the mirroring (requires an additional API request per ticket).":
      "Recupera las tareas de cada tipo de ticket y las tiene en cuenta en el reflejo (requiere una solicitud de API adicional por ticket).",
    "Fetch tickets tasks":
      "Recuperar tareas de tickets",
    "field, paste the email address of the created service account.":
      "pegue la dirección de correo electrónico de la cuenta de servicio creada.",
    "First alert created date to fetch. e.g., \"1 min ago\",\"2 weeks ago\",\"3 months ago\"":
      "Fecha de creación de la primera alerta que se recuperará. Por ejemplo: \"1 min ago\",\"2 weeks ago\",\"3 months ago\"",
    "Follow these instructions to retrieve the API token.":
      "Siga estas instrucciones para obtener el token de API.",
    "Follow these instructions to successfully instantiate an instance of the Freshservice integration.":
      "Siga estas instrucciones para crear correctamente una instancia de la integración de Freshservice.",
    "Forcepoint version 8.5.5 or later":
      "Forcepoint versión 8.5.5 o posterior",
    "Forcepoint’s API calls to delete URLs/IPs from a category and to delete the category itself have changed. See":
      "Las llamadas a la API de Forcepoint para eliminar URL/IP de una categoría y para eliminar la propia categoría han cambiado. Consulte",
    "Forcepoint’s documentation":
      "documentación de Forcepoint",
    "FortiGate always delivered on the concept of hybrid mesh firewalls with FortiManager for unified management and consistent security across complex hybrid environments.":
      "FortiGate siempre ha ofrecido el concepto de firewalls de malla híbrida con FortiManager para una administración unificada y una seguridad coherente en entornos híbridos complejos.",
    "FortiGate provides flawless convergence that can scale to any location: remote office, branch, campus, data center, and cloud.":
      "FortiGate ofrece una convergencia impecable que puede escalar a cualquier ubicación: oficina remota, sucursal, campus, centro de datos y nube.",
    "Freshservice URL (make sure your URL includes your unique environment name).":
      "URL de Freshservice (asegúrese de que su URL incluya el nombre único de su entorno).",
    "Glean Configure Connection":
      "Configurar la conexión de Glean",
    "Grant Permissions":
      "Conceder permisos",
    "Grant Role Access to Service Account":
      "Conceder acceso de rol a la cuenta de servicio",
    "How to Achieve Authentication":
      "Cómo lograr la autenticación",
    "If prompted, select a project, or create a new one.":
      "Si se le solicita, seleccione un proyecto o cree uno nuevo.",
    "If the Freshworks Freshservice name for your company is, for example, ‘taltal’, then the Server URL configuration parameter you would enter would be ‘https://taltal.freshservice.com’.":
      "Por ejemplo, si el nombre de Freshworks Freshservice de su empresa es ‘taltal’, el parámetro de configuración URL del servidor que debe introducir sería ‘https://taltal.freshservice.com’.",
    "Important Updates for Version 8.5.5 and Later":
      "Actualizaciones importantes para la versión 8.5.5 y posteriores",
    "In order to use the integration capabilities, you need to enable Google Workspace APIs.":
      "Para usar las funciones de la integración, debe habilitar las API de Google Workspace.",
    "In order to use the integration, in the first stage, you need to create a project.":
      "Para usar la integración, en la primera fase debe crear un proyecto.",
    "In the left sidebar, click on “API Key”.":
      "En la barra lateral izquierda, haga clic en “API Key”.",
    "In the list of search results, click the API you want to enable.":
      "En la lista de resultados de búsqueda, haga clic en la API que desea habilitar.",
    "In the search field, enter the name of the API you want to enable and press":
      "En el campo de búsqueda, introduzca el nombre de la API que desea habilitar y pulse",
    "Incident impacts to fetch. The default is All. You can choose multiple impacts.":
      "Impactos de incidentes que se van a recuperar. El valor predeterminado es All. Puede elegir varios impactos.",
    "Incident priorities to fetch. The default is All. You can choose multiple priorities.":
      "Prioridades de incidentes que se van a recuperar. El valor predeterminado es All. Puede elegir varias prioridades.",
    "Information about how to create project can be found":
      "Encontrará información sobre cómo crear un proyecto",
    "Instance Setup":
      "Configuración de la instancia",
    "Integrate Cloud Security with your Glean Account to gain comprehensive visibility into any data and posture risk existing in your Glean environment. This integration enables automated scanning of all assets in Glean, including data classification and risk assessment.":
      "Integre Cloud Security con su cuenta de Glean para obtener una visibilidad integral de cualquier dato y riesgo de postura que exista en su entorno de Glean. Esta integración permite el análisis automatizado de todos los activos de Glean, incluidas la clasificación de datos y la evaluación de riesgos.",
    "Keep this window open for the duration of the onboarding.":
      "Mantenga esta ventana abierta mientras dure la incorporación.",
    "Log in to your Freshservice account as an administrator.":
      "Inicie sesión en su cuenta de Freshservice como administrador.",
    "Maximum number of incidents per fetch. Default is 100.":
      "Número máximo de incidentes por recuperación. El valor predeterminado es 100.",
    "More information about creating the required resources can be found here:":
      "Encontrará más información sobre cómo crear los recursos necesarios aquí:",
    "Note that the API key is generated with different permissions. For using the ‘Test’ button to validate the credentials, your API token will need at least the view tickets permission.":
      "Tenga en cuenta que la clave de API se genera con permisos distintos. Para usar el botón ‘Test’ y validar las credenciales, su token de API necesitará al menos el permiso para ver tickets.",
    "Note: You must provide at least one of these authentication methods (username/password or API key), but not both simultaneously.":
      "Nota: debe proporcionar al menos uno de estos métodos de autenticación (nombre de usuario y contraseña, o clave de API), pero no ambos a la vez.",
    "On the API Key page, click on the “Generate Key” button.":
      "En la página API Key, haga clic en el botón “Generate Key”.",
    "Please enable the following APIs:":
      "Habilite las siguientes API:",
    "Please provide the downloaded file content in the integration":
      "Proporcione el contenido del archivo descargado en el parámetro de instancia",
    "instance parameter.":
      "de la integración.",
    "Required grant ‘Service Account Key Admin’ role permission":
      "Se requiere conceder el permiso del rol ‘Service Account Key Admin’",
    "Service Account Private Key file content (JSON)":
      "Contenido del archivo de clave privada de la cuenta de servicio (JSON)",
    "Service Account Private Key file content (JSON).":
      "Contenido del archivo de clave privada de la cuenta de servicio (JSON).",
    "The Fortinet FortiOS operating system provides deep visibility and security across a variety of form factors.":
      "El sistema operativo Fortinet FortiOS proporciona una visibilidad y una seguridad profundas en una gran variedad de formatos.",
    "The Glean account is not recognized.":
      "No se reconoce la cuenta de Glean.",
    "The risk of the tickets to fetch. Available only for the 'Change Request' ticket type.":
      "El riesgo de los tickets que se van a recuperar. Solo está disponible para el tipo de ticket 'Change Request'.",
    "The status of the tickets to fetch. Since each ticket type has its own unique set of statuses, select only statuses that match the selected ticket type(s).":
      "El estado de los tickets que se van a recuperar. Dado que cada tipo de ticket tiene su propio conjunto de estados, seleccione solo los estados que coincidan con los tipos de ticket seleccionados.",
    "The urgency of the tickets to fetch. Available only for the 'Incident/Service Request' ticket type. The default is All. You can choose multiple urgencies.":
      "La urgencia de los tickets que se van a recuperar. Solo está disponible para el tipo de ticket 'Incident/Service Request'. El valor predeterminado es All. Puede elegir varias urgencias.",
    "The URL of your Forcepoint instance, without the port number.":
      "La URL de su instancia de Forcepoint, sin el número de puerto.",
    "There are no permissions required for making this API call.":
      "No se requieren permisos para realizar esta llamada a la API.",
    "Ticket Impact":
      "Impacto del ticket",
    "Ticket Priority":
      "Prioridad del ticket",
    "Ticket Risk":
      "Riesgo del ticket",
    "Ticket Status":
      "Estado del ticket",
    "Ticket type to fetch as incidents.":
      "Tipo de ticket que se recuperará como incidentes.",
    "Ticket Urgency":
      "Urgencia del ticket",
    "To authenticate with FortiGate, you can use one of two methods:":
      "Para autenticarse con FortiGate, puede usar uno de los dos métodos siguientes:",
    "To configure an instance of the integration in Cortex, you need to supply the Service Account Private Key file content.":
      "Para configurar una instancia de la integración en Cortex, debe proporcionar el contenido del archivo de clave privada de la cuenta de servicio.",
    "To set up an instance, add the following.":
      "Para configurar una instancia, agregue lo siguiente.",
    "To successfully onboard the account, try again or contact support.":
      "Para incorporar correctamente la cuenta, inténtelo de nuevo o póngase en contacto con el servicio de asistencia.",
    "Under Service account details, type a name, ID, and description for the service account, then click":
      "En Service account details, escriba un nombre, un ID y una descripción para la cuenta de servicio y, a continuación, haga clic en",
    "Username/Password Authentication":
      "Autenticación con nombre de usuario y contraseña",
    "Verifying connection...":
      "Verificando la conexión...",
    "You can grant the permissions by predefined roles or by creating a custom role.":
      "Puede conceder los permisos mediante roles predefinidos o creando un rol personalizado.",
    "You have to grant the required permissions to the created Service Account in order to use in the integration command.":
      "Debe conceder los permisos necesarios a la cuenta de servicio creada para poder usarla en el comando de la integración.",
    "Your credentials (username) and password for logging in to your Forcepoint instance.":
      "Sus credenciales (nombre de usuario) y contraseña para iniciar sesión en su instancia de Forcepoint.",
    "Your new public/private key pair is generated and downloaded to your machine; it serves as the only copy of the private key. You are responsible for storing it securely. If you lose this key pair, you will need to generate a new one.":
      "Se genera un nuevo par de claves pública/privada y se descarga en su equipo; este es el único ejemplar de la clave privada. Usted es responsable de almacenarlo de forma segura. Si pierde este par de claves, tendrá que generar uno nuevo.",

    // --- Batch: Generic Export Indicators Service / Generic SQL / MCP authentication docs and integration card descriptions (08:43 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "- Bypass SSL certificate verification (Default:":
      "- Omitir la verificación del certificado SSL (valor predeterminado:",
    "- Check this box if API calls to this endpoint require authentication (":
      "- Marque esta casilla si las llamadas a la API de este punto de conexión requieren autenticación (",
    "- Check this box if API key or authentication credentials are provided as part of the HTTP header (":
      "- Marque esta casilla si la clave de API o las credenciales de autenticación se proporcionan como parte del encabezado HTTP (",
    "- For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "- Para una llamada basada en encabezado, aparecería en el encabezado como 'X-PAN-KEY': KEY_HERE",
    "- For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE -":
      "- Para una llamada parametrizada, se agregaría a la URL como &X-PAN-KEY=KEY_HERE -",
    "- Integration instance name":
      "- Nombre de la instancia de integración",
    "- Leave blank when using an API key":
      "- Déjelo en blanco cuando use una clave de API",
    "- Leverage the proxy settings configured on the XSOAR server":
      "- Utiliza la configuración de proxy establecida en el servidor XSOAR",
    "- The base server URL for the API endpoint without the trailing slash (":
      "- La URL base del servidor para el punto de conexión de la API, sin la barra final (",
    "- The password (when using HTTP basic authentication) or API key to use for API calls with this integration instance":
      "- La contraseña (si se usa la autenticación básica HTTP) o la clave de API que se utilizará para las llamadas a la API con esta instancia de integración",
    "- The value to use to identify the API key field as part of the HTTP header or API Key parameter in the URL":
      "- El valor que se utiliza para identificar el campo de la clave de API como parte del encabezado HTTP o del parámetro de clave de API en la URL",
    "- Username for HTTP basic authentication.":
      "- Nombre de usuario para la autenticación básica HTTP.",
    "- When fetching by either ID or timestamp.":
      "- Al recuperar por ID o por marca de tiempo.",
    "- When the ID is unique but not necessarily ascending and timestamp is not unique.":
      "- Cuando el ID es único pero no necesariamente ascendente y la marca de tiempo no es única.",
    ": Add custom headers to be sent with each API request. Enter each header on a new line in the format:":
      ": Agregue encabezados personalizados que se enviarán con cada solicitud de API. Introduzca cada encabezado en una línea nueva con el formato:",
    ": If you are running the integration via an on-prem engine you must set the username and password fields in the integration instance. Otherwise, for normal usage, if you have set a default password in your tenant, you do not have to set a username and password in the integration instance":
      ": Si ejecuta la integración mediante un motor local, debe establecer los campos de nombre de usuario y contraseña en la instancia de integración. De lo contrario, para un uso normal, si ha establecido una contraseña predeterminada en su tenant, no es necesario establecer un nombre de usuario y una contraseña en la instancia de integración",
    ": No authentication is used.":
      ": No se utiliza autenticación.",
    ": Provide the API Key to access the service REST API.":
      ": Proporcione la clave de API para acceder a la API REST del servicio.",
    ": Provide the API Token or API Key to access the service REST API.":
      ": Proporcione el token de API o la clave de API para acceder a la API REST del servicio.",
    ": Provide the Bearer Token to access the service REST API.":
      ": Proporcione el token Bearer para acceder a la API REST del servicio.",
    ": Provide the raw token to access the service REST API.":
      ": Proporcione el token sin procesar (raw) para acceder a la API REST del servicio.",
    ": Provide the username and password for basic authentication.":
      ": Proporcione el nombre de usuario y la contraseña para la autenticación básica.",
    ": Required to obtain the access token. To get this code, run the":
      ": Necesario para obtener el token de acceso. Para obtener este código, ejecute",
    ": Select the authentication method to use for connecting to the MCP server.":
      ": Seleccione el método de autenticación que se utilizará para conectarse al servidor MCP.",
    ": Select this option to trust any certificate. This is not recommended for production environments.":
      ": Seleccione esta opción para confiar en cualquier certificado. No se recomienda en entornos de producción.",
    ": Space-separated permission identifiers requested from the authorization server.":
      ": Identificadores de permisos separados por espacios que se solicitan al servidor de autorización.",
    ": The base URL of the MCP server. This is a required parameter for all authentication types.":
      ": La URL base del servidor MCP. Es un parámetro obligatorio para todos los tipos de autenticación.",
    ": The Client ID for your application.":
      ": El ID de cliente de su aplicación.",
    ": The Client Secret for your application.":
      ": El secreto de cliente de su aplicación.",
    ": The External Dynamic List is not accessible via web browsers and you will receive an unauthorized error if accessing the External Dynamic List via a browser.":
      ": No se puede acceder a External Dynamic List mediante navegadores web y recibirá un error de no autorizado si accede a External Dynamic List a través de un navegador.",
    ": The URI to which the authorization server redirects the user-agent after granting authorization. This is typically used in OAuth 2.0 Authorization Code flow. Default:":
      ": El URI al que el servidor de autorización redirige al agente de usuario tras conceder la autorización. Normalmente se usa en el flujo Authorization Code de OAuth 2.0. Valor predeterminado:",
    ": The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the":
      ": La URL del punto de conexión de autorización de OAuth 2.0. Si no se proporciona, el valor predeterminado será el origen de",
    ": The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the":
      ": La URL del punto de conexión de tokens de OAuth 2.0. Si no se proporciona, el valor predeterminado será el origen de",
    ": Uses a Bearer token for authentication.":
      ": Utiliza un token Bearer para la autenticación.",
    ": Uses a raw token for authentication.":
      ": Utiliza un token sin procesar (raw) para la autenticación.",
    ": Uses a single API token or key for authentication.":
      ": Utiliza un único token o clave de API para la autenticación.",
    ": Uses a username and password for authentication.":
      ": Utiliza un nombre de usuario y una contraseña para la autenticación.",
    ": Uses an API key for authentication.":
      ": Utiliza una clave de API para la autenticación.",
    ": Uses OAuth 2.0 Dynamic Client Registration.":
      ": Utiliza OAuth 2.0 Dynamic Client Registration.",
    ": Uses the OAuth 2.0 Authorization Code flow for authentication.":
      ": Utiliza el flujo Authorization Code de OAuth 2.0 para la autenticación.",
    ": Uses the OAuth 2.0 Client Credentials flow for authentication.":
      ": Utiliza el flujo Client Credentials de OAuth 2.0 para la autenticación.",
    "\"No known finding\" from any command means nothing was flagged in the sources":
      "“No known finding” de cualquier comando significa que no se marcó nada en las fuentes",
    "(Optional) limit :limit (It’s possible if the database supports it)":
      "(Opcional) limit :limit (es posible si la base de datos lo admite)",
    "* 0 - Do not collapse.":
      "* 0 - No contraer.",
    "* 1 - Collapse to ranges.":
      "* 1 - Contraer en rangos.",
    "* 2 - Collapse to CIDRs.":
      "* 2 - Contraer en CIDR.",
    "A search engine used for searching Internet-connected devices.":
      "Un motor de búsqueda que se utiliza para buscar dispositivos conectados a Internet.",
    "Access the Generic Export Indicators Service by Instance Name (HTTPS)":
      "Acceder a Generic Export Indicators Service por nombre de instancia (HTTPS)",
    "Add comment to empty list":
      "Agregar un comentario a la lista vacía",
    "Add custom headers to be sent with each API request.":
      "Agregue encabezados personalizados que se enviarán con cada solicitud de API.",
    "Add custom headers to be sent with each API request. Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "Agregue encabezados personalizados que se enviarán con cada solicitud de API. Introduzca cada encabezado en una línea nueva con el formato: HeaderName: HeaderValue.",
    "Add HSTS header":
      "Agregar encabezado HSTS",
    "Advanced Parameters":
      "Parámetros avanzados",
    "Advanced: Use Legacy Queries":
      "Avanzado: usar consultas heredadas",
    "Agentless, Workload-Deep, Context-Aware Security and Compliance for AWS, Azure, and GCP.":
      "Seguridad y cumplimiento sin agente, con análisis profundo de cargas de trabajo y conocimiento del contexto para AWS, Azure y GCP.",
    "Alert and notify users using PagerDuty.":
      "Alerte y notifique a los usuarios mediante PagerDuty.",
    "Analyse retro hunts, read live hunt notifications and download files from VirusTotal.":
      "Analice retro hunts, lea notificaciones de live hunt y descargue archivos de VirusTotal.",
    "Analyzes suspicious hashes, URLs, domains, and IP addresses.":
      "Analiza hashes, URL, dominios y direcciones IP sospechosos.",
    "API call is authenticated":
      "La llamada a la API está autenticada",
    "API call is authenticated (Default: False)":
      "La llamada a la API está autenticada (predeterminado: False)",
    "API key supplied in header":
      "Clave de API proporcionada en el encabezado",
    "API Key supplied in header":
      "Clave de API proporcionada en el encabezado",
    "API Token / API Key":
      "Token de API / Clave de API",
    "Append string to list":
      "Agregar cadena al final de la lista",
    "argument":
      "argumento",
    "Authentication Header":
      "Encabezado de autenticación",
    "Authorization Endpoint":
      "Punto de conexión de autorización",
    "Base API Endpoint URL (https:// with no trailing slash)":
      "URL base del punto de conexión de la API (https:// sin barra final)",
    "Base Server URL":
      "URL base del servidor",
    "Bind Variables":
      "Variables de enlace",
    "By default, the integration does not pool database connections. Thus, a connection is created and closed for each command run by the integration. When connection pooling is enabled, each Docker container will maintain a single connection open for the time specified in the the":
      "De forma predeterminada, la integración no agrupa las conexiones de base de datos. Por ello, se crea y se cierra una conexión por cada comando que ejecuta la integración. Cuando se habilita la agrupación de conexiones, cada contenedor de Docker mantendrá una única conexión abierta durante el tiempo especificado en",
    "CIDRs with a lower network prefix bits number are not included. For example - if the number is 8, then 0.0.0.0/2 is excluded from the list.":
      "No se incluyen los CIDR con un número de bits de prefijo de red inferior. Por ejemplo, si el número es 8, 0.0.0.0/2 se excluye de la lista.",
    "Close an issue":
      "Cerrar una incidencia",
    "Cloud based Security Network DVR.":
      "DVR de red de seguridad basado en la nube.",
    "Cloud-based service for logs & metrics management.":
      "Servicio basado en la nube para la gestión de registros y métricas.",
    "Collect information and take action on remote endpoints in real time with VMware Carbon Black EDR (Live Response API) (formerly known as Carbon Black Enterprise Live Response).":
      "Recopile información y tome medidas en endpoints remotos en tiempo real con VMware Carbon Black EDR (Live Response API) (anteriormente Carbon Black Enterprise Live Response).",
    "command and follow its instructions.":
      "comando y siga sus instrucciones.",
    "command for the first time to initialize the export process.":
      "comando por primera vez para inicializar el proceso de exportación.",
    "Connection Arguments":
      "Argumentos de conexión",
    "Connection Arguments (ex: arg1=val1&arg2=val2)":
      "Argumentos de conexión (p. ej.: arg1=val1&arg2=val2)",
    "Connection Pool Time to Live":
      "Tiempo de vida del grupo de conexiones",
    "Connection Pool Time to Live (seconds)":
      "Tiempo de vida del grupo de conexiones (segundos)",
    "Connection Pooling":
      "Agrupación de conexiones",
    "Converts URLs, PDF files, and emails to an image file or PDF file.":
      "Convierte URL, archivos PDF y correos electrónicos en un archivo de imagen o PDF.",
    "Custom headers":
      "Encabezados personalizados",
    "Database host":
      "Host de la base de datos",
    "Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "El valor predeterminado es false (la clave se proporciona como parámetro). Si se desmarca, la clave de API se pasará como encabezado de la llamada",
    "Default ports":
      "Puertos predeterminados",
    "Deprecated - We recommend using the Remote Access v2 integration instead.":
      "Obsoleto. Se recomienda utilizar en su lugar la integración Remote Access v2.",
    "Deprecated. Use Analyst1 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Analyst1.",
    "Deprecated. Use Jamf v2 instead. Jamf device management. Please note, this integration is currently only compatible with the Jamf V1 API.":
      "Obsoleto. Utilice Jamf v2 en su lugar. Administración de dispositivos Jamf. Tenga en cuenta que esta integración actualmente solo es compatible con la API Jamf V1.",
    "Deprecated. Use O365 Defender SafeLinks instead. Enables URL scanning, rewriting inbound email messages in the mail flow, time-of-click URL verification, and links in email messages and other locations.":
      "Obsoleto. Utilice O365 Defender SafeLinks en su lugar. Habilita el análisis de URL, la reescritura de mensajes de correo entrantes en el flujo de correo, la verificación de URL en el momento del clic y la protección de los vínculos en mensajes de correo y otras ubicaciones.",
    "Deprecated. Use Proofpoint Protection Server V2 instead.":
      "Obsoleto. Utilice Proofpoint Protection Server V2 en su lugar.",
    "Deprecated. Use SlackV3 instead.":
      "Obsoleto. Utilice SlackV3 en su lugar.",
    "Deprecated. Use The Generic SQL integration instead.":
      "Obsoleto. Utilice en su lugar la integración The Generic SQL.",
    "Deprecated. Use the Microsoft Graph Security integration instead. This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "Obsoleto. Utilice en su lugar la integración Microsoft Graph Security. Esta integración permite administrar e interactuar con la búsqueda de contenido de seguridad y cumplimiento de Microsoft.",
    "Deprecated. Use the Okta v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Okta v2.",
    "Deprecated. Use the PagerDuty v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración PagerDuty v2.",
    "Deprecated. Use the Palo Alto Networks AutoFocus v2 integration instead. Palo Alto Networks AutoFocus enables you to distinguish the most important threats from everyday commodity attacks.":
      "Obsoleto. Utilice en su lugar la integración Palo Alto Networks AutoFocus v2. Palo Alto Networks AutoFocus le permite distinguir las amenazas más importantes de los ataques comunes cotidianos.",
    "Deprecated. Use the Prisma Cloud v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Prisma Cloud v2.",
    "Deprecated. Use the Rapid7 Nexpose integration instead.":
      "Obsoleto. Utilice en su lugar la integración Rapid7 Nexpose.",
    "Deprecated. Use the Server Message Block (SMB) v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Server Message Block (SMB) v2.",
    "Deprecated. Use the ServiceNow v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración ServiceNow v2.",
    "Deprecated. Use the Slack v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Slack v2.",
    "Deprecated. Use the Unit 42 Intelligence integration instead.":
      "Obsoleto. Utilice en su lugar la integración Unit 42 Intelligence.",
    "Deprecated. Use the Zendesk v2 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Zendesk v2.",
    "Deprecated. Use VirusTotalV3 integration instead.":
      "Obsoleto. Utilice en su lugar la integración VirusTotalV3.",
    "Deprecated. Use VMware Carbon Black EDR v2 instead.":
      "Obsoleto. Utilice VMware Carbon Black EDR v2 en su lugar.",
    "Discover and remediate AI application vulnerabilities with Palo Alto Networks Prisma AIRS AI Red Teaming: targets, adapters, scans, attack reports, prompt sets, and custom attacks.":
      "Descubra y corrija las vulnerabilidades de las aplicaciones de IA con Palo Alto Networks Prisma AIRS AI Red Teaming: objetivos, adaptadores, análisis, informes de ataques, conjuntos de prompts y ataques personalizados.",
    "Does this API call require authentication (Basic, API key, etc.)?":
      "¿Esta llamada a la API requiere autenticación (básica, clave de API, etc.)?",
    "Dynamically retrieve and add to allow list IPs Prisma Access uses to egress traffic to the internet and SaaS apps.":
      "Recupere y agregue dinámicamente a la lista de permitidos las IP que Prisma Access utiliza para la salida de tráfico a Internet y a aplicaciones SaaS.",
    "e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field)":
      "p. ej., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY es el valor especificado en este campo)",
    "Enabling this prevents automatic list refresh.":
      "Al habilitar esta opción se evita la actualización automática de la lista.",
    "Enforce ASCII only":
      "Forzar solo ASCII",
    "Enrich indicators with Unit 42 threat intelligence context including verdicts, threat object associations, and relationships.":
      "Enriquezca los indicadores con el contexto de inteligencia de amenazas de Unit 42, incluidos veredictos, asociaciones de objetos de amenaza y relaciones.",
    "Enter each header on a new line in the format: HeaderName: HeaderValue.":
      "Introduzca cada encabezado en una línea nueva con el formato: HeaderName: HeaderValue.",
    "Enter the exact column's incident name (if empty - it's the Fetch Column).":
      "El nombre exacto de la columna del nombre del incidente (si está vacío, se usa la columna de recuperación).",
    "Enter the exact column's name to fetch (ID column or timestamp column).":
      "El nombre exacto de la columna que se va a recuperar (columna de ID o de marca de tiempo).",
    "Example":
      "Ejemplo",
    "Exclude top level domainGlobs":
      "Excluir domainGlobs de nivel superior",
    "Exported Fields":
      "Campos exportados",
    "Failover time should be about 1 minute plus the container startup time.":
      "El tiempo de conmutación por error debe ser de aproximadamente 1 minuto más el tiempo de inicio del contenedor.",
    "Fetch Column":
      "Columna de recuperación",
    "Fetch events query":
      "Consulta de recuperación de eventos",
    "Fetch Incidents query Notes":
      "Notas sobre la consulta de recuperación de incidentes",
    "Fetch Limit (Default / Max - 50, Recommended less than 50)":
      "Límite de recuperación (predeterminado/máximo: 50; se recomienda menos de 50)",
    "Fetch parameters, ts (timestamp) or id and l (limit), will be added by the fetch mechanism.":
      "Los parámetros de recuperación ts (marca de tiempo) o id y l (límite) los agregará el mecanismo de recuperación.",
    "Fetch parameters, ts (timestamp) or ID and l (limit), will be added by the fetch mechanism.":
      "Los parámetros de recuperación ts (marca de tiempo) o ID y l (límite) los agregará el mecanismo de recuperación.",
    "Fetches and manages incidents from iZOOlogic, enabling automated ingestion, incident creation, and advanced filtering for brand protection and threat management.":
      "Recupera y administra incidentes de iZOOlogic, lo que permite la ingesta automatizada, la creación de incidentes y el filtrado avanzado para la protección de marca y la gestión de amenazas.",
    "Files and Directories management with an SMB server. Supports SMB2 and SMB3 protocols.":
      "Administración de archivos y directorios con un servidor SMB. Admite los protocolos SMB2 y SMB3.",
    "Fill in ‘Fetch Column’ with your exact timestamp column name, and fill in the ‘ID column name’ with your exact ID column name.":
      "Rellene ‘Fetch Column’ con el nombre exacto de la columna de marca de tiempo y ‘ID column name’ con el nombre exacto de la columna de ID.",
    "Fill only the ‘Fetch Column’ with the exact column name to fetch (ID column or timestamp column).":
      "Rellene solo ‘Fetch Column’ con el nombre exacto de la columna que se va a recuperar (columna de ID o de marca de tiempo).",
    "First fetch interval (in days)":
      "Intervalo de la primera recuperación (en días)",
    "First fetch timestamp or First fetch ID":
      "Marca de tiempo de la primera recuperación o ID de la primera recuperación",
    "For example to test via curl with an instance with instance name:":
      "Por ejemplo, para probar mediante curl una instancia con nombre de instancia:",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "Por ejemplo, si `Server URL` es `https://example.com/mcp`, el valor predeterminado de `Authorization Endpoint` será `https://example.com/oauth2/authorize`.",
    "For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "Por ejemplo, si `Server URL` es `https://example.com/mcp`, el valor predeterminado de `Token Endpoint` será `https://example.com/oauth2/token`.",
    "For use with JSON and CSV formats - select specific XSOAR fields to export (comma separated list). If given the value 'all' - all XSOAR fields are exported (in large quantities this can cause a performance issue). If left empty - only value and type are exported.":
      "Para usar con los formatos JSON y CSV: seleccione campos específicos de XSOAR para exportar (lista separada por comas). Si se indica el valor 'all', se exportan todos los campos de XSOAR (en grandes cantidades puede causar problemas de rendimiento). Si se deja vacío, solo se exportan el valor y el tipo.",
    "For use with McAfee Web Gateway format - set the indicator list type.":
      "Para usar con el formato McAfee Web Gateway: establezca el tipo de lista de indicadores.",
    "For use with PAN-OS (text) format - collapse method for IPs (none, range, CIDR).":
      "Para usar con el formato PAN-OS (texto): método de contracción de IP (none, range, CIDR).",
    "For use with PAN-OS (text) format - if selected, any URL entry that is not compliant with PAN-OS URL format is dropped instead of rewritten.":
      "Para usar con el formato PAN-OS (texto): si se selecciona, cualquier entrada de URL que no cumpla el formato de URL de PAN-OS se descarta en lugar de reescribirse.",
    "For use with PAN-OS (text) format - String to add to beginning of published list. Supports newline characters (\\n).":
      "Para usar con el formato PAN-OS (texto): cadena que se agrega al principio de la lista publicada. Admite caracteres de nueva línea (\\n).",
    "For use with PAN-OS (text) format - String to add to end of published list. Supports newline characters (\\n).":
      "Para usar con el formato PAN-OS (texto): cadena que se agrega al final de la lista publicada. Admite caracteres de nueva línea (\\n).",
    "For use with Symantec ProxySG format - set the categories that should be listed in the output (comma separated list). If not set, lists all existing categories.":
      "Para usar con el formato Symantec ProxySG: establezca las categorías que deben aparecer en la salida (lista separada por comas). Si no se establece, se muestran todas las categorías existentes.",
    "For use with Symantec ProxySG format - set the default category for the output.":
      "Para usar con el formato Symantec ProxySG: establezca la categoría predeterminada de la salida.",
    "format. If set, will ignore URLs which are not compliant with PAN-OS URL format instead of being re-written.":
      "formato. Si se establece, se ignorarán las URL que no cumplan el formato de URL de PAN-OS en lugar de reescribirse.",
    "format. The categories which will be exported. Indicators not in these categories will be classified as the default category.":
      "formato. Las categorías que se exportarán. Los indicadores que no estén en estas categorías se clasificarán en la categoría predeterminada.",
    "format. The default category for the exported indicators.":
      "formato. La categoría predeterminada de los indicadores exportados.",
    "format. The type indicated on the top of the exported list. Supports: string, applcontrol, dimension, category, ip, mediatype, number and regex.":
      "formato. El tipo indicado en la parte superior de la lista exportada. Admite: string, applcontrol, dimension, category, ip, mediatype, number y regex.",
    "format. Whether to collapse IPs.":
      "formato. Si se contraen las IP.",
    "Forward requests to long-running integrations":
      "Reenviar solicitudes a integraciones de ejecución prolongada",
    "Fully automated malware dynamic analysis sandboxing.":
      "Sandboxing de análisis dinámico de malware totalmente automatizado.",
    "Generates a Palo Alto Networks WildFire PDF report. For internal use with the TIM Sample Analysis feature.":
      "Genera un informe PDF de Palo Alto Networks WildFire. Para uso interno con la función TIM Sample Analysis.",
    "Generic MCP Integration Description":
      "Descripción de la integración Generic MCP",
    "GenericAPICall Integration":
      "Integración GenericAPICall",
    "Get actionable threat analysis and intelligence from HPE’s cloud-based, standards-compliant sharing platform":
      "Obtenga análisis de amenazas e inteligencia procesables de la plataforma de intercambio basada en la nube y conforme a estándares de HPE",
    "Get the download count for each release in a repository":
      "Obtener el recuento de descargas de cada versión de un repositorio",
    "GitHub app installation ID":
      "ID de instalación de la aplicación de GitHub",
    "GitHub app integration ID":
      "ID de integración de la aplicación de GitHub",
    "Header example":
      "Ejemplo de encabezado",
    "How often to refresh the list (e.g., less than 1 minute, 5 minutes, 12 hours, 7 days, 3 months, 1 year). For performance reasons, we do not recommend setting this value at less than 1 minute.":
      "Con qué frecuencia se actualiza la lista (p. ej., menos de 1 minuto, 5 minutes, 12 hours, 7 days, 3 months, 1 year). Por motivos de rendimiento, no se recomienda establecer este valor en menos de 1 minuto.",
    "ID Column name - in case of fetching by 'ID and timestamp'":
      "Nombre de la columna de ID: en caso de recuperar por 'ID and timestamp'",
    "If selected, CSV format appears in a textual webpage instead of initiating a file download.":
      "Si se selecciona, el formato CSV se muestra en una página web de texto en lugar de iniciar la descarga de un archivo.",
    "If selected, it will force the list to contain only ASCII chars (non-ASCII URLs will be dropped).":
      "Si se selecciona, se fuerza a que la lista contenga solo caracteres ASCII (las URL con caracteres no ASCII se descartan).",
    "If selected, ports in URLs are removed. For example, 'www.example.com:9999/path' becomes 'www.example.com/path'.":
      "Si se selecciona, se eliminan los puertos de las URL. Por ejemplo, 'www.example.com:9999/path' se convierte en 'www.example.com/path'.",
    "If selected, strips the protocol from URLs (http/https).":
      "Si se selecciona, se elimina el protocolo (http/https) de las URL.",
    "If selected, the comment \"# Empty list\" is added to an empty list.":
      "Si se selecciona, se agrega el comentario \"# Empty list\" a una lista vacía.",
    "If selected, URLs are truncated to no more than 254 characters.":
      "Si se selecciona, las URL se truncan a un máximo de 254 caracteres.",
    "If set, will strip protocols off URLs.":
      "Si se establece, se eliminan los protocolos de las URL.",
    "If set. will strip ports off URLs, otherwise will ignore URLs with ports.":
      "Si se establece, se eliminan los puertos de las URL; en caso contrario, se ignoran las URL con puertos.",
    "If the app server running the container fails, the container should restart on a different app server.":
      "Si el servidor de aplicaciones que ejecuta el contenedor falla, el contenedor se reiniciará en otro servidor de aplicaciones.",
    "If the port value is empty, a default port will be selected according to the database type.":
      "Si el valor del puerto está vacío, se seleccionará un puerto predeterminado según el tipo de base de datos.",
    "If you have several Generic Export Indicators Service integration instances, make sure to use":
      "Si tiene varias instancias de la integración Generic Export Indicators Service, asegúrese de usar",
    "Important Notes:":
      "Notas importantes:",
    "In “route” listen mode, a request received by any of the app servers will be redirected to the one currently running the NGINX container.":
      "En el modo de escucha “route”, una solicitud recibida por cualquiera de los servidores de aplicaciones se redirigirá al que esté ejecutando actualmente el contenedor NGINX.",
    "Incident Name":
      "Nombre del incidente",
    "Indicator Query":
      "Consulta de indicadores",
    "inline argument, the number of exported indicators is limited to 100,000 for performance reasons. To export more than 100,000 indicators, create a new integration instance with the desired Indicator Query and List Size.":
      "En el argumento en línea, el número de indicadores exportados se limita a 100.000 por motivos de rendimiento. Para exportar más de 100.000 indicadores, cree una nueva instancia de integración con los valores de Indicator Query y List Size que desee.",
    "inline argument, use separate EDL instances (one per query) and set a default query for each to improve performance.":
      "En el argumento en línea, utilice instancias EDL independientes (una por consulta) y establezca una consulta predeterminada para cada una a fin de mejorar el rendimiento.",
    "Integrate with Okta's Identity Access Management service to execute CRUD operations to employee lifecycle processes.":
      "Se integra con el servicio Identity Access Management de Okta para ejecutar operaciones CRUD en los procesos del ciclo de vida de los empleados.",
    "Integrate with Oracle's services to execute CRUD and Group operations for employee lifecycle processes.":
      "Se integra con los servicios de Oracle para ejecutar operaciones CRUD y de grupo en los procesos del ciclo de vida de los empleados.",
    "Integrate with Palo Alto Networks Prisma AIRS for AI security capabilities including runtime scanning, red teaming, AI supply chain security, and DLP configuration.":
      "Se integra con Palo Alto Networks Prisma AIRS para contar con capacidades de seguridad de IA, como análisis en tiempo de ejecución, red teaming, seguridad de la cadena de suministro de IA y configuración de DLP.",
    "Integrate with Prisma Access to monitor the status of the Service, alert and take actions.":
      "Se integra con Prisma Access para supervisar el estado del servicio, generar alertas y tomar medidas.",
    "Integrate with Salesforce Fusion Identity Access Management service to execute CRUD (create, read, update, and delete) operations for employee lifecycle processes.":
      "Se integra con el servicio Salesforce Fusion Identity Access Management para ejecutar operaciones CRUD (crear, leer, actualizar y eliminar) en los procesos del ciclo de vida de los empleados.",
    "Integrate with SAP's services to execute CRUD operations for employee lifecycle processes.":
      "Se integra con los servicios de SAP para ejecutar operaciones CRUD en los procesos del ciclo de vida de los empleados.",
    "Integrate with ServiceNow's services to execute CRUD operations for employee lifecycle processes.":
      "Se integra con los servicios de ServiceNow para ejecutar operaciones CRUD en los procesos del ciclo de vida de los empleados.",
    "Integrate with Slack's services to execute CRUD operations for employee lifecycle processes.":
      "Se integra con los servicios de Slack para ejecutar operaciones CRUD en los procesos del ciclo de vida de los empleados.",
    "Integrates with the PingOne Management API to unlock, create, delete and update users.":
      "Se integra con la API PingOne Management para desbloquear, crear, eliminar y actualizar usuarios.",
    "Integration for sending notifications to a Microsoft Teams channel via a workflow of type `Post to a channel when a webhook request is received`.":
      "Integración para enviar notificaciones a un canal de Microsoft Teams mediante un flujo de trabajo de tipo `Post to a channel when a webhook request is received`.",
    "Integration with Okta's cloud-based identity management service.":
      "Integración con el servicio de administración de identidades basado en la nube de Okta.",
    "Integration with Threatmon for vulnerability threat intelligence.":
      "Integración con Threatmon para inteligencia de amenazas sobre vulnerabilidades.",
    "Internal page size used when querying Cortex for the indicators. Value can be up to 10,000 due to performance limitations.":
      "Tamaño de página interno que se utiliza al consultar indicadores en Cortex. El valor puede ser de hasta 10.000 debido a limitaciones de rendimiento.",
    "IP Collapsing":
      "Contracción de IP",
    "Is the API key used for each call provided in the header or as a parameter?":
      "¿La clave de API que se usa en cada llamada se proporciona en el encabezado o como parámetro?",
    "Is the API key used for each call provided in the header or as a parameter? Default it set to false (key is provided as a parameter). Unchecking this will pass the API key as a call header":
      "¿La clave de API que se usa en cada llamada se proporciona en el encabezado o como parámetro? El valor predeterminado es false (la clave se proporciona como parámetro). Si se desmarca, la clave de API se pasará como encabezado de la llamada",
    "IT service management.":
      "Gestión de servicios de TI.",
    "List all issues":
      "Enumerar todas las incidencias",
    "List Size":
      "Tamaño de la lista",
    "Listen Port":
      "Puerto de escucha",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc).":
      "Enumera todas las vulnerabilidades de seguridad de diversos productos (SO, aplicaciones), etc.",
    "Make sure to add as parameters the fetch parameter and the limit.":
      "Asegúrese de agregar como parámetros el parámetro de recuperación y el límite.",
    "Make sure to add as parameters the fetch parameter.":
      "Asegúrese de agregar como parámetro el parámetro de recuperación.",
    "Make sure you run the":
      "Asegúrese de ejecutar el comando",
    "Malware analysis sandboxing.":
      "Sandboxing para el análisis de malware.",
    "Manage Palo Alto Networks Firewall and Panorama. Use this pack to manage Prisma Access through Panorama. For more information, see the Panorama documentation.":
      "Administre Palo Alto Networks Firewall y Panorama. Utilice este paquete para administrar Prisma Access a través de Panorama. Para obtener más información, consulte la documentación de Panorama.",
    "Manage teams and members in Microsoft Teams.":
      "Administre equipos y miembros en Microsoft Teams.",
    "Maximum number of items in the list.":
      "Número máximo de elementos de la lista.",
    "Maximum Size of CIDR Block (by mask bit)":
      "Tamaño máximo del bloque CIDR (por bit de máscara)",
    "McAfee Gateway: Indicator List Type":
      "McAfee Gateway: tipo de lista de indicadores",
    "Microsoft Graph lets your app get authorized access to a user's Outlook mail data in a personal or organization account.":
      "Microsoft Graph permite que su aplicación obtenga acceso autorizado a los datos de correo de Outlook de un usuario en una cuenta personal o de organización.",
    "Microsoft Graph lets your app get authorized access to a user's Teams app in a personal or organization account.":
      "Microsoft Graph permite que su aplicación obtenga acceso autorizado a la aplicación Teams de un usuario en una cuenta personal o de organización.",
    "Modify Request Parameters Through the URL":
      "Modificar parámetros de solicitud a través de la URL",
    "Netcraft takedown, submission and screenshot management.":
      "Gestión de retiradas (takedown), envíos y capturas de pantalla de Netcraft.",
    "No Authorization":
      "Sin autorización",
    "Note: Other SQL databases are currently not supported by the fetch incidents.":
      "Nota: otras bases de datos SQL no se admiten actualmente en la recuperación de incidentes.",
    "O365 Outlook Calendar enables you to create and manage different calendars and events according to your requirements.":
      "O365 Outlook Calendar le permite crear y administrar diferentes calendarios y eventos según sus necesidades.",
    "On-premise firewall by Sophos enables you to manage your firewall, respond to threats, and monitor what’s happening on your network.":
      "El firewall local de Sophos le permite administrar su firewall, responder a amenazas y supervisar lo que ocurre en su red.",
    "Option to remove top level domainGlobs from the list. For example - *.com.":
      "Opción para eliminar de la lista los domainGlobs de nivel superior. Por ejemplo: *.com.",
    "Outbound Format":
      "Formato de salida",
    "Palo Alto Networks Best Practice Assessment (BPA) analyzes NGFW and Panorama configurations and compares them to the best practices.":
      "Palo Alto Networks Best Practice Assessment (BPA) analiza las configuraciones de NGFW y Panorama y las compara con las prácticas recomendadas.",
    "Palo Alto Networks Enterprise DLP discovers and protects company data across every data channel and repository. Integrated Enterprise DLP enables data protection and compliance everywhere without complexity.":
      "Palo Alto Networks Enterprise DLP descubre y protege los datos de la empresa en todos los canales y repositorios de datos. Enterprise DLP integrado permite la protección de datos y el cumplimiento normativo en cualquier lugar sin complejidad.",
    "PAN-OS: drop invalid URL entries":
      "PAN-OS: descartar entradas de URL no válidas",
    "parameter (default: 600 seconds). After the time to live expires, and upon execution of a new command, the database connection will close and a new connection will be created.":
      "parámetro (predeterminado: 600 segundos). Una vez transcurrido el tiempo de vida y al ejecutar un nuevo comando, se cerrará la conexión de base de datos y se creará una nueva.",
    "parameter configured in the instance configuration.":
      "parámetro configurado en la configuración de la instancia.",
    "Parameterized example":
      "Ejemplo parametrizado",
    "Password/API Key":
      "Contraseña/Clave de API",
    "Prepend string to list":
      "Anteponer cadena a la lista",
    "Prisma Cloud secures infrastructure, workloads and applications, across the entire cloud-native technology stack.":
      "Prisma Cloud protege la infraestructura, las cargas de trabajo y las aplicaciones en toda la pila tecnológica nativa de la nube.",
    "Proofpoint email security appliance.":
      "Appliance de seguridad de correo electrónico de Proofpoint.",
    "Protect your web application using Signal Sciences.":
      "Proteja su aplicación web con Signal Sciences.",
    "Provides commands for interaction with Prisma SASE API.":
      "Proporciona comandos para interactuar con la API de Prisma SASE.",
    "Provides URL scanning and rewriting of inbound email messages in mail flow, and time-of-click verification of URLs and links in email messages and other locations.":
      "Proporciona análisis y reescritura de URL de mensajes de correo entrantes en el flujo de correo, y verificación en el momento del clic de las URL y vínculos de los mensajes de correo y otras ubicaciones.",
    "Queries examples":
      "Ejemplos de consultas",
    "Refresh Rate":
      "Frecuencia de actualización",
    "RelayShield real-time identity-compromise and agent-security threat intelligence.":
      "Inteligencia de amenazas en tiempo real de RelayShield sobre vulneración de identidades y seguridad de agentes.",
    "RelayShield real-time identity-compromise and agent-security threat intelligence. Implements the generic `domain`/`ip`/`email` reputation commands (auto-invoked by existing enrichment playbooks) plus RelayShield-specific commands for MCP server registry risk, certificate expiry, and supply-chain vendor risk. \"No known finding\" from any command means nothing was flagged in the sources RelayShield actually queried. It is deliberately never mapped to a \"Good\" DBotScore, since that would claim more certainty than the data supports. See the README's DBotScore section for the exact mapping.":
      "Inteligencia de amenazas en tiempo real de RelayShield sobre vulneración de identidades y seguridad de agentes. Implementa los comandos genéricos de reputación `domain`/`ip`/`email` (invocados automáticamente por los playbooks de enriquecimiento existentes) además de comandos específicos de RelayShield para el riesgo del registro de servidores MCP, la caducidad de certificados y el riesgo de proveedores de la cadena de suministro. \"No known finding\" en cualquier comando significa que no se marcó nada en las fuentes que RelayShield consultó realmente. Deliberadamente nunca se asigna a un DBotScore \"Good\", ya que ello supondría una certeza mayor de la que respaldan los datos. Consulte la sección DBotScore del README para ver la asignación exacta.",
    "Retrieve and monitor internal security findings for your organization, and critical findings across your supplier (third-party) portfolio, from the Panorays platform to automate incident response within Cortex.":
      "Recupere y supervise los hallazgos de seguridad internos de su organización y los hallazgos críticos de su cartera de proveedores (terceros) desde la plataforma Panorays para automatizar la respuesta a incidentes en Cortex.",
    "RiskSense is a cloud-based platform that provides vulnerability management and prioritization to measure and control cybersecurity risk.":
      "RiskSense es una plataforma basada en la nube que ofrece administración y priorización de vulnerabilidades para medir y controlar el riesgo de ciberseguridad.",
    "Run queries on Splunk and fetch Notable Events (Splunk ES versions up to 8.2).":
      "Ejecute consultas en Splunk y recupere Notable Events (versiones de Splunk ES hasta la 8.2).",
    "Run queries on Splunk and fetch Splunk ES Findings and Investigations (Splunk ES 8.2+).":
      "Ejecute consultas en Splunk y recupere Splunk ES Findings e Investigations (Splunk ES 8.2 y posteriores).",
    "SaaS Security API is a cloud-based service that you can connect directly to your sanctioned SaaS applications using the cloud app’s API to provide data classification, sharing and permission visibility, and threat detection. This Content Pack provides insights into risks posed by data exposure and policy violations and enables you to use Cortex to effectively manage the incidents discovered by SaaS Security API.":
      "SaaS Security API es un servicio basado en la nube que puede conectar directamente a sus aplicaciones SaaS autorizadas mediante la API de la aplicación en la nube para proporcionar clasificación de datos, visibilidad de uso compartido y permisos, y detección de amenazas. Este paquete de contenido ofrece información sobre los riesgos que plantean la exposición de datos y las infracciones de políticas, y le permite usar Cortex para administrar de forma eficaz los incidentes detectados por SaaS Security API.",
    "SailPoint IdentityIQ context pack enables XSOAR customers to utilize the deep, enriched contextual data in the SailPoint predictive identity platform to better drive identity-aware security practices.":
      "El paquete de contexto de SailPoint IdentityIQ permite a los clientes de XSOAR utilizar los datos contextuales detallados y enriquecidos de la plataforma de identidad predictiva de SailPoint para impulsar mejor las prácticas de seguridad orientadas a la identidad.",
    "Scan and govern AI models with Palo Alto Networks Prisma AIRS AI Supply Chain Security: model scans, evaluations, violations, labels, model groups, and security rules.":
      "Analice y gestione modelos de IA con Palo Alto Networks Prisma AIRS AI Supply Chain Security: análisis de modelos, evaluaciones, infracciones, etiquetas, grupos de modelos y reglas de seguridad.",
    "Search for specific issues":
      "Buscar incidencias específicas",
    "Select an Issue or Pull requests to Fetch":
      "Seleccione una incidencia o solicitudes de incorporación de cambios que recuperar",
    "Send messages and notifications to your Slack team.":
      "Envíe mensajes y notificaciones a su equipo de Slack.",
    "Separate pairs using":
      "Separe los pares con",
    "Server Name":
      "Nombre del servidor",
    "ServiceNow CMDB is a service‑centric foundation that proactively analyzes service‑impacting changes, identifies issues, and eliminates outages.":
      "ServiceNow CMDB es una base centrada en el servicio que analiza de forma proactiva los cambios que afectan al servicio, identifica problemas y elimina interrupciones.",
    "Show CSV format as Text":
      "Mostrar el formato CSV como texto",
    "SIGNL4 offers critical alerting, incident response and service dispatching for operating critical infrastructure. It alerts you persistently via app push, SMS text, voice calls, and email including tracking, escalation, on-call duty scheduling and collaboration.":
      "SIGNL4 ofrece alertas críticas, respuesta a incidentes y despacho de servicios para la operación de infraestructuras críticas. Le avisa de forma persistente mediante notificaciones push de la aplicación, SMS, llamadas de voz y correo electrónico, con seguimiento, escalado, programación de guardias y colaboración.",
    "Space-separated permission identifiers.":
      "Identificadores de permisos separados por espacios.",
    "Specify arguments for the configuration of an instance name-value pairs, for example:":
      "Especifique argumentos para la configuración de una instancia como pares nombre-valor, por ejemplo:",
    "Specify the value to use when passing the API key as a header or parameter value.":
      "Especifique el valor que se utilizará al pasar la clave de API como encabezado o valor de parámetro.",
    "Specify the value to use when passing the API key as a header or parameter value. e.g., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY is the value specified in this field) - For a parameterized call, this would be appended to the URL as &X-PAN-KEY=KEY_HERE - - For a header-based call, this would appear in the header as 'X-PAN-KEY': KEY_HERE":
      "Especifique el valor que se utilizará al pasar la clave de API como encabezado o valor de parámetro. p. ej., X-PAN-KEY: API_KEY_HERE (X-PAN-KEY es el valor especificado en este campo) - Para una llamada parametrizada, se agregaría a la URL como &X-PAN-KEY=KEY_HERE - - Para una llamada basada en encabezado, aparecería en el encabezado como 'X-PAN-KEY': KEY_HERE",
    "SQL DB":
      "Base de datos SQL",
    "Strip ports from URLs":
      "Quitar puertos de las URL",
    "Strip protocols from URLs":
      "Quitar protocolos de las URL",
    "Symantec Messaging Gateway protects against spam, malware, targeted attacks and provides advanced content filtering, data loss prevention, and email encryption.":
      "Symantec Messaging Gateway protege frente al spam, el malware y los ataques dirigidos, y ofrece filtrado avanzado de contenido, prevención de pérdida de datos y cifrado de correo electrónico.",
    "Symantec ProxySG: Default Category":
      "Symantec ProxySG: categoría predeterminada",
    "Symantec ProxySG: Listed Categories":
      "Symantec ProxySG: categorías incluidas",
    "Tavily is a web service that provides real-time web search and retrieval capabilities through an API, enabling developers to fetch and extract relevant information from the internet in structured formats like JSON.":
      "Tavily es un servicio web que ofrece capacidades de búsqueda y recuperación web en tiempo real mediante una API, lo que permite a los desarrolladores obtener y extraer información relevante de Internet en formatos estructurados como JSON.",
    "The fetch parameter should be the same as the column name, the limit is handled outside the query.":
      "El parámetro de recuperación debe ser igual al nombre de la columna; el límite se gestiona fuera de la consulta.",
    "The following are procedure examples for different SQL databases:":
      "A continuación se muestran ejemplos de procedimientos para distintas bases de datos SQL:",
    "The format of the exported list.":
      "El formato de la lista exportada.",
    "The Generic Export Indicators Service is a long-running integration. For more information about long-running integrations, check out the":
      "Generic Export Indicators Service es una integración de ejecución prolongada. Para obtener más información sobre las integraciones de ejecución prolongada, consulte",
    "The Generic SQL query or procedure to fetch according to.":
      "La consulta o el procedimiento Generic SQL según el cual se recupera.",
    "The Generic SQL query/procedure.":
      "La consulta/procedimiento Generic SQL.",
    "The integration supports the following workflows:":
      "La integración admite los siguientes flujos de trabajo:",
    "The maximum number of entries in the output. If no value is provided, will use the value specified in the":
      "El número máximo de entradas en la salida. Si no se proporciona ningún valor, se usará el valor especificado en",
    "The name of the requested repository":
      "El nombre del repositorio solicitado",
    "The name to use for the server in tool names. If not provided, the default name returned by the server will be used.":
      "El nombre que se usa para el servidor en los nombres de herramientas. Si no se proporciona, se usará el nombre predeterminado devuelto por el servidor.",
    "The output format. Supports":
      "El formato de salida. Admite",
    "The Prisma Cloud IAM API consists of a set of API endpoints that allow customers to perform CRUD operation on their user profiles.":
      "La API IAM de Prisma Cloud consta de un conjunto de puntos de conexión de API que permiten a los clientes realizar operaciones CRUD en sus perfiles de usuario.",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘timestamp’ is a fetch parameter)":
      "El procedimiento debe contener condiciones sobre el parámetro de recuperación (en el ejemplo proporcionado, ‘timestamp’ es un parámetro de recuperación)",
    "The procedure should contain conditions on the fetch parameter: (In the example provided, ‘ts’ is a fetch timestamp parameter)":
      "El procedimiento debe contener condiciones sobre el parámetro de recuperación (en el ejemplo proporcionado, ‘ts’ es un parámetro de marca de tiempo de recuperación)",
    "The query to run to update the indicators list. To view expected results, run the following command from the Cortex CLI `!findIndicators query=<your query>`. An empty value may load unwanted indicators. See integration docs for troubleshooting information.":
      "La consulta que se ejecuta para actualizar la lista de indicadores. Para ver los resultados esperados, ejecute el siguiente comando desde la CLI de Cortex: `!findIndicators query=<your query>`. Un valor vacío puede cargar indicadores no deseados. Consulte la documentación de la integración para obtener información sobre la solución de problemas.",
    "The query used to retrieve indicators from the system. If you are using this argument, no more than 100,000 can be exported through the EDL.":
      "La consulta que se utiliza para recuperar indicadores del sistema. Si usa este argumento, no se pueden exportar más de 100.000 a través de EDL.",
    "The REST API URL":
      "La URL de la API REST",
    "The SailPoint Identity Security platform can be configured either on-prem/single tenant SaaS, or multi-tenant. This package is intended to be used with the SaaS, multi-tenant solution, IdentityNow.":
      "La plataforma SailPoint Identity Security se puede configurar en local o como SaaS de un solo tenant, o bien como multitenant. Este paquete está pensado para usarse con la solución SaaS multitenant, IdentityNow.",
    "The starting entry index from which to export the indicators when index 0 is the first position.":
      "El índice de la entrada inicial desde la que se exportan los indicadores, siendo el índice 0 la primera posición.",
    "The ThreatX integration allows automated enforcement and intel gathering actions.":
      "La integración de ThreatX permite acciones automatizadas de aplicación de medidas y recopilación de inteligencia.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`.":
      "La URL del punto de conexión de autorización de OAuth 2.0. Si no se proporciona, el valor predeterminado será el origen de `Server URL` seguido de `/oauth2/authorize`.",
    "The URL for the OAuth 2.0 authorization endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/authorize`. For example, if `Server URL` is `https://example.com/mcp`, the default `Authorization Endpoint` will be `https://example.com/oauth2/authorize`.":
      "La URL del punto de conexión de autorización de OAuth 2.0. Si no se proporciona, el valor predeterminado será el origen de `Server URL` seguido de `/oauth2/authorize`. Por ejemplo, si `Server URL` es `https://example.com/mcp`, el valor predeterminado de `Authorization Endpoint` será `https://example.com/oauth2/authorize`.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`.":
      "La URL del punto de conexión de tokens de OAuth 2.0. Si no se proporciona, el valor predeterminado será el origen de `Server URL` seguido de `/oauth2/token`.",
    "The URL for the OAuth 2.0 token endpoint. If not provided, the default will be the origin of the `Server URL` followed by `/oauth2/token`. For example, if `Server URL` is `https://example.com/mcp`, the default `Token Endpoint` will be `https://example.com/oauth2/token`.":
      "La URL del punto de conexión de tokens de OAuth 2.0. Si no se proporciona, el valor predeterminado será el origen de `Server URL` seguido de `/oauth2/token`. Por ejemplo, si `Server URL` es `https://example.com/mcp`, el valor predeterminado de `Token Endpoint` será `https://example.com/oauth2/token`.",
    "There are two options to fetch incidents, determined by the ‘Fetch by’ configuration:":
      "Hay dos opciones para recuperar incidentes, determinadas por la configuración ‘Fetch by’:",
    "There are two options to use to bind variables:":
      "Hay dos opciones para enlazar variables:",
    "This does not happen in “port” listen mode, that’s why “route” mode should be used.":
      "Esto no ocurre en el modo de escucha “port”, por lo que se debe usar el modo “route”.",
    "This integration allows the security operations center to create and manage incidents based on Vectra Events Detections.":
      "Esta integración permite al centro de operaciones de seguridad crear y administrar incidentes basados en Vectra Events Detections.",
    "This integration allows you to connect securely with any MCP server and access its tools in real time.":
      "Esta integración le permite conectarse de forma segura a cualquier servidor MCP y acceder a sus herramientas en tiempo real.",
    "This integration allows you to manage and interact with Microsoft security and compliance content search.":
      "Esta integración permite administrar e interactuar con la búsqueda de contenido de seguridad y cumplimiento de Microsoft.",
    "This integration is configured automatically as part of the Okta Standard Connector. Do not configure this integration directly — set it up from the connector page instead.":
      "Esta integración se configura automáticamente como parte de Okta Standard Connector. No configure esta integración directamente; configúrela desde la página del conector.",
    "This integration provides a method for executing HTTP API calls to specific API endpoints used in one-off scenarios not covered by other XSOAR integrations. This integration supports unauthenticated and authenticated API calls over HTTPS, using API key and basic HTTP authentication methods.":
      "Esta integración proporciona un método para ejecutar llamadas a la API HTTP a puntos de conexión de API específicos usados en escenarios puntuales no cubiertos por otras integraciones de XSOAR. Admite llamadas a la API no autenticadas y autenticadas a través de HTTPS, mediante clave de API y métodos de autenticación básica HTTP.",
    "This integration transfers files between Cortex and a remote machine and executes commands on the remote machine.":
      "Esta integración transfiere archivos entre Cortex y una máquina remota y ejecuta comandos en la máquina remota.",
    "This is a feed integration for extracting indicators from ServiceNow.":
      "Se trata de una integración de feed para extraer indicadores de ServiceNow.",
    "This is the Orion Malware integration. Analyzes hash and files with static and dynamic analysis.":
      "Esta es la integración Orion Malware. Analiza hashes y archivos con análisis estático y dinámico.",
    "To generate your personal access token, visit:":
      "Para generar su token de acceso personal, visite:",
    "TrendAI™ Apex One central automation to manage agents and User-Defined Suspicious Objects.":
      "Automatización central de TrendAI™ Apex One para administrar agentes y objetos sospechosos definidos por el usuario.",
    "Troubleshoot":
      "Solución de problemas",
    "Truncate URL length":
      "Truncar la longitud de la URL",
    "Unit 42 Feed integration provides threat intelligence from Palo Alto Networks Unit 42 research team.":
      "La integración Unit 42 Feed proporciona inteligencia de amenazas del equipo de investigación Unit 42 de Palo Alto Networks.",
    "Update an issue":
      "Actualizar una incidencia",
    "Update list on demand only":
      "Actualizar la lista solo a petición",
    "Use an SSL connection":
      "Usar una conexión SSL",
    "Use both bind variable names and values, for example:":
      "Utilice tanto los nombres como los valores de las variables de enlace, por ejemplo:",
    "Use Connection Pooling":
      "Usar la agrupación de conexiones",
    "Use LDAP (Teradata only)":
      "Usar LDAP (solo Teradata)",
    "Use only bind variable values, for example:":
      "Utilice solo los valores de las variables de enlace, por ejemplo:",
    "Use the following arguments in the URL to change the request:":
      "Utilice los siguientes argumentos en la URL para cambiar la solicitud:",
    "Use the Mimecast integration to manage email security, continuity, and archiving services.":
      "Utilice la integración Mimecast para administrar los servicios de seguridad, continuidad y archivado de correo electrónico.",
    "Use the O365 File Management (Onedrive/Sharepoint/Teams) integration to enable your app to get authorized access to files in OneDrive, SharePoint, and MS Teams across your entire organization. This integration requires admin consent.":
      "Utilice la integración O365 File Management (OneDrive/SharePoint/Teams) para que su aplicación obtenga acceso autorizado a los archivos de OneDrive, SharePoint y MS Teams de toda su organización. Esta integración requiere el consentimiento del administrador.",
    "Use the Proofpoint Threat Response integration to orchestrate and automate incident response.":
      "Utilice la integración Proofpoint Threat Response para orquestar y automatizar la respuesta a incidentes.",
    "Use The ServiceNow IT Service Management (ITSM) solution to modernize the way you manage and deliver services to your users.":
      "Utilice la solución ServiceNow IT Service Management (ITSM) para modernizar la forma de administrar y ofrecer servicios a sus usuarios.",
    "Use the SpecterOpsBloodHoundEnterprise integration to retrieve attack path findings from BloodHound Enterprise to streamline incident creation and investigation.":
      "Utilice la integración SpecterOpsBloodHoundEnterprise para recuperar hallazgos de rutas de ataque de BloodHound Enterprise y agilizar la creación e investigación de incidentes.",
    "Use the Workday IAM Integration as part of the IAM premium pack.":
      "Utilice la integración Workday IAM como parte del paquete premium de IAM.",
    "Use the Zoom integration to manage your Zoom users and meetings.":
      "Utilice la integración Zoom para administrar sus usuarios y reuniones de Zoom.",
    "Use this feed integration to fetch VirusTotal Livehunt notifications as indicators.":
      "Utilice esta integración de feed para recuperar las notificaciones de VirusTotal Livehunt como indicadores.",
    "Use this feed integration to fetch VirusTotal Retrohunt matches.":
      "Utilice esta integración de feed para recuperar las coincidencias de VirusTotal Retrohunt.",
    "Use this integration to connect securely with a ServiceNow Model Context Protocol (MCP) server and access its tools in real time.":
      "Utilice esta integración para conectarse de forma segura a un servidor Model Context Protocol (MCP) de ServiceNow y acceder a sus herramientas en tiempo real.",
    "Use TypeSafe Jev typed judgments and calibrated probabilities in Cortex XSIAM and XSOAR playbooks.":
      "Utilice los juicios tipados y las probabilidades calibradas de TypeSafe Jev en los playbooks de Cortex XSIAM y XSOAR.",
    "Username (Blank when using API key)":
      "Nombre de usuario (en blanco si se usa una clave de API)",
    "Username & Password":
      "Nombre de usuario y contraseña",
    "Username of the repository owner, for example: github.com/repos/{_owner_}/{repo}/issues":
      "Nombre de usuario del propietario del repositorio, por ejemplo: github.com/repos/{_owner_}/{repo}/issues",
    "Uses the Sysdig agent to respond to malicious activity by triggering different actions at the host or container level, such as killing a container, quarantining a file, or performing a system capture.":
      "Utiliza el agente de Sysdig para responder a la actividad maliciosa activando distintas acciones a nivel de host o contenedor, como finalizar un contenedor, poner un archivo en cuarentena o realizar una captura del sistema.",
    "Validate Cortex ASM-discovered exposures with Tenzai's agentic penetration testing. Create a scan for an exposure, poll it to completion, and fetch the verdict and evidence back into the Cortex issue.":
      "Valide las exposiciones descubiertas por Cortex ASM con las pruebas de penetración agénticas de Tenzai. Cree un análisis para una exposición, consúltelo hasta que finalice y recupere el veredicto y las evidencias en el problema de Cortex.",
    "VMware Carbon Black App Control (formerly known as Carbon Black Enterprise Protection) is a next-generation endpoint threat prevention solution to deliver a portfolio of protection policies, real-time visibility across environments, and comprehensive compliance rule sets in a single platform. This integration only supports Carbon Black on-premise APIs.":
      "VMware Carbon Black App Control (anteriormente Carbon Black Enterprise Protection) es una solución de prevención de amenazas para endpoints de última generación que ofrece un conjunto de políticas de protección, visibilidad en tiempo real en todos los entornos y conjuntos completos de reglas de cumplimiento en una única plataforma. Esta integración solo admite las API locales de Carbon Black.",
    "VMware Carbon Black EDR (formerly known as Carbon Black Response).":
      "VMware Carbon Black EDR (anteriormente Carbon Black Response).",
    "Vulnerability management solution to help reduce threat exposure.":
      "Solución de administración de vulnerabilidades que ayuda a reducir la exposición a amenazas.",
    "When ‘Fetch by’ is ‘ID and timestamp’, handling the ID occurs internally and has no reference in the query.":
      "Cuando ‘Fetch by’ es ‘ID and timestamp’, el ID se gestiona internamente y no se hace referencia a él en la consulta.",
    "When ‘Fetch by’ is ‘Unique ascending ID’ or ‘Unique timestamp’, make sure to create the procedure with ‘>’ and not ‘>=’ in the condition on the timestamp/id field.":
      "Cuando ‘Fetch by’ es ‘Unique ascending ID’ o ‘Unique timestamp’, asegúrese de crear el procedimiento con ‘>’ y no ‘>=’ en la condición sobre el campo de marca de tiempo/ID.",
    "When enabled, the integration queries the server using full queries (overwrites the \"Exported Fields\" parameter). Advanced configuration to be used only if instructed by Cortex Support, or you have encountered log errors in the form of: msgpack: invalid code.":
      "Cuando está habilitado, la integración consulta al servidor mediante consultas completas (sobrescribe el parámetro \"Exported Fields\"). Configuración avanzada que solo debe usarse si lo indica el soporte de Cortex o si ha encontrado errores de registro con el formato: msgpack: invalid code.",
    "When Running in On-Demand Mode":
      "Cuando se ejecuta en modo a petición",
    "When set to true and the certificate and private key are provided, the HSTS header is added to all requests.":
      "Cuando se establece en true y se proporcionan el certificado y la clave privada, el encabezado HSTS se agrega a todas las solicitudes.",
    "When using more than one server in High Availability (HA) mode, the External Dynamic List (EDL) should be configured to listen on a route, not on a port.":
      "Cuando se usa más de un servidor en modo de alta disponibilidad (HA), External Dynamic List (EDL) debe configurarse para escuchar en una ruta, no en un puerto.",
    "When using queries, there are two requirements, and the third one depends on the database.":
      "Al usar consultas, hay dos requisitos y un tercero que depende de la base de datos.",
    "Workday offers enterprise-level software solutions for financial management, human resources, and planning.":
      "Workday ofrece soluciones de software de nivel empresarial para la gestión financiera, los recursos humanos y la planificación.",
    "XQL Query Engine enables you to run XQL queries on your data sources.":
      "XQL Query Engine le permite ejecutar consultas XQL en sus fuentes de datos.",
    "XSOAR Indicator Page Size":
      "Tamaño de página de indicadores de XSOAR",
    "You can access the External Dynamic List at the following url:":
      "Puede acceder a External Dynamic List en la siguiente URL:",
    "Zscaler Internet Access via ZIdentity OAuth 2.0. Provides URL/IP/domain classification, denylist and allowlist management, URL category management, sandbox reporting, user and group management, and IP destination group management using OAuth 2.0 client credentials authentication through ZIdentity.":
      "Zscaler Internet Access mediante ZIdentity OAuth 2.0. Proporciona clasificación de URL/IP/dominios, administración de listas de denegación y de permitidos, administración de categorías de URL, informes de sandbox, administración de usuarios y grupos, y administración de grupos de destino IP mediante la autenticación de credenciales de cliente de OAuth 2.0 a través de ZIdentity.",
    "Zscaler is a cloud security solution built for performance and flexible scalability. This integration enables you to manage URL and IP address allow lists and block lists, manage and update categories, get Sandbox reports, create, manage, and update IP destination groups and manually log in, log out, and activate changes in a Zscaler session.":
      "Zscaler es una solución de seguridad en la nube creada para ofrecer rendimiento y una escalabilidad flexible. Esta integración le permite administrar listas de permitidos y de bloqueo de URL y direcciones IP, administrar y actualizar categorías, obtener informes de sandbox, crear, administrar y actualizar grupos de destino IP, e iniciar sesión, cerrar sesión y activar cambios manualmente en una sesión de Zscaler.",

    // --- Batch: Google Workspace / GitHub / GitLab / Terraform / Polygon integration docs and parameters (09:14 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "A maximum of 200 emails per fetch (even if a higher number is configured). Default is 50.":
      "Un máximo de 200 correos electrónicos por recuperación (aunque se configure un número mayor). El valor predeterminado es 50.",
    "A maximum of 200 emails per fetch (even if a higher number is configured). The default is 50.":
      "Un máximo de 200 correos electrónicos por recuperación (aunque se configure un número mayor). El valor predeterminado es 50.",
    "A unique identifier of the customer's Google account.":
      "Un identificador único de la cuenta de Google del cliente.",
    "Add the following variables to the GitHub actions credential store:":
      "Agregue las siguientes variables al almacén de credenciales de GitHub Actions:",
    "Admin Email":
      "Correo electrónico del administrador",
    "Advanced Configuration Parameters":
      "Parámetros de configuración avanzada",
    "Allows you to specify the e-mail address from which to send e-mails from.":
      "Permite especificar la dirección de correo electrónico desde la que se envían los correos.",
    "API Key was generated in 2.":
      "La clave de API se generó en 2.",
    "API to Authorize":
      "API que se autoriza",
    "Application Authorization Flow":
      "Flujo de autorización de la aplicación",
    "Auth Code (run the !gmail-auth-link command to start the auth flow - see Help section)":
      "Código de autenticación (ejecute el comando !gmail-auth-link para iniciar el flujo de autenticación; consulte la sección de ayuda)",
    "Auth Redirect URI":
      "URI de redirección de autenticación",
    "Authorize Application Security to access your GitHub (SaaS) account.":
      "Autorice a Application Security a acceder a su cuenta de GitHub (SaaS).",
    "Authorize Cortex GitHub App":
      "Autorizar Cortex GitHub App",
    "Automatically create user if not found in update and enable commands":
      "Crear automáticamente el usuario si no se encuentra en los comandos de actualización y habilitación",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets.":
      "Antes de comenzar, deberá agregar su clave de API y su ID de API a los secretos de GitHub Actions.",
    "Before you begin, you'll need to add your API key and API ID to the GitHub Actions secrets. Please copy and use the variable names suggested below. If needed, you can generate a new token using the link below, copy and use the generated values as your secrets values.":
      "Antes de comenzar, deberá agregar su clave de API y su ID de API a los secretos de GitHub Actions. Copie y utilice los nombres de variable sugeridos a continuación. Si es necesario, puede generar un nuevo token con el enlace que aparece a continuación y copiar y utilizar los valores generados como valores de sus secretos.",
    "Choose GitHub App Type":
      "Elegir el tipo de GitHub App",
    "Click the role you want to assign (the appropriate role).":
      "Haga clic en el rol que desea asignar (el rol adecuado).",
    "Commands and its scopes":
      "Comandos y sus ámbitos",
    "Configure a service account and retrieve its key in JSON format by following the steps mentioned here:":
      "Configure una cuenta de servicio y obtenga su clave en formato JSON siguiendo los pasos que se indican aquí:",
    "Configure a service account for Google Sheets - (per project)":
      "Configurar una cuenta de servicio para Google Sheets (por proyecto)",
    "Configure an API account on G Suite Admin":
      "Configurar una cuenta de API en G Suite Admin",
    "create a Service Account file with a Private Key and authorize the API":
      "crear un archivo de cuenta de servicio con una clave privada y autorizar la API",
    "Create a Fine-grained Personal Access Token":
      "Crear un Fine-grained Personal Access Token",
    "Create an API token":
      "Crear un token de API",
    "Customer ID":
      "ID de cliente",
    "Cxxxxxxxx is your Immutable Google Apps ID (customerId).":
      "Cxxxxxxxx es su ID inmutable de Google Apps (customerId).",
    "Default reports language":
      "Idioma predeterminado de los informes",
    "Default Search Scope":
      "Ámbito de búsqueda predeterminado",
    "Default to US (app.terraform.io)":
      "Usar US de forma predeterminada (app.terraform.io)",
    "Email - Associate to Google Drive":
      "Correo electrónico: asociar a Google Drive",
    "Email of user":
      "Correo electrónico del usuario",
    "Email of user with admin capabilities":
      "Correo electrónico del usuario con capacidades de administrador",
    "Email of user with admin privileges":
      "Correo electrónico del usuario con privilegios de administrador",
    "Emails":
      "Correos electrónicos",
    "Enable Google Workspace Log Collection":
      "Habilitar la recopilación de registros de Google Workspace",
    "Enable Read-Only Tools":
      "Habilitar herramientas de solo lectura",
    "Enabled Toolsets":
      "Conjuntos de herramientas habilitados",
    "Events query (e.g. \"from:Demisto\")":
      "Consulta de eventos (p. ej., \"from:Demisto\")",
    "Events query (e.g., \"from:example@demisto.com\")":
      "Consulta de eventos (p. ej., \"from:example@demisto.com\")",
    "Events search query":
      "Consulta de búsqueda de eventos",
    "Events user key":
      "Clave de usuario de eventos",
    "Events user key (e.g. example@demisto.com)":
      "Clave de usuario de eventos (p. ej., example@demisto.com)",
    "Existing Customer Owned GitHub App":
      "GitHub App existente propiedad del cliente",
    "First fetch timestamp, in days.":
      "Marca de tiempo de la primera recuperación, en días.",
    "Follow the steps here to create such a private key and authorize the API for usage:":
      "Siga estos pasos para crear una clave privada de este tipo y autorizar la API para su uso:",
    "For detailed documentation on available toolsets, refer to:":
      "Para obtener documentación detallada sobre los conjuntos de herramientas disponibles, consulte:",
    "For the email user param, please choose a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "Para el parámetro de usuario de correo electrónico, elija un usuario con permisos de administrador y asegúrese de seguir los pasos para realizar la Google Apps Domain-Wide Delegation of Authority.",
    "For the email user parameter, select a user with admin permissions and make sure that you follow the steps to perform Google Apps Domain-Wide Delegation of Authority.":
      "Para el parámetro de usuario de correo electrónico, seleccione un usuario con permisos de administrador y asegúrese de seguir los pasos para realizar la Google Apps Domain-Wide Delegation of Authority.",
    "Function":
      "Función",
    "Go to Admin roles.":
      "Vaya a Admin roles.",
    "Google documentation":
      "documentación de Google",
    "Google Sheets Integration":
      "Integración de Google Sheets",
    "Google Sheets is a spreadsheet program that is part of the free cloud-based Google Docs Editors suite offered by Google.":
      "Google Sheets es un programa de hojas de cálculo que forma parte del conjunto gratuito basado en la nube Google Docs Editors, ofrecido por Google.",
    "Google’s API Documentation":
      "Documentación de la API de Google",
    "Grant the Compute Admin permission to the Service Account to enable the Service Account to perform certain Google Cloud API commands.":
      "Conceda el permiso Compute Admin a la cuenta de servicio para que pueda ejecutar determinados comandos de la API de Google Cloud.",
    "If a non-admin user is the user for the integration’s parameter, the test button will fail on a 403 error.":
      "Si el usuario del parámetro de la integración no es administrador, el botón de prueba fallará con un error 403.",
    "If no toolsets are selected, GitHub's default toolsets 'context', 'repos', 'issues', 'pull_requests', and 'users' will be enabled.":
      "Si no se selecciona ningún conjunto de herramientas, se habilitarán los conjuntos predeterminados de GitHub 'context', 'repos', 'issues', 'pull_requests' y 'users'.",
    "Immutable Google Apps ID":
      "ID inmutable de Google Apps",
    "In Cortex, configure an instance of the Google Cloud Compute integration. For the Service Account Private Key parameter, add the Service Account Private Key file contents (JSON).":
      "En Cortex, configure una instancia de la integración Google Cloud Compute. En el parámetro Service Account Private Key, agregue el contenido (JSON) del archivo de clave privada de la cuenta de servicio.",
    "In order to fetch user roles, please authrize this api too:":
      "Para recuperar los roles de usuario, autorice también esta API:",
    "In order to revoke user roles, please authrize this api too:":
      "Para revocar los roles de usuario, autorice también esta API:",
    "In order to revoke/fetch user role, you will need the Immutable Google Apps ID param.":
      "Para revocar o recuperar roles de usuario, necesitará el parámetro Immutable Google Apps ID.",
    "In order to search user mailboxes, please authrize this api too:":
      "Para buscar en los buzones de los usuarios, autorice también esta API:",
    "In order to to fetch mobile info, please authrize this api too:":
      "Para recuperar la información de dispositivos móviles, autorice también esta API:",
    "In order to to fetch user security tokens, please authrize this api too:":
      "Para recuperar los tokens de seguridad de los usuarios, autorice también esta API:",
    "In order to to preform actions on chorme devices, please authrize this api too:":
      "Para realizar acciones en dispositivos Chrome, autorice también esta API:",
    "In order to to preform actions on mobile devices, please authrize this api too:":
      "Para realizar acciones en dispositivos móviles, autorice también esta API:",
    "It is necessary to authrize the next API’s for that service account:":
      "Es necesario autorizar las siguientes API para esa cuenta de servicio:",
    "Mailbox actions do not require admin previleges.":
      "Las acciones de buzón no requieren privilegios de administrador.",
    "Maximum number of emails to pull per fetch":
      "Número máximo de correos electrónicos que se obtienen por recuperación",
    "Must be a valid URL":
      "Debe ser una URL válida",
    "Navigate to Profile and click Generate auth token.":
      "Vaya a Profile y haga clic en Generate auth token.",
    "Open THF Huntbox web interface. (It may be like https://huntbox.group-ib.com)":
      "Abra la interfaz web de THF Huntbox (puede ser similar a https://huntbox.group-ib.com).",
    "Organization domain URL":
      "URL del dominio de la organización",
    "Please follow the documentation below for step by step guide on how to onboard your GitLab instance":
      "Siga la documentación que aparece a continuación para obtener una guía paso a paso sobre cómo incorporar su instancia de GitLab",
    "Precedence of this will be admin_email in the command argument > admin email in the integration configuration > admin role provided to the service account.":
      "El orden de prioridad es: admin_email en el argumento del comando > correo electrónico del administrador en la configuración de la integración > rol de administrador asignado a la cuenta de servicio.",
    "Provide at least one of the scopes mentioned for each command.":
      "Proporcione al menos uno de los ámbitos mencionados para cada comando.",
    "Raise error an empty result":
      "Generar un error si el resultado está vacío",
    "Register":
      "Registrar",
    "Review the requested permissions and select repository access for Application Security:":
      "Revise los permisos solicitados y seleccione el acceso a repositorios para Application Security:",
    "Revoke/Fetch User Roles":
      "Revocar/recuperar roles de usuario",
    "See the Help tab for details on the Immutable Google Apps ID.":
      "Consulte la pestaña de ayuda para obtener información sobre Immutable Google Apps ID.",
    "Select a GitHub organization where you want to install Application Security.":
      "Seleccione una organización de GitHub en la que desea instalar Application Security.",
    "Select Organization":
      "Seleccionar organización",
    "Select Workspaces":
      "Seleccionar áreas de trabajo",
    "Send as":
      "Enviar como",
    "Server URL (e.g., https://huntbox.group-ib.com)":
      "URL del servidor (p. ej., https://huntbox.group-ib.com)",
    "Service Account Key":
      "Clave de la cuenta de servicio",
    "Service account private key file contents (JSON)":
      "Contenido del archivo de clave privada de la cuenta de servicio (JSON)",
    "Service Account Private Key file contents (JSON)":
      "Contenido del archivo de clave privada de la cuenta de servicio (JSON)",
    "Terraform Region":
      "Región de Terraform",
    "the Integration Documentation":
      "documentación de la integración",
    "The Personal Access Token is used to authenticate requests to the GitLab REST API. It must have the required permissions to access your organization's configuration.":
      "El Personal Access Token se utiliza para autenticar las solicitudes a la API REST de GitLab. Debe tener los permisos necesarios para acceder a la configuración de su organización.",
    "The required admin permissions are only used for user actions (i.e., creating users, getting user informations, deleting users):":
      "Los permisos de administrador necesarios solo se utilizan para acciones de usuario (es decir, crear usuarios, obtener información de usuarios y eliminar usuarios):",
    "The scope for this API":
      "El ámbito de esta API",
    "There you will see URLs in the format:":
      "Allí verá URL con el siguiente formato:",
    "This section explains how to configure the instance of Polygon in Cortex.":
      "Esta sección explica cómo configurar la instancia de Polygon en Cortex.",
    "To allow Cortex to access Gmail, you will need to create an OAuth2 App and approve the authorization flow. Please see the full documentation at:":
      "Para permitir que Cortex acceda a Gmail, deberá crear una aplicación OAuth2 y aprobar el flujo de autorización. Consulte la documentación completa en:",
    "To create a new token:":
      "Para crear un nuevo token:",
    "To get an Immutable Google Apps ID (or customerId):":
      "Para obtener un Immutable Google Apps ID (o customerId):",
    "Token":
      "Token",
    "Transporter Connection":
      "Conexión del transportador",
    "Use the Google Maps Geocoding API.":
      "Utiliza la API Google Maps Geocoding.",
    "Use this integration to create, get, modify, and format spreadsheets.":
      "Utilice esta integración para crear, obtener, modificar y dar formato a hojas de cálculo.",
    "Use this to specify the email account to search for messages with the search query. By default, the integration uses the email address specified in the credentials.":
      "Utilice esto para especificar la cuenta de correo electrónico en la que se buscarán mensajes con la consulta de búsqueda. De forma predeterminada, la integración usa la dirección de correo electrónico especificada en las credenciales.",
    "Used for searching emails in the inbox. The query language follows the Gmail query specification. For example, \"from:example@demisto.com is:unread\".":
      "Se utiliza para buscar correos electrónicos en la bandeja de entrada. El lenguaje de consulta sigue la especificación de consultas de Gmail. Por ejemplo, \"from:example@demisto.com is:unread\".",
    "User or Team Token":
      "Token de usuario o de equipo",
    "user settings":
      "configuración de usuario",
    "User's Service Account JSON":
      "JSON de la cuenta de servicio del usuario",
    "When enabled, limits tools to read-only operations preventing any write/modification actions.":
      "Cuando está habilitado, limita las herramientas a operaciones de solo lectura e impide cualquier acción de escritura o modificación.",
    "You must be signed in as a super administrator for this task.":
      "Debe haber iniciado sesión como superadministrador para realizar esta tarea.",
    "You will see there URLs in the format:":
      "Allí verá URL con el siguiente formato:",
    "Your private GitLab instance URL. For example, https://gitlab.example.com.":
      "La URL de su instancia privada de GitLab. Por ejemplo, https://gitlab.example.com.",
    "Your server URL is the same as your Huntbox web interface URL.":
      "La URL de su servidor es la misma que la URL de la interfaz web de Huntbox.",

    // --- Batch: Integration docs, parameter labels and tooltips for many integrations (12:04 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(default) — Auto-detect based on the platform.":
      "(predeterminado) — Detección automática según la plataforma.",
    "(e.g., https://192.168.0.1)":
      "(p. ej., https://192.168.0.1)",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are supported only using engine.":
      "(Para Cortex) Para usar con HTTPS: el certificado que debe utilizar el servicio. (Para Cortex y Cortex XSIAM) Los certificados personalizados solo se admiten mediante un motor.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex or Cortex XSIAM server.":
      "(Para Cortex) Para usar con HTTPS: la clave privada que debe utilizar el servicio. (Para Cortex y Cortex XSIAM) Si utiliza un motor, configure una clave de API privada. No se admite en el servidor de Cortex ni de Cortex XSIAM.",
    "(for runtime scanning operations only)":
      "(solo para operaciones de análisis en tiempo de ejecución)",
    "(if not already enabled)":
      "(si aún no está habilitado)",
    "(OAuth2 credentials for the management API)":
      "(credenciales de OAuth2 para la API de administración)",
    "(optional) Configure a classifier and a mapper":
      "(opcional) Configure un clasificador y un asignador",
    "(Optional) Create custom fields.":
      "(Opcional) Cree campos personalizados.",
    "2FA Token":
      "Token de 2FA",
    "A comma-separated list of Application IDs. Run the ***saas-security-get-apps*** command to return the **Application ID**, **Name**, and **Type** for all applications.":
      "Lista de ID de aplicación separados por comas. Ejecute el comando ***saas-security-get-apps*** para obtener el **Application ID**, el **Name** y el **Type** de todas las aplicaciones.",
    "A comma-separated list of ciphers to use. If none of the specified ciphers are agreed to by the server, an error message specifying the supported ciphers is returned.":
      "Lista de cifrados separados por comas que se utilizarán. Si el servidor no acepta ninguno de los cifrados especificados, se devuelve un mensaje de error que indica los cifrados admitidos.",
    "A comma-separated list of data profile names to request an exemption. Use \"*\" to allow everything.":
      "Lista de nombres de perfiles de datos separados por comas para los que se solicita una exención. Utilice \"*\" para permitir todo.",
    "A comma-separated list of incident types to fetch from iZOOlogic.":
      "Lista de tipos de incidentes separados por comas que se recuperarán de iZOOlogic.",
    "A comma-separated list of key algorithms to use. If none of the specified key algorithms are agreed to by the server, an error message specifying the supported key algorithms is returned.":
      "Lista de algoritmos de clave separados por comas que se utilizarán. Si el servidor no acepta ninguno de los algoritmos de clave especificados, se devuelve un mensaje de error que indica los algoritmos de clave admitidos.",
    "A comma-separated list of Splunk status labels to mirror as closed Cortex incident (Example: Resolved,False-Positive).":
      "Lista de etiquetas de estado de Splunk, separadas por comas, que se reflejarán como incidente de Cortex cerrado (ejemplo: Resolved,False-Positive).",
    "A command fails with a quota or payment error.":
      "Un comando falla con un error de cuota o de pago.",
    "A command returns “no known finding” for an indicator you expect to be flagged.":
      "Un comando devuelve “no known finding” para un indicador que se espera que se marque.",
    "A CSV list of broker URLs in the format: [ssl://]<hostname>[:port]) Get the hostname and port from the `brokerlist.properties` file (in instructions). The broker should be reachable from Demisto server.":
      "Lista CSV de URL de brokers con el formato: [ssl://]<hostname>[:port]). Obtenga el nombre de host y el puerto del archivo `brokerlist.properties` (en las instrucciones). El broker debe ser accesible desde el servidor de Demisto.",
    "A CSV of language codes of the language to use for OCR (leave empty to use defaults).":
      "CSV de códigos del idioma que se utilizará para OCR (déjelo vacío para usar los valores predeterminados).",
    "A space-separated list of scopes that you want to consent to.":
      "Lista de ámbitos, separados por espacios, a los que desea dar su consentimiento.",
    "A Tenzai license is required to use this integration.":
      "Se requiere una licencia de Tenzai para utilizar esta integración.",
    "A valid Magnet Automate instance.":
      "Una instancia válida de Magnet Automate.",
    "About team member product roles and access":
      "Acerca de los roles de producto y el acceso de los miembros del equipo",
    "Access ID - can be created in Sumo Logic under \"Settings\"":
      "ID de acceso: se puede crear en Sumo Logic, en \"Settings\"",
    "Access key - can be created in Sumo Logic under \"Settings\"":
      "Clave de acceso: se puede crear en Sumo Logic, en \"Settings\"",
    "Access the Panorama UI.":
      "Acceda a la interfaz de usuario de Panorama.",
    "Access to Threatmon’s external API endpoints.":
      "Acceso a los endpoints de API externos de Threatmon.",
    "Access tokens are cached in the integration context and automatically refreshed when they expire.":
      "Los tokens de acceso se almacenan en caché en el contexto de la integración y se actualizan automáticamente cuando caducan.",
    "Access Your API Key":
      "Acceso a su clave de API",
    "Access Your Kenna API Key":
      "Acceso a su clave de API de Kenna",
    "Access your VMRay environment.":
      "Acceda a su entorno de VMRay.",
    "Account ID (OAuth)":
      "ID de cuenta (OAuth)",
    "Account identifier":
      "Identificador de cuenta",
    "Add a incident name to be used for the created incident (if a mapper is not used)":
      "Agregue un nombre de incidente que se utilizará para el incidente creado (si no se utiliza un asignador)",
    "Add an instance of the integration and add the Workflow URL for the Teams channel.":
      "Agregue una instancia de la integración y agregue la Workflow URL del canal de Teams.",
    "Add and map the custom field to the necessary mapper(s).":
      "Agregue el campo personalizado y asígnelo a los asignadores necesarios.",
    "Add Custom Indicator Fields":
      "Agregar campos de indicador personalizados",
    "Add or create a service account with the proper privileges.":
      "Agregue o cree una cuenta de servicio con los privilegios adecuados.",
    "Add or remove Chrome options used to rasterize. Use for advanced troubleshooting. See Help.":
      "Agregue o elimine las opciones de Chrome utilizadas para la rasterización. Utilícelo para la solución avanzada de problemas. Consulte la Ayuda.",
    "Add relevant scopes.":
      "Agregue los ámbitos pertinentes.",
    "Add the Demisto Bot to a Team":
      "Agregue el Demisto Bot a un equipo",
    "Add the integration instance in Cortex":
      "Agregue la instancia de integración en Cortex",
    "Add this tag to an entry to mirror it as a comment from Splunk.":
      "Agregue esta etiqueta a una entrada para reflejarla como comentario desde Splunk.",
    "Add this tag to an entry to mirror it as a comment to Splunk.":
      "Agregue esta etiqueta a una entrada para reflejarla como comentario en Splunk.",
    "Additional connection parameters":
      "Parámetros de conexión adicionales",
    "Additional malicious verdicts":
      "Veredictos maliciosos adicionales",
    "Additional Password":
      "Contraseña adicional",
    "Additional Resources":
      "Recursos adicionales",
    "Additional Splunk status labels to close on mirror (Incoming Mirroring)":
      "Etiquetas de estado de Splunk adicionales que se cerrarán al reflejar (reflejo entrante)",
    "Address Type":
      "Tipo de dirección",
    "After adding the Cortex app, you will get an Access Token and Bot Token, which should be inserted in the integration instance configuration’s corresponding fields.":
      "Después de agregar la aplicación de Cortex, obtendrá un token de acceso y un token de bot, que deben introducirse en los campos correspondientes de la configuración de la instancia de integración.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which need to be added to the relevant integration instance settings fields.":
      "Después de autorizar la aplicación de Cortex, obtendrá un ID, un token y una clave que deben agregarse a los campos correspondientes de la configuración de la instancia de integración.",
    "After authorizing the Cortex app, you will get an ID, Token, and Key which should be inserted in the relevant integration instance settings fields.":
      "Después de autorizar la aplicación de Cortex, obtendrá un ID, un token y una clave que deben introducirse en los campos correspondientes de la configuración de la instancia de integración.",
    "After you configure an integration instance, the first fetch will sychronize all Workday users (employees) in XSOAR by creating a User Profile indicator for each employee. The User Profile indicators store all employee profiles data, such as the employee’s name, street address, phone number, email address, etc.":
      "Después de configurar una instancia de integración, la primera recuperación sincronizará todos los usuarios (empleados) de Workday en XSOAR creando un indicador User Profile para cada empleado. Los indicadores User Profile almacenan todos los datos de perfil del empleado, como su nombre, dirección postal, número de teléfono, dirección de correo electrónico, etc.",
    "After you successfully execute a command, a DBot message appears in the War Room with the command details.":
      "Después de ejecutar correctamente un comando, aparece un mensaje de DBot en la War Room con los detalles del comando.",
    "AIOps integration":
      "Integración de AIOps",
    "Algorithm to sign generated JWT tokens with. Doesn't affect integration's functionality. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Algoritmo con el que se firman los tokens JWT generados. No afecta a la funcionalidad de la integración. Es obligatorio y se utiliza si se emplea OAuth 2.0 para la autenticación. Consulte las instrucciones detalladas en la pestaña 'Help'.",
    "An administrator must have a role that includes access to a specific REST API.":
      "Un administrador debe tener un rol que incluya acceso a una API REST específica.",
    "An API key generated from the Magnet Automate interface.":
      "Una clave de API generada desde la interfaz de Magnet Automate.",
    "Analyze files and URLs using the SecneurX Analysis for accurate threat intelligence and high-quality IOCs.":
      "Analice archivos y URL con SecneurX Analysis para obtener inteligencia de amenazas precisa e IOC de alta calidad.",
    "Analyze retro hunts, read live hunt notification,s and download files from VirusTotal.":
      "Analice retro hunts, lea las notificaciones de live hunt y descargue archivos de VirusTotal.",
    "Another point to note is that Splunk’s searches are based on the occurrence time behind the scenes. Meaning, Splunk itself uses occurrence time as its determining factor for bucket division and search.":
      "Otro punto a tener en cuenta es que las búsquedas de Splunk se basan internamente en la hora de ocurrencia. Es decir, Splunk utiliza la hora de ocurrencia como factor determinante para la división en buckets y la búsqueda.",
    "Any tags removed from the Vectra entity will not be removed in the XSOAR incident, as XSOAR doesn’t allow the removal of the tags field via the backend. However, tags removed from the XSOAR incident UI will be removed from the Vectra entity.":
      "Las etiquetas eliminadas de la entidad de Vectra no se eliminarán del incidente de XSOAR, ya que XSOAR no permite eliminar el campo de etiquetas a través del backend. Sin embargo, las etiquetas eliminadas desde la interfaz de usuario del incidente de XSOAR se eliminarán de la entidad de Vectra.",
    "API 1.0 Authentication":
      "Autenticación de API 1.0",
    "API 2.0 Authentication":
      "Autenticación de API 2.0",
    "API Access":
      "Acceso a la API",
    "API Client ID and API Client Secret":
      "ID de cliente de API y secreto de cliente de API",
    "API connection":
      "Conexión de API",
    "API Host":
      "Host de la API",
    "API Key (CB Defense)":
      "Clave de API (CB Defense)",
    "API Key (Deprecated)":
      "Clave de API (obsoleta)",
    "API Key (JWT-Deprecated)":
      "Clave de API (JWT-obsoleta)",
    "API Key (Recommended)":
      "Clave de API (recomendada)",
    "API key and API token are generate by Lastline and given at the subscription time.":
      "La clave de API y el token de API los genera Lastline y se entregan en el momento de la suscripción.",
    "API Key Auth":
      "Autenticación con clave de API",
    "API Key Auth (http_api_key)":
      "Autenticación con clave de API (http_api_key)",
    "API Key for accessing Lastline APIs":
      "Clave de API para acceder a las API de Lastline",
    "API Key Secret":
      "Secreto de la clave de API",
    "API Key Type":
      "Tipo de clave de API",
    "API Permissions in Microsoft Graph":
      "Permisos de API en Microsoft Graph",
    "API Port":
      "Puerto de la API",
    "API Port (e.g 443)":
      "Puerto de la API (p. ej., 443)",
    "API Secret (JWT-Deprecated)":
      "Secreto de API (JWT-obsoleto)",
    "API Token (CB Response)":
      "Token de API (CB Response)",
    "API Token (see detailed instructions)":
      "Token de API (consulte las instrucciones detalladas)",
    "API Token (see Detailed Instructions)":
      "Token de API (consulte las instrucciones detalladas)",
    "API Token for accessing Lastline APIs":
      "Token de API para acceder a las API de Lastline",
    "API tokens have the same permissions as the user who creates them, and if the permissions of a user change, so do the permissions of the API token.":
      "Los tokens de API tienen los mismos permisos que el usuario que los crea y, si cambian los permisos de un usuario, también cambian los del token de API.",
    "API version of QRadar (e.g., '12.0'). Minimum API version is 10.1. Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "Versión de la API de QRadar (p. ej., '12.0'). La versión mínima de la API es 10.1. Desde la API v19 de QRadar, los campos de marca de tiempo deben proporcionarse en formato epoch en milisegundos en lugar de segundos.",
    "App ID":
      "ID de aplicación",
    "App Token":
      "Token de aplicación",
    "App-only authentication":
      "Autenticación solo de aplicación",
    "Application ID / Client ID":
      "ID de aplicación / ID de cliente",
    "Application ID or Client ID":
      "ID de aplicación o ID de cliente",
    "Application redirect URI":
      "URI de redirección de la aplicación",
    "Application Redirect URI":
      "URI de redirección de la aplicación",
    "Application redirect URI (for authorization code mode)":
      "URI de redirección de la aplicación (para el modo de código de autorización)",
    "Application redirect URI (for Authorization Code mode)":
      "URI de redirección de la aplicación (para el modo de código de autorización)",
    "Application redirect URI (required for self-deployed Azure app)":
      "URI de redirección de la aplicación (obligatorio para una aplicación de Azure autoimplementada)",
    "Application Secret (Required for using Self Deployed Azure app)":
      "Secreto de la aplicación (obligatorio para usar una aplicación de Azure autoimplementada)",
    "Argument Name":
      "Nombre del argumento",
    "As an alternative to Okta API tokens, you can interact with Okta APIs using scoped OAuth 2.0 access tokens for a number of Okta endpoints.":
      "Como alternativa a los tokens de API de Okta, puede interactuar con las API de Okta mediante tokens de acceso OAuth 2.0 con ámbito para varios endpoints de Okta.",
    "As soon as the instance is set-up, the first pull will get the alarms generated in the last 10 minutes. After that, new alarms will be fetched every other minute, starting the last pull index.":
      "En cuanto se configure la instancia, la primera extracción obtendrá las alarmas generadas en los últimos 10 minutos. Después, se recuperarán alarmas nuevas cada dos minutos, a partir del último índice de extracción.",
    "As the enrichment process is asynchronous, fetching enriched incidents takes longer. The integration was tested with 20+ notables simultaneously that were fetched and enriched after approximately ~4min.":
      "Como el proceso de enriquecimiento es asíncrono, la recuperación de incidentes enriquecidos tarda más. La integración se probó con más de 20 notables recuperados y enriquecidos simultáneamente, lo que tardó aproximadamente 4 minutos.",
    "Asset enrichment lookup tables":
      "Tablas de búsqueda de enriquecimiento de activos",
    "Asset search enrichment":
      "Enriquecimiento de la búsqueda de activos",
    "Assign Prisma AIRS AI Red Teaming API permissions":
      "Asigne los permisos de la API de Prisma AIRS AI Red Teaming",
    "Assign Prisma AIRS AI Runtime Security API permissions":
      "Asigne los permisos de la API de Prisma AIRS AI Runtime Security",
    "Assign Prisma AIRS AI Supply Chain Security API permissions":
      "Asigne los permisos de la API de Prisma AIRS AI Supply Chain Security",
    "Audit log type filter":
      "Filtro de tipo de registro de auditoría",
    "Authenticate using an API-Key":
      "Autenticación mediante clave de API",
    "Authentication Configuration":
      "Configuración de autenticación",
    "Authentication Flow":
      "Flujo de autenticación",
    "Authentication URL":
      "URL de autenticación",
    "Authentication using API Token":
      "Autenticación mediante token de API",
    "Authentication using Azure Managed Identities":
      "Autenticación mediante identidades administradas de Azure",
    "Authentication using OAuth 2.0 Authentication":
      "Autenticación mediante autenticación OAuth 2.0",
    "Authentication Using the Authorization Code Flow (Delegated Permissions)":
      "Autenticación mediante el flujo de código de autorización (permisos delegados)",
    "Authentication Using the Client Credentials Flow (Application Permissions)":
      "Autenticación mediante el flujo de credenciales de cliente (permisos de aplicación)",
    "Authentication Using the User - Authorization Code Flow":
      "Autenticación mediante usuario: flujo de código de autorización",
    "Authorization code (for self-deployed mode)":
      "Código de autorización (para el modo autoimplementado)",
    "Authorization code (required for self-deployed Azure app)":
      "Código de autorización (obligatorio para una aplicación de Azure autoimplementada)",
    "Authorization code (run msgraph-generate-login-url command)":
      "Código de autorización (ejecute el comando msgraph-generate-login-url)",
    "Authorization Code flow (Delegated Permissions)":
      "Flujo de código de autorización (permisos delegados)",
    "Authorization code on behalf of a user, used with self deployed Azure Applications.":
      "Código de autorización en nombre de un usuario, utilizado con aplicaciones de Azure autoimplementadas.",
    "Authorize Cortex for Entra ID Users (Self deployed Azure App)":
      "Autorizar Cortex para usuarios de Entra ID (aplicación de Azure autoimplementada)",
    "Auto Activate Changes":
      "Activar cambios automáticamente",
    "Auto Logout":
      "Cierre de sesión automático",
    "Automatically fetch and ingest Threatmon alarms as XSOAR incidents.":
      "Recupere e ingiera automáticamente las alarmas de Threatmon como incidentes de XSOAR.",
    "Available integrations":
      "Integraciones disponibles",
    "Base Command":
      "Comando base",
    "Base url to Shodan API":
      "URL base de la API de Shodan",
    "Based on what data needs to be pulled in through the integration, update the Domain Security Policy Permissions as well as Business Process Security Policy Permissions.":
      "En función de los datos que deban obtenerse a través de la integración, actualice los permisos de la política de seguridad de dominio y los permisos de la política de seguridad de procesos de negocio.",
    "Basic Auth":
      "Autenticación básica",
    "Basic Auth (http)":
      "Autenticación básica (http)",
    "Basic authentication - Fill in the email and password.":
      "Autenticación básica: introduzca el correo electrónico y la contraseña.",
    "Basic authentication - Fill in the Email and password.":
      "Autenticación básica: introduzca el correo electrónico y la contraseña.",
    "Basic authentication - Fill in the User Principal Name (UPN) and password.":
      "Autenticación básica: introduzca el nombre principal de usuario (UPN) y la contraseña.",
    "Basic authorization using username and password.":
      "Autorización básica mediante nombre de usuario y contraseña.",
    "Bearer Auth":
      "Autenticación Bearer",
    "Bearer Auth (http)":
      "Autenticación Bearer (http)",
    "Before creating an API client, ensure that you create an API role with all the required privileges as mentioned in the integration documentation. Then, associate the API client with that role.":
      "Antes de crear un cliente de API, asegúrese de crear un rol de API con todos los privilegios necesarios que se indican en la documentación de la integración. A continuación, asocie el cliente de API a ese rol.",
    "Before you configure the integration, retrieve the API key from your Joe Security environment.":
      "Antes de configurar la integración, obtenga la clave de API de su entorno de Joe Security.",
    "BloodHound Enterprise Domain":
      "Dominio de BloodHound Enterprise",
    "BloodHound Enterprise Domain (for example, https://example.bloodhoundenterprise.io)":
      "Dominio de BloodHound Enterprise (por ejemplo, https://example.bloodhoundenterprise.io)",
    "BloodHound Enterprise Domain URL":
      "URL del dominio de BloodHound Enterprise",
    "BloodHound Enterprise reduces risk in Active Directory and Microsoft Azure environments by continuously identifying and quantifying attack paths that attackers use to escalate privileges. The SpecterOps BloodHound Enterprise integration enables automated retrieval of attack path findings from BloodHound into Cortex, streamlining incident creation and investigation.":
      "BloodHound Enterprise reduce el riesgo en los entornos de Active Directory y Microsoft Azure al identificar y cuantificar de forma continua las rutas de ataque que los atacantes utilizan para escalar privilegios. La integración de SpecterOps BloodHound Enterprise permite recuperar automáticamente los hallazgos de rutas de ataque de BloodHound en Cortex, lo que agiliza la creación y la investigación de incidentes.",
    "Bot Client ID":
      "ID de cliente del bot",
    "Bot Client ID ((Team Chat App))":
      "ID de cliente del bot ((Team Chat App))",
    "Bot Client Secret (Team Chat App)":
      "Secreto de cliente del bot (Team Chat App)",
    "Bot display name in Slack":
      "Nombre para mostrar del bot en Slack",
    "Bot display name in Slack (Cortex by default)":
      "Nombre para mostrar del bot en Slack (Cortex de forma predeterminada)",
    "Bot icon in Slack - Image URL (Cortex icon by default)":
      "Icono del bot en Slack - URL de la imagen (de forma predeterminada, el icono de Cortex)",
    "Bot ID":
      "ID del bot",
    "Bot Message":
      "Mensaje del bot",
    "Bot Password":
      "Contraseña del bot",
    "Bot Secret ID":
      "ID secreto del bot",
    "Bot Token":
      "Token del bot",
    "Build a playbook and assign it as the default for this incident type.":
      "Cree un playbook y asígnelo como predeterminado para este tipo de incidente.",
    "Build a query to return relevant alerts.":
      "Cree una consulta para devolver las alertas relevantes.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Semgrep's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Al hacer clic en \"Autorizar\", usted autoriza a Palo Alto Networks a (i) ingerir datos y realizar acciones, como la supresión, en su nombre hacia y desde la API pública de Semgrep, y (ii) procesar posteriormente dichos datos para prestarle nuestros servicios. Usted confirma que tiene derecho a otorgar dicha autorización.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Snyk's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Al hacer clic en \"Autorizar\", usted autoriza a Palo Alto Networks a (i) ingerir datos y realizar acciones, como la supresión, en su nombre hacia y desde la API pública de Snyk, y (ii) procesar posteriormente dichos datos para prestarle nuestros servicios. Usted confirma que tiene derecho a otorgar dicha autorización.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from SonarQube's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Al hacer clic en \"Autorizar\", usted autoriza a Palo Alto Networks a (i) ingerir datos y realizar acciones, como la supresión, en su nombre hacia y desde la API pública de SonarQube, y (ii) procesar posteriormente dichos datos para prestarle nuestros servicios. Usted confirma que tiene derecho a otorgar dicha autorización.",
    "By clicking \"Authorize\", you hereby authorize Palo Alto Networks to (i) ingest data and perform actions such as suppression on behalf of you to and from Veracode's public API, and (ii) further process such data to deliver our services to you. You confirm that you have the right to provide such authorization.":
      "Al hacer clic en \"Autorizar\", usted autoriza a Palo Alto Networks a (i) ingerir datos y realizar acciones, como la supresión, en su nombre hacia y desde la API pública de Veracode, y (ii) procesar posteriormente dichos datos para prestarle nuestros servicios. Usted confirma que tiene derecho a otorgar dicha autorización.",
    "By default, SSL verification is enabled. If selected, the connection isn’t secure and all requests return an SSL error because the certificate cannot be verified.":
      "De forma predeterminada, la verificación SSL está habilitada. Si se selecciona, la conexión no es segura y todas las solicitudes devuelven un error SSL porque no se puede verificar el certificado.",
    "By default, the integration fetches incidents in an open state.":
      "De forma predeterminada, la integración recupera los incidentes en estado abierto.",
    "By default, the Kafka instance uses a non SSL connection. Turnning on the insecure flag, or providing any certificate will switch to SSL connection.":
      "De forma predeterminada, la instancia de Kafka utiliza una conexión sin SSL. Al activar el indicador insecure o proporcionar cualquier certificado, se cambiará a una conexión SSL.",
    "CA certificate of Kafka server (type pem)":
      "Certificado de CA del servidor de Kafka (tipo pem)",
    "Certificate (Required for HTTPS)":
      "Certificado (obligatorio para HTTPS)",
    "Certificate Password":
      "Contraseña del certificado",
    "Certificate Thumbprint (can be used instead of Client Secret)":
      "Huella digital del certificado (puede utilizarse en lugar de Client Secret)",
    "Certificate Thumbprint (optional for self-deployed Azure app)":
      "Huella digital del certificado (opcional para aplicaciones de Azure autoimplementadas)",
    "Chat and channel monitoring, data security scanning, and security posture for Teams":
      "Supervisión de chats y canales, análisis de seguridad de datos y postura de seguridad para Teams",
    "Check “Fetches-incidents” radio button":
      "Seleccione el botón de opción “Fetches-incidents”",
    "Check this box to use OAuth 2.0 authentication. See (?) for more information.":
      "Marque esta casilla para utilizar la autenticación OAuth 2.0. Consulte (?) para obtener más información.",
    "Check Trust any certificate (not secure) checkbox":
      "Marque la casilla Confiar en cualquier certificado (no seguro)",
    "Choose a device group name.":
      "Elija un nombre de grupo de dispositivos.",
    "Choose if to check “Fetch Existing Alerts” and/or “Also Fetch Informational Alerts” checkboxes":
      "Elija si desea marcar las casillas “Fetch Existing Alerts” y/o “Also Fetch Informational Alerts”",
    "Choose max fetch (up to 200)":
      "Elija el máximo de recuperaciones (hasta 200)",
    "Choose Orca Alert - Classification as your classifier":
      "Elija Orca Alert - Classification como clasificador",
    "Choose Orca Mapper as your mapper":
      "Elija Orca Mapper como asignador",
    "Choose which Microsoft 365 services to connect. Each service maps to specific Microsoft Graph API permissions.":
      "Elija los servicios de Microsoft 365 que desea conectar. Cada servicio se asigna a permisos específicos de Microsoft Graph API.",
    "Choose your API version":
      "Elija su versión de API",
    "Chrome options (Advanced. See [?])":
      "Opciones de Chrome (avanzado; consulte [?])",
    "Classification description (only human readable)":
      "Descripción de la clasificación (solo legible por personas)",
    "Classification long name":
      "Nombre largo de la clasificación",
    "Classifiers and Mappers":
      "Clasificadores y asignadores",
    "Clear the “Query only application events configured in IAM Configuration” checkbox to use a custom fetch query filter expression. The expression must be in SCIM syntax, and include the add and remove event types, as well as the application ID.":
      "Desmarque la casilla “Query only application events configured in IAM Configuration” para utilizar una expresión de filtro de consulta de recuperación personalizada. La expresión debe estar en sintaxis SCIM e incluir los tipos de evento de adición y eliminación, así como el ID de la aplicación.",
    "Click “Test” button to make sure Api Key is valid and then click the “Done” button":
      "Haga clic en el botón “Test” para asegurarse de que la clave de API sea válida y, a continuación, haga clic en el botón “Done”",
    "Click “Test” to validate the connection.":
      "Haga clic en “Test” para validar la conexión.",
    "Click the data from the Splunk fields to map it to Cortex.":
      "Haga clic en los datos de los campos de Splunk para asignarlos a Cortex.",
    "Click the fetched data.":
      "Haga clic en los datos recuperados.",
    "Click the username in the upper-right corner.":
      "Haga clic en el nombre de usuario en la esquina superior derecha.",
    "Click your classifier.":
      "Haga clic en su clasificador.",
    "Click your mapper.":
      "Haga clic en su asignador.",
    "Client authentication":
      "Autenticación de cliente",
    "Client certificate (‘client.crt’ file)":
      "Certificado de cliente (archivo 'client.crt')",
    "Client certificate (type pem)":
      "Certificado de cliente (tipo pem)",
    "Client certificate key (type pem)":
      "Clave del certificado de cliente (tipo pem)",
    "Client certificates":
      "Certificados de cliente",
    "Client certificates content (see `client.crt` in Integration Tips)":
      "Contenido de los certificados de cliente (consulte `client.crt` en Consejos de integración)",
    "Client credentials":
      "Credenciales de cliente",
    "Client Credentials":
      "Credenciales de cliente",
    "Client GUID":
      "GUID de cliente",
    "Client Id (for OAuth 2.0)":
      "ID de cliente (para OAuth 2.0)",
    "Client ID (OAuth)":
      "ID de cliente (OAuth)",
    "Client ID and Client Secret":
      "ID de cliente y secreto de cliente",
    "Client Id for OAuth 2.0":
      "ID de cliente para OAuth 2.0",
    "Client ID/JWT Audience (aud)":
      "ID de cliente/audiencia JWT (aud)",
    "Client Name":
      "Nombre del cliente",
    "Client private key":
      "Clave privada del cliente",
    "Client private key (‘client.key’ file)":
      "Clave privada del cliente (archivo 'client.key')",
    "Client private key content (e.g. `client.key`)":
      "Contenido de la clave privada del cliente (p. ej., `client.key`)",
    "Client Secret (for OAuth 2.0)":
      "Secreto de cliente (para OAuth 2.0)",
    "Client Secret (OAuth)":
      "Secreto de cliente (OAuth)",
    "Client Secret for OAuth 2.0":
      "Secreto de cliente para OAuth 2.0",
    "Client Secret Key":
      "Clave secreta de cliente",
    "Client type":
      "Tipo de cliente",
    "Close Detection on Incident Closure":
      "Cerrar la detección al cerrar el incidente",
    "Close Mirrored Cortex Incidents (Incoming Mirroring)":
      "Cerrar incidentes de Cortex reflejados (reflejo entrante)",
    "Close Mirrored Prisma Cloud Alert":
      "Cerrar alerta de Prisma Cloud reflejada",
    "Close Mirrored Splunk ES Events (Outgoing Mirroring)":
      "Cerrar eventos de Splunk ES reflejados (reflejo saliente)",
    "Close Mirrored Splunk Notable Event":
      "Cerrar Notable Event de Splunk reflejado",
    "Cloud Name (i.e., <https://zsapi.zscalertwo.net>)":
      "Nombre de la nube (p. ej., <https://zsapi.zscalertwo.net>)",
    "Collect Configuration":
      "Recopilar configuración",
    "Collect Logs":
      "Recopilar registros",
    "Comma-separated configuration for advanced parameters values. e.g. EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5":
      "Configuración separada por comas para los valores de parámetros avanzados. P. ej., EVENTS_INTERVAL_SECS=20,FETCH_SLEEP=5",
    "Comma-separated finding statuses to fetch. Known values are OPEN, REOPENED, and DONE. The default excludes DONE so that remediated findings do not create incidents, while still covering findings that were reopened. Only applies when Findings scope is \"Supplier Findings\". Leave empty to fetch all statuses.":
      "Estados de los hallazgos que se deben recuperar, separados por comas. Los valores conocidos son OPEN, REOPENED y DONE. De forma predeterminada se excluye DONE, de modo que los hallazgos corregidos no creen incidentes y, al mismo tiempo, se sigan incluyendo los hallazgos que se reabrieron. Solo se aplica cuando Findings scope es \"Supplier Findings\". Déjelo vacío para recuperar todos los estados.",
    "Command Example":
      "Ejemplo de comando",
    "Comment tag from Splunk":
      "Etiqueta de comentario de Splunk",
    "Comment tag to Splunk":
      "Etiqueta de comentario para Splunk",
    "Commercial Region (https://analysiscenter.veracode.com/)":
      "Región comercial (https://analysiscenter.veracode.com/)",
    "Common parameters":
      "Parámetros comunes",
    "Configuration Steps":
      "Pasos de configuración",
    "Configure a JWT signing key by accessing: All→System OAuth→JWT Keys using the keystore from above and keep the Key ID as it will be used as kid integration parameter.":
      "Configure una clave de firma JWT accediendo a: All→System OAuth→JWT Keys, utilizando el almacén de claves anterior, y conserve el Key ID, ya que se utilizará como parámetro de integración `kid`.",
    "Configure additional integration instances, adding the workflow URL for each Team. You can then send notifications to multiple teams at once, or select the integration instance to use via the playbook task editor.":
      "Configure instancias de integración adicionales y agregue la URL del flujo de trabajo para cada equipo. De este modo, podrá enviar notificaciones a varios equipos a la vez o seleccionar la instancia de integración que se utilizará mediante el editor de tareas del playbook.",
    "Configure Integration":
      "Configurar integración",
    "Configure Microsoft Teams on Cortex or Cortex XSIAM":
      "Configure Microsoft Teams en Cortex o Cortex XSIAM",
    "Configure the classification. Make sure that your non ES incident fields are associated with your custom incident type.":
      "Configure la clasificación. Asegúrese de que los campos de incidente que no son de ES estén asociados con su tipo de incidente personalizado.",
    "Configure the default threshold for each indicator type in the instance settings.":
      "Configure el umbral predeterminado para cada tipo de indicador en la configuración de la instancia.",
    "Configure the instance":
      "Configurar la instancia",
    "Configure the Instance to Fetch Attack Paths from BloodHound Enterprise":
      "Configurar la instancia para recuperar rutas de ataque de BloodHound Enterprise",
    "Configure the integration instance in Cortex":
      "Configurar la instancia de integración en Cortex",
    "Configure the integration to fetch incidents (see the Integration documentation for details).":
      "Configure la integración para recuperar incidentes (consulte la documentación de la integración para obtener más información).",
    "Configure the mapping. Make sure to map your non ES fields accordingly and make sure that these incident fields are associated with their custom incident type.":
      "Configure la asignación. Asegúrese de asignar correctamente los campos que no son de ES y de que estos campos de incidente estén asociados con su tipo de incidente personalizado.",
    "Configure VulnDB on Cortex":
      "Configurar VulnDB en Cortex",
    "Configure Your MongoDB Atlas Instance":
      "Configurar su instancia de MongoDB Atlas",
    "Connect SonarQube":
      "Conectar SonarQube",
    "Connect Veracode":
      "Conectar Veracode",
    "Connection Method":
      "Método de conexión",
    "Connection Security":
      "Seguridad de la conexión",
    "Connection URI":
      "URI de conexión",
    "Connector ID (CB Defense)":
      "ID del conector (CB Defense)",
    "Content types to fetch":
      "Tipos de contenido que se recuperarán",
    "Context Output":
      "Salida de contexto",
    "Copy the Access Token to the “Personal Access Token” field":
      "Copie el token de acceso en el campo “Personal Access Token”",
    "Copy the API key.":
      "Copie la clave de API.",
    "Copy the Client ID and Client Secret":
      "Copie el ID de cliente y el secreto de cliente",
    "Copy the Client ID and Client Secret Key to a safe place.":
      "Copie el ID de cliente y la clave secreta de cliente en un lugar seguro.",
    "Copy the generated API token. This would be required to be configured while adding the RiskSense instance on Cortex.":
      "Copie el token de API generado. Será necesario configurarlo al agregar la instancia de RiskSense en Cortex.",
    "Copy the Runtime API Key for scanner operations":
      "Copie la clave de API de Runtime para las operaciones del escáner",
    "Copy your API key.":
      "Copie su clave de API.",
    "Copy your Terraform Enterprise server domain":
      "Copie el dominio de su servidor de Terraform Enterprise",
    "Corporation Name (should match the pattern [0-9a-z_.-]+)":
      "Nombre de la corporación (debe coincidir con el patrón [0-9a-z_.-]+)",
    "Cortex Severity":
      "Gravedad de Cortex",
    "Cortex Tenant":
      "Tenant de Cortex",
    "Cortex uses the Workday integration to fetch reports and create XSOAR incidents that correspond to the CRUD operation(s) in the report. For example, if you run a full report that includes 5 new employees, 3 terminated employees, and 10 employee profiles that were updated, 18 unique incidents would be created in XSOAR.":
      "Cortex utiliza la integración de Workday para recuperar informes y crear incidentes de XSOAR que correspondan a las operaciones CRUD del informe. Por ejemplo, si ejecuta un informe completo que incluye 5 empleados nuevos, 3 empleados dados de baja y 10 perfiles de empleados actualizados, se crearán 18 incidentes únicos en XSOAR.",
    "Create a JWT provider with a JWT signing key by accessing: All→System OAuth→JWT providers. Claim Name sub in Standard Claims has to be existing non-admin servicenow user with all necessary roles.":
      "Cree un proveedor de JWT con una clave de firma JWT accediendo a: All→System OAuth→JWT providers. El Claim Name `sub` en Standard Claims debe ser un usuario de ServiceNow existente que no sea administrador y que tenga todos los roles necesarios.",
    "Create a local user with a sufficient role.":
      "Cree un usuario local con un rol suficiente.",
    "Create a new instance":
      "Crear una nueva instancia",
    "Create a new Mattermost user (to act as the Mattermost Bot)":
      "Cree un nuevo usuario de Mattermost (para que actúe como el bot de Mattermost)",
    "Create a new service account or OAuth2 client":
      "Cree una nueva cuenta de servicio o un cliente OAuth2",
    "Create a workflow in Microsoft Teams.":
      "Cree un flujo de trabajo en Microsoft Teams.",
    "Create an image or PDF file from a URL or HTML body.":
      "Cree un archivo de imagen o PDF a partir de una URL o de un cuerpo HTML.",
    "Create an Integration System Security Group (Unconstrained) using the ‘Create Security Group’ task":
      "Cree un Integration System Security Group (Unconstrained) mediante la tarea 'Create Security Group'",
    "Create an JWT app.":
      "Cree una aplicación JWT.",
    "Create an Server-to-Server OAuth app.":
      "Cree una aplicación OAuth de servidor a servidor.",
    "Create API Access Policy or add Authentication profile to existing Policy by accessing: All→System Web Services→API Access Policies→Rest API Access Policies":
      "Cree una API Access Policy o agregue un Authentication profile a una política existente accediendo a: All→System Web Services→API Access Policies→Rest API Access Policies",
    "Create Incidents for Escalated Detections":
      "Crear incidentes para detecciones escaladas",
    "Create Incidents for Prioritized Detections":
      "Crear incidentes para detecciones priorizadas",
    "Create Indicators from Relationships":
      "Crear indicadores a partir de relaciones",
    "Create OAuth2 Client in Strata Cloud Manager":
      "Cree un cliente OAuth2 en Strata Cloud Manager",
    "Create the Demisto Bot in Microsoft Teams":
      "Cree el Demisto Bot en Microsoft Teams",
    "Creating an API Key":
      "Creación de una clave de API",
    "Creating or updating the encryption master key of Palo Alto Networks Firewall or Panorama invalidates the current API key and requires obtaining a new one. All subsequent commands will raise an “Invalid Credential” error until a new API key is obtained and the integration instance is updated accordingly.":
      "Crear o actualizar la clave maestra de cifrado de Palo Alto Networks Firewall o Panorama invalida la clave de API actual y requiere obtener una nueva. Todos los comandos posteriores generarán un error “Invalid Credential” hasta que se obtenga una nueva clave de API y se actualice la instancia de integración en consecuencia.",
    "Crowdsourced Yara Rules Threshold":
      "Umbral de reglas Yara de origen colaborativo",
    "CSV of the Splunk lookup tables from which to take the Asset enrichment data.":
      "CSV de las tablas de búsqueda de Splunk de las que se tomarán los datos de enriquecimiento de activos.",
    "CSV of the Splunk lookup tables from which to take the Identity enrichment data.":
      "CSV de las tablas de búsqueda de Splunk de las que se tomarán los datos de enriquecimiento de identidades.",
    "Currently, OpenSSH keys are not supported. Only RSA keys (.PEM files) are supported.":
      "Actualmente, las claves OpenSSH no son compatibles. Solo se admiten claves RSA (archivos .PEM).",
    "Custom New Incident Welcome Message":
      "Mensaje de bienvenida personalizado para incidentes nuevos",
    "Customer name":
      "Nombre del cliente",
    "Customer Name":
      "Nombre del cliente",
    "CVE- is a constant string":
      "`CVE-` es una cadena constante",
    "Data profiles to allow exemption":
      "Perfiles de datos para permitir la exención",
    "Date Format in Workday Report":
      "Formato de fecha en el informe de Workday",
    "Date or relative timestamp to start fetching incidents from, in the format of <number> <time unit>. For example, 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, ISO timestamp. Default is 3 days.":
      "Fecha o marca de tiempo relativa a partir de la cual se empiezan a recuperar incidentes, en el formato <number> <time unit>. Por ejemplo, 2 minutes, 12 hours, 6 days, 2 weeks, 3 months, 1 year, marca de tiempo ISO. El valor predeterminado es 3 days.",
    "Date YYYY-MM-dd finishing date (latest)":
      "Fecha de finalización YYYY-MM-dd (la más reciente)",
    "Date YYYY-MM-dd starting date (earliest)":
      "Fecha de inicio YYYY-MM-dd (la más antigua)",
    "DBotScore mapping":
      "Asignación de DBotScore",
    "Deactivation date field":
      "Campo de fecha de desactivación",
    "Deactive User URL":
      "URL para desactivar usuario",
    "Dedicated Slack channel to receive notifications":
      "Canal de Slack dedicado para recibir notificaciones",
    "Default ‘wait-time’ is 20 seconds.":
      "El valor predeterminado de 'wait-time' es 20 segundos.",
    "Default Behavior":
      "Comportamiento predeterminado",
    "Default Hostname or IP Address":
      "Nombre de host o dirección IP predeterminados",
    "Default max total wait for results (in milliseconds)":
      "Espera total máxima predeterminada para los resultados (en milisegundos)",
    "Default maximum number of records to retrieve":
      "Número máximo predeterminado de registros que se recuperarán",
    "Default requestor ID for adding people to incidents":
      "ID de solicitante predeterminado para agregar personas a los incidentes",
    "Default team":
      "Equipo predeterminado",
    "Default Tenant Services Group ID to use for API calls. Example: 1234567890.":
      "ID predeterminado del Tenant Services Group que se utilizará para las llamadas a la API. Ejemplo: 1234567890.",
    "Default ticket type for running ticket commands and fetching incidents":
      "Tipo de ticket predeterminado para ejecutar comandos de ticket y recuperar incidentes",
    "Default user":
      "Usuario predeterminado",
    "Define a query to determine which offenses to fetch. e.g. status=OPEN. See ? for more details.":
      "Defina una consulta para determinar qué ofensas se deben recuperar. P. ej., status=OPEN. Consulte ? para obtener más información.",
    "Defining a broad rule-set will cause the integration to create multiple redundant incidents.":
      "Definir un conjunto de reglas amplio hará que la integración cree varios incidentes redundantes.",
    "Delegated user authentication":
      "Autenticación de usuario delegado",
    "Dependencies (Python packages)":
      "Dependencias (paquetes de Python)",
    "Depending on the authentication method you use, the integration parameters might change.":
      "Según el método de autenticación que utilice, los parámetros de la integración pueden cambiar.",
    "Depending on the selected authentication method, you may need to create a dedicated application or use a dedicated user account for the integration. Each method requires specific permissions and configuration steps to ensure Security & Compliance commands can be executed successfully.":
      "Según el método de autenticación seleccionado, es posible que deba crear una aplicación dedicada o utilizar una cuenta de usuario dedicada para la integración. Cada método requiere permisos y pasos de configuración específicos para garantizar que los comandos de Security & Compliance se ejecuten correctamente.",
    "Depending on the system load, the initial fetch might take a long time.":
      "Según la carga del sistema, la recuperación inicial puede tardar mucho tiempo.",
    "Deprecated starting from version 10.35.0 of Jamf.":
      "Obsoleto a partir de la versión 10.35.0 de Jamf.",
    "Deprecated. Use O365 - Security And Compliance - Content Search v2 instead.":
      "Obsoleto. Utilice O365 - Security And Compliance - Content Search v2 en su lugar.",
    "Deprecated. Use the Slack v3 integration instead.":
      "Obsoleto. Utilice en su lugar la integración Slack v3.",
    "Detailed Instructions…":
      "Instrucciones detalladas…",
    "Details for Silent Push workflow":
      "Detalles del flujo de trabajo de Silent Push",
    "Detection Close Reason for Incident Closure":
      "Motivo de cierre de la detección al cerrar el incidente",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'.":
      "Motivo de cierre de la detección que se establece en Vectra al cerrar incidentes en XSOAR. El valor predeterminado es 'Remediated'.",
    "Detection close reason to set in Vectra when closing incidents in XSOAR. Default value is 'Remediated'. Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Motivo de cierre de la detección que se establece en Vectra al cerrar incidentes en XSOAR. El valor predeterminado es 'Remediated'. Nota: Este parámetro solo se utiliza cuando close detection on incident closer está 'checked' y la dirección de reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Detection Status for Incident Reopen":
      "Estado de la detección al reabrir el incidente",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'.":
      "Estado de la detección que se establece en Vectra al reabrir el incidente en XSOAR. El valor predeterminado es 'Escalated'.",
    "Detection status to set in Vectra when incident is reopened in XSOAR. Default value is 'Escalated'. Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Estado de la detección que se establece en Vectra al reabrir el incidente en XSOAR. El valor predeterminado es 'Escalated'. Nota: Este parámetro solo se utiliza cuando open detection on incident reopen está 'checked' y la dirección de reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Determines when employees are synced from Workday, i.e., when are the User Profile in XSOAR, and the users in the applications, created. Set to 0 to sync hires on their hire date. Leave empty to sync the hires immediately.":
      "Determina cuándo se sincronizan los empleados desde Workday, es decir, cuándo se crean el perfil de usuario en XSOAR y los usuarios en las aplicaciones. Establezca 0 para sincronizar las altas en su fecha de contratación. Déjelo vacío para sincronizar las altas de inmediato.",
    "Determines when to enable the Active Directory accounts of employees. Set to 0 to enable the Active Directory accounts on their hire date. Leave empty to enable the accounts immediately. Note that this is effective only when the employees are already synced to XSOAR, so you should set a number lower, or equal to, the value in the *Number of days before hire date to sync hires* parameter.":
      "Determina cuándo se habilitan las cuentas de Active Directory de los empleados. Establezca 0 para habilitar las cuentas de Active Directory en su fecha de contratación. Déjelo vacío para habilitar las cuentas de inmediato. Tenga en cuenta que esto solo es efectivo cuando los empleados ya están sincronizados con XSOAR, por lo que debe establecer un número menor o igual que el valor del parámetro *Number of days before hire date to sync hires*.",
    "Determines whether to return all results, which can number in the thousands. If “true”, returns all results and overrides the _fullResponse_, _long_ arguments (if set to “false”) in a command. If “false”, the _fullResponse_, _long_ arguments in the command determines how results are returned.":
      "Determina si se devuelven todos los resultados, que pueden ser miles. Si es “true”, devuelve todos los resultados y anula los argumentos _fullResponse_ y _long_ (si están establecidos en “false”) de un comando. Si es “false”, los argumentos _fullResponse_ y _long_ del comando determinan cómo se devuelven los resultados.",
    "Disable Automatic Notifications":
      "Desactivar notificaciones automáticas",
    "DLP API Base URL":
      "URL base de la API de DLP",
    "DLP API base URL for DLP management operations (dictionaries, patterns, filtering profiles). Default is the global DLP endpoint. Change only if using a regional or custom DLP endpoint.":
      "URL base de la API de DLP para las operaciones de administración de DLP (diccionarios, patrones, perfiles de filtrado). El valor predeterminado es el extremo global de DLP. Cámbielo solo si utiliza un extremo de DLP regional o personalizado.",
    "DLP Regions":
      "Regiones de DLP",
    "Do not check for Cortex version 8":
      "No comprobar la versión 8 de Cortex",
    "Domain Controller":
      "Controlador de dominio",
    "Domain Malicious Threshold. Minimum number of positive results from VT scanners to consider the Domain malicious.":
      "Umbral de dominio malicioso. Número mínimo de resultados positivos de los escáneres de VT para considerar el dominio malicioso.",
    "Domain of illuminate server to use (format - server.that_you_use.com - No http/https)":
      "Dominio del servidor illuminate que se utilizará (formato - server.that_you_use.com - sin http/https)",
    "Domain Popularity Ranking Threshold":
      "Umbral de clasificación de popularidad del dominio",
    "Domain Relationships":
      "Relaciones del dominio",
    "Domain Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the Domain suspicious.":
      "Umbral de dominio sospechoso. Número mínimo de resultados positivos y sospechosos de los escáneres de VT para considerar el dominio sospechoso.",
    "Domain Threshold. Minimum number of positive results from VT scanners to consider the domain malicious.":
      "Umbral del dominio. Número mínimo de resultados positivos de los escáneres de VT para considerar el dominio malicioso.",
    "Drag the value to the appropriate incident type.":
      "Arrastre el valor al tipo de incidente correspondiente.",
    "DXL documentation":
      "Documentación de DXL",
    "Each access token enables the bearer to perform specific actions on specific Okta endpoints, with that ability controlled by which scopes the access token contains.":
      "Cada token de acceso permite al portador realizar acciones específicas en extremos específicos de Okta; esta capacidad se controla mediante los ámbitos que contiene el token de acceso.",
    "Each log type has its own query field in the instance configuration.":
      "Cada tipo de registro tiene su propio campo de consulta en la configuración de la instancia.",
    "Each report has a unique URL, which you enter as one of the integration instance parameters. If you want to fetch multiple reports, each report will require its own integration instance.":
      "Cada informe tiene una URL única que se introduce como uno de los parámetros de la instancia de integración. Si desea recuperar varios informes, cada informe requerirá su propia instancia de integración.",
    "Elastic API Port":
      "Puerto de la API de Elastic",
    "Email (Password for basic authentication only)":
      "Correo electrónico (contraseña solo para autenticación básica)",
    "Email / User Principal Name (Required)":
      "Correo electrónico / Nombre principal de usuario (obligatorio)",
    "Email address of the XSOAR delegated Teams user (e.g. \"example@demisto.com\")":
      "Dirección de correo electrónico del usuario delegado de Teams de XSOAR (p. ej., \"example@demisto.com\")",
    "Email address to associate for this integration.":
      "Dirección de correo electrónico que se asociará con esta integración.",
    "Enable Cortex Assistant AI integration in Slack. When enabled, users can mention the bot to interact with AI agents for security analysis, threat intelligence, and automated responses.":
      "Habilita la integración de Cortex Assistant AI en Slack. Cuando está habilitada, los usuarios pueden mencionar al bot para interactuar con agentes de IA para el análisis de seguridad, la inteligencia de amenazas y las respuestas automatizadas.",
    "Enable Incident Mirroring":
      "Habilitar el reflejo de incidentes",
    "Enable Okta Authentication Log and Configuration Collection":
      "Habilitar la recopilación de registros de autenticación y configuración de Okta",
    "Enable Outbound File Mirroring":
      "Habilitar el reflejo de archivos salientes",
    "Enable permissions.":
      "Habilite los permisos.",
    "Enable score analyzing by Crowdsourced Yara Rules, Sigma, and IDS":
      "Habilitar el análisis de puntuación mediante Crowdsourced Yara Rules, Sigma e IDS",
    "Enable Splunk statuses marked as “End Status” to close on mirror (Incoming Mirroring)":
      "Habilitar que los estados de Splunk marcados como “End Status” se cierren al reflejar (reflejo entrante)",
    "Enable this to fetch assets that correlate to the fetched offenses.":
      "Habilite esta opción para recuperar los activos que se correlacionan con los delitos recuperados.",
    "Enable TLS on the HTTP interface of your Elasticsearch cluster (required for the token service).":
      "Habilite TLS en la interfaz HTTP de su clúster de Elasticsearch (obligatorio para el servicio de tokens).",
    "Enable Token Authentication":
      "Habilitar la autenticación por token",
    "Enabled AI assistant":
      "Asistente de IA habilitado",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR.":
      "Al activar esta casilla, la detección se cierra en Vectra cuando se cierra el incidente en XSOAR.",
    "Enabling this checkbox closes the detection in Vectra when the incident is closed in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Al activar esta casilla, la detección se cierra en Vectra cuando se cierra el incidente en XSOAR. Nota: Este parámetro solo se utiliza cuando la dirección de reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Enabling this checkbox generates incidents for escalated events detections. If not selected, incidents are created for all events detections.":
      "Al activar esta casilla, se generan incidentes para las detecciones de eventos escaladas. Si no se selecciona, se crean incidentes para todas las detecciones de eventos.",
    "Enabling this checkbox generates incidents for prioritized events detections. If not selected, incidents are created for all events detections.":
      "Al activar esta casilla, se generan incidentes para las detecciones de eventos priorizadas. Si no se selecciona, se crean incidentes para todas las detecciones de eventos.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR.":
      "Al activar esta casilla, la detección se abre en Vectra cuando se reabre el incidente en XSOAR.",
    "Enabling this checkbox opens the detection in Vectra when the incident is reopened in XSOAR. Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Al activar esta casilla, la detección se abre en Vectra cuando se reabre el incidente en XSOAR. Nota: Este parámetro solo se utiliza cuando la dirección de reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Endpoint URI":
      "URI del extremo",
    "Enrichment Timeout (Minutes)":
      "Tiempo de espera de enriquecimiento (minutos)",
    "Enrichment types":
      "Tipos de enriquecimiento",
    "Enrichment Types":
      "Tipos de enriquecimiento",
    "Ensure Appropriate Role":
      "Asegurar el rol adecuado",
    "Enter a meaningful name and a description for the API, and click Create Key.":
      "Introduzca un nombre descriptivo y una descripción para la API y haga clic en Create Key.",
    "Enter a name for the API key and configure the desired settings.":
      "Introduzca un nombre para la clave de API y configure los ajustes deseados.",
    "Enter a value for the UPN parameter in the integration configuration.":
      "Introduzca un valor para el parámetro UPN en la configuración de la integración.",
    "Enter connection parameters. (Server URL, Client ID & Client Secret Key)":
      "Introduzca los parámetros de conexión. (Server URL, Client ID y Client Secret Key)",
    "Enter the email address the key should be issued to and submit the signup form.":
      "Introduzca la dirección de correo electrónico a la que se emitirá la clave y envíe el formulario de registro.",
    "Enter the relevant tag name for mirror notes.":
      "Introduzca el nombre de la etiqueta correspondiente para las notas de reflejo.",
    "Enter your Customer Name and API Key provided by the ThreatX SOC. You can request your Customer Name and API Key by opening a support ticket via support@threatx.com.":
      "Introduzca su Customer Name y API Key proporcionados por el SOC de ThreatX. Puede solicitar su Customer Name y API Key abriendo un ticket de soporte a través de support@threatx.com.",
    "Entity Types":
      "Tipos de entidad",
    "Environment ID":
      "ID de entorno",
    "Environment ID is available under the PingOne Dashboard->Environment Properties.":
      "El ID de entorno está disponible en PingOne Dashboard->Environment Properties.",
    "Escape URLs":
      "Escapar URL",
    "Even if the password is incorrect, the integration will attempt to authenticate using it.":
      "Aunque la contraseña sea incorrecta, la integración intentará autenticarse con ella.",
    "Event fields to return from the events query (CAUTION this parameter is correlated to the incoming mapper, and changing the values may adversely affect mapping)":
      "Campos de evento que se devolverán de la consulta de eventos (PRECAUCIÓN: este parámetro está correlacionado con el asignador entrante y cambiar los valores puede afectar negativamente a la asignación)",
    "Event types to fetch":
      "Tipos de evento que se recuperarán",
    "Events will be fetched only for User Profiles with a Source Priority value less than or equal to the value of this parameter.":
      "Los eventos solo se recuperarán para los perfiles de usuario cuyo valor de Source Priority sea menor o igual que el valor de este parámetro.",
    "Exact name of the rule or ruleset you want to filter on. Leave empty to receive all.":
      "Nombre exacto de la regla o del conjunto de reglas por el que desea filtrar. Déjelo vacío para recibir todos.",
    "Existing users":
      "Usuarios existentes",
    "Exploit publish date":
      "Fecha de publicación del exploit",
    "Extensive Logging":
      "Registro exhaustivo",
    "Feed Types":
      "Tipos de feed",
    "Fetch":
      "Recuperación",
    "Fetch aggregate records (instead of messages)":
      "Recuperar registros agregados (en lugar de mensajes)",
    "Fetch Alert Severity Threshold Higher Than":
      "Umbral de gravedad de alertas a recuperar (superior a)",
    "Fetch Alerts":
      "Recuperar alertas",
    "Fetch backwards window - the time overlap for each fetch to account for the gap between event creation and indexing on Splunk. This helps prevent data gaps caused by ingestion lag.":
      "Ventana de recuperación hacia atrás: el solapamiento de tiempo de cada recuperación para tener en cuenta el desfase entre la creación del evento y su indexación en Splunk. Esto ayuda a evitar lagunas de datos causadas por el retraso en la ingesta.",
    "Fetch backwards window - this backward window is for cases where there is a gap between the event occurrence time and the event index time on the server.":
      "Ventana de recuperación hacia atrás: esta ventana hacia atrás es para los casos en que existe un desfase entre la hora de ocurrencia del evento y la hora de indexación del evento en el servidor.",
    "Fetch delta - The delta time in each batch. e.g. 1 hour, 3 minutes.":
      "Delta de recuperación: el intervalo de tiempo de cada lote. P. ej., 1 hour, 3 minutes.",
    "Fetch emails in HTML format":
      "Recuperar correos electrónicos en formato HTML",
    "Fetch event types":
      "Tipos de evento que se recuperarán",
    "Fetch events (logs) from Splunk into Cortex":
      "Recupere eventos (registros) de Splunk en Cortex",
    "Fetch incident query":
      "Consulta de recuperación de incidentes",
    "Fetch incident with specific states.":
      "Recupera incidentes con estados específicos.",
    "Fetch Incidents Filtering":
      "Filtrado de la recuperación de incidentes",
    "Fetch incidents type":
      "Tipo de incidentes a recuperar",
    "Fetch incidents using a manual query filter expression":
      "Recuperar incidentes mediante una expresión de filtro de consulta manual",
    "Fetch incidents using an “IAM - Configuration” incident":
      "Recuperar incidentes mediante un incidente “IAM - Configuration”",
    "Fetch Interval (minutes)":
      "Intervalo de recuperación (minutos)",
    "Fetch limit - maximum number of incidents per fetch":
      "Límite de recuperación: número máximo de incidentes por recuperación",
    "Fetch Limit (Max.- 200, Recommended less than 50)":
      "Límite de recuperación (máx. 200, se recomienda menos de 50)",
    "Fetch Limit (Recommended less than 200)":
      "Límite de recuperación (se recomienda menos de 200)",
    "Fetch limit (recommended value is less than 200)":
      "Límite de recuperación (el valor recomendado es menor que 200)",
    "Fetch limit per type":
      "Límite de recuperación por tipo",
    "Fetch mode":
      "Modo de recuperación",
    "Fetch Only Escalated Detections":
      "Recuperar solo detecciones escaladas",
    "Fetch only incidents with forensics":
      "Recuperar solo incidentes con datos forenses",
    "Fetch only incidents with matching Application IDs":
      "Recuperar solo incidentes con ID de aplicación coincidentes",
    "Fetch only incidents with matching severity":
      "Recuperar solo incidentes con gravedad coincidente",
    "Fetch only incidents with matching state":
      "Recuperar solo incidentes con estado coincidente",
    "Fetch only incidents with matching status":
      "Recuperar solo incidentes con estado coincidente",
    "Fetch Only Prioritized Detections":
      "Recuperar solo detecciones priorizadas",
    "Fetch Prioritized and Escalated Detections":
      "Recuperar detecciones priorizadas y escaladas",
    "Fetch Samples":
      "Recuperar muestras",
    "Fetch specific incident types. Default value is \"All\".":
      "Recupera tipos de incidente específicos. El valor predeterminado es \"All\".",
    "Fetch Splunk Enterprise Security Findings and Investigations into Cortex.":
      "Recupere los Findings y las Investigations de Splunk Enterprise Security en Cortex.",
    "Fetch Threatmon alarms into Cortex.":
      "Recupere las alarmas de Threatmon en Cortex.",
    "Fetched Incidents Data":
      "Datos de incidentes recuperados",
    "Fetches assets":
      "Recupera activos",
    "Fetches incidents":
      "Recupera incidentes",
    "Fetches only incidents with matching **All**, **Closed**, or **Open** state. If nothing is selected, **All** states will be used.":
      "Recupera solo los incidentes cuyo estado coincide con **All**, **Closed** u **Open**. Si no se selecciona nada, se utilizarán los estados **All**.",
    "Fetching events":
      "Recuperación de eventos",
    "File hashes":
      "Hashes de archivos",
    "File Malicious Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "Umbral de archivo malicioso. Número mínimo de resultados positivos de los escáneres de VT para considerar el archivo malicioso.",
    "File Relationships":
      "Relaciones del archivo",
    "File security scanning, DLP policy enforcement, and sensitive content detection for OneDrive":
      "Análisis de seguridad de archivos, aplicación de políticas de DLP y detección de contenido confidencial para OneDrive",
    "File Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the file suspicious.":
      "Umbral de archivo sospechoso. Número mínimo de resultados positivos y sospechosos de los escáneres de VT para considerar el archivo sospechoso.",
    "File Threshold. Minimum number of positive results from VT scanners to consider the file malicious.":
      "Umbral del archivo. Número mínimo de resultados positivos de los escáneres de VT para considerar el archivo malicioso.",
    "File transfer and execute commands via ssh, on remote machines":
      "Transferencia de archivos y ejecución de comandos mediante SSH en equipos remotos",
    "Fill anything in the “Username” fill box. Use you API key in the password fill box.":
      "Rellene cualquier valor en el cuadro “Username”. Utilice su clave de API en el cuadro de contraseña.",
    "Fill in the ‘UPN Password’ parameter - the user’s Microsoft 365 password (the regular sign-in password for that UPN).":
      "Rellene el parámetro ‘UPN Password’ con la contraseña de Microsoft 365 del usuario (la contraseña de inicio de sesión habitual de ese UPN).",
    "Fill in the ‘UPN’ parameter in the integration configuration.":
      "Rellene el parámetro ‘UPN’ en la configuración de la integración.",
    "Fill in the UPN parameter in the integration configuration.":
      "Rellene el parámetro UPN en la configuración de la integración.",
    "Fill in the UPN, App ID, and Tenant ID parameters in the integration configuration.":
      "Rellene los parámetros UPN, App ID y Tenant ID en la configuración de la integración.",
    "Filter audit logs by type(s). If not specified, all audit log types will be fetched.":
      "Filtra los registros de auditoría por tipo. Si no se especifica, se recuperarán todos los tipos de registros de auditoría.",
    "Filter by entity type. If not selected, it will fetch all events detections.":
      "Filtra por tipo de entidad. Si no se selecciona, recuperará todas las detecciones de eventos.",
    "Filter by killchain stage":
      "Filtrar por fase de la cadena de ataque",
    "Filter by threat category":
      "Filtrar por categoría de amenaza",
    "Filter by threat level (LOW, MEDIUM, or HIGH)":
      "Filtrar por nivel de amenaza (LOW, MEDIUM o HIGH)",
    "Filter the Detections by the “Entity Type”(Account and Host).":
      "Filtre las detecciones por “Entity Type” (Account y Host).",
    "Firewall: Configure the vsys":
      "Firewall: configurar el vsys",
    "First fetch time range":
      "Intervalo de tiempo de la primera recuperación",
    "First fetch timestamp (<number> <time unit>, e.g., 12 hours, 7 days) or a date or epoch timestamp.":
      "Marca de tiempo de la primera recuperación (<number> <time unit>, p. ej., 12 hours, 7 days) o una fecha o marca de tiempo epoch.",
    "First fetch timestamp (<number> <time unit>. For example, 12 hours, 7 days)":
      "Marca de tiempo de la primera recuperación (<number> <time unit>. Por ejemplo, 12 hours, 7 days)",
    "First fetch timestamp (e.g., 7 days)":
      "Marca de tiempo de la primera recuperación (p. ej., 7 days)",
    "First fetch timestamp (Investigations)":
      "Marca de tiempo de la primera recuperación (Investigations)",
    "Follow these instructions to find an API key that corresponds to a particular Carbon Black user account.":
      "Siga estas instrucciones para encontrar la clave de API que corresponde a una cuenta de usuario concreta de Carbon Black.",
    "Follow these steps to add custom fields to the User Profile indicator.":
      "Siga estos pasos para agregar campos personalizados al indicador User Profile.",
    "Following link describes the process of how one can obtain a Personal Access Token in IdentityNow.":
      "El siguiente enlace describe el proceso para obtener un token de acceso personal en IdentityNow.",
    "For an API key, go to your user profile at your ThreatCentral account, and press Manage API Keys, where you can generate a new API key.":
      "Para obtener una clave de API, vaya a su perfil de usuario en su cuenta de ThreatCentral y pulse Manage API Keys, donde podrá generar una nueva clave de API.",
    "For API 1.0":
      "Para la API 1.0",
    "For API 2.0":
      "Para la API 2.0",
    "For data removal: the authenticated company must have remaining Black Market Data Removal credits.":
      "Para la eliminación de datos: la empresa autenticada debe tener créditos de Black Market Data Removal restantes.",
    "For detailed documentation, see the integration README.":
      "Para obtener documentación detallada, consulte el archivo README de la integración.",
    "For example, \"example@mail.com\"":
      "Por ejemplo, \"example@mail.com\"",
    "For example, using the “malicious_executables” will fetch only notifications caught by malicious_executables ruleset.":
      "Por ejemplo, al usar “malicious_executables” solo se recuperarán las notificaciones detectadas por el conjunto de reglas malicious_executables.",
    "For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "Por ejemplo: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "For information on getting your Okta API token, see the Okta documentation.":
      "Para obtener información sobre cómo conseguir su token de API de Okta, consulte la documentación de Okta.",
    "For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "Para obtener más información sobre la activación del servicio, visite el siguiente enlace: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "For more information regarding the JSON objects, please see Proofpoint TRAP documentation under “JSON Alert Source 2.0”.":
      "Para obtener más información sobre los objetos JSON, consulte la documentación de Proofpoint TRAP en “JSON Alert Source 2.0”.",
    "For Recorded Future Sandbox, the token is provided by going to the Recorded Future Portal -> Tools -> Malware Analysis -> API Keys":
      "Para Recorded Future Sandbox, el token se obtiene en Recorded Future Portal -> Tools -> Malware Analysis -> API Keys",
    "For secure access to Prisma Cloud API, you need a Prisma Cloud API access key. An access key includes an Access Key ID and a Secret Key.":
      "Para acceder de forma segura a la API de Prisma Cloud, necesita una clave de acceso de la API de Prisma Cloud. Una clave de acceso incluye un Access Key ID y una Secret Key.",
    "For sending messages using the ChatBot app and mirroring":
      "Para enviar mensajes con la aplicación ChatBot y el reflejo",
    "For the configuration, you should configure the server details and credentials either as parameters or as command arguments.":
      "Para la configuración, debe configurar los detalles del servidor y las credenciales como parámetros o como argumentos del comando.",
    "For the configuration, you should either configure server details as parameters, or as command inputs.":
      "Para la configuración, debe configurar los detalles del servidor como parámetros o como entradas del comando.",
    "For the JWT method (deprecated)":
      "Para el método JWT (obsoleto)",
    "For XSOAR users below 6.0.0 version, using ‘Pull from instance’ option when creating a new mapper is not supported.":
      "Para los usuarios de XSOAR con versiones anteriores a la 6.0.0, no se admite la opción ‘Pull from instance’ al crear un nuevo asignador.",
    "Force Encryption":
      "Forzar cifrado",
    "Force encryption on the connection, requires SMBv3 or newer on the remote server. Default is \"false\".":
      "Fuerza el cifrado en la conexión; requiere SMBv3 o posterior en el servidor remoto. El valor predeterminado es \"false\".",
    "Format: `https://{hostName}:{port}`":
      "Formato: `https://{hostName}:{port}`",
    "From `brokercerts.crt` file.":
      "Del archivo `brokercerts.crt`.",
    "From `client.crt` file.":
      "Del archivo `client.crt`.",
    "From `client.key` file. Make sure that the type of the field is not `encrypted` when filling it out.":
      "Del archivo `client.key`. Al rellenarlo, asegúrese de que el tipo del campo no sea `encrypted`.",
    "Full Incident Enrichment":
      "Enriquecimiento completo de incidentes",
    "Full Incident Enrichment - Clear this checkbox to disable QRadar offense enrichment performed in fetch-incidents. This might help if you encounter a timeout while fetching new incidents.":
      "Enriquecimiento completo de incidentes: desactive esta casilla para deshabilitar el enriquecimiento de delitos de QRadar que se realiza en fetch-incidents. Esto puede ayudar si se produce un tiempo de espera al recuperar nuevos incidentes.",
    "Fully Qualified Domain Name (FQDN) - used in EHLO":
      "Nombre de dominio completo (FQDN): se utiliza en EHLO",
    "Generate a RiskSense API Token":
      "Generar un token de API de RiskSense",
    "Generate a self-signed certificate":
      "Generar un certificado autofirmado",
    "Generate an API key, copy it, and then paste it in the integration configuration.":
      "Genere una clave de API, cópiela y péguela en la configuración de la integración.",
    "Get a VirusTotal API Key":
      "Obtener una clave de API de VirusTotal",
    "Get incident attachments":
      "Obtener archivos adjuntos del incidente",
    "Get the BloodHound Enterprise API Token ID and Token Key":
      "Obtener el ID de token de API y la clave de token de BloodHound Enterprise",
    "Get token API documentation":
      "Obtener la documentación de la API de tokens",
    "Get Your Okta API Token":
      "Obtener su token de API de Okta",
    "Get Your Slack API Token":
      "Obtener su token de API de Slack",
    "Get your Tenzai API key":
      "Obtener su clave de API de Tenzai",
    "Getting Access":
      "Obtener acceso",
    "Go to the Okta IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Vaya a la instancia de integración de Okta IAM y, en el cuadro de texto del asignador, reemplace el nombre del asignador predeterminado por el asignador personalizado que creó.",
    "Go to the ServiceNow IAM integration instance and in the mapper textbox, replace the name of the default mapper with the custom mapper you created.":
      "Vaya a la instancia de integración de ServiceNow IAM y, en el cuadro de texto del asignador, reemplace el nombre del asignador predeterminado por el asignador personalizado que creó.",
    "Grant the Demisto Bot Permissions in Microsoft Graph":
      "Otorgue permisos al Demisto Bot en Microsoft Graph",
    "Granting JWT to admin is not allowed.":
      "No se permite conceder JWT a administradores.",
    "Host name that should appear in certificate":
      "Nombre de host que debe aparecer en el certificado",
    "Host URL":
      "URL del host",
    "Hostname, IP address, or server URL":
      "Nombre de host, dirección IP o URL del servidor",
    "Hours before first fetch to retrieve incidents":
      "Horas anteriores a la primera recuperación para recuperar incidentes",
    "How many hours ago":
      "Hace cuántas horas",
    "How many incidents to fetch each time":
      "Cuántos incidentes recuperar cada vez",
    "How to Build a Query":
      "Cómo crear una consulta",
    "How to Create a Splunk Authentication Token":
      "Cómo crear un token de autenticación de Splunk",
    "How to fetch assets and vulnerabilities":
      "Cómo recuperar activos y vulnerabilidades",
    "How to get your Panorays API Key":
      "Cómo obtener su clave de API de Panorays",
    "How to get your Vectra Client ID and Client Secret Key":
      "Cómo obtener su ID de cliente y su clave secreta de cliente de Vectra",
    "How To get your VMRay API Key":
      "Cómo obtener su clave de API de VMRay",
    "How to retrieve a Palo Alto Networks WildFire Reports API key":
      "Cómo obtener una clave de API de informes de Palo Alto Networks WildFire",
    "How to retrieve a WildFire API key":
      "Cómo obtener una clave de API de WildFire",
    "However, there is a trade-off: the larger the window, the longer fetch queries will take to complete.":
      "Sin embargo, hay una contrapartida: cuanto mayor sea la ventana, más tardarán en completarse las consultas de recuperación.",
    "However, there is obviously a price - the larger the window, the longer it will take for fetch queries to complete.":
      "Sin embargo, obviamente hay un precio: cuanto mayor sea la ventana, más tiempo tardarán en completarse las consultas de recuperación.",
    "However, they may not suffice for viewing records in some tables.":
      "Sin embargo, es posible que no sean suficientes para ver los registros de algunas tablas.",
    "HR use Workday to manage CRUD operations for employees in the organization. It is standard practice for HR to generate reports for these CRUD operations. For example, running a weekly report that captures all new employees and terminated employees, or a daily report that captures updates to existing employee profiles (e.g., new mailing address or phone number).":
      "RR. HH. utiliza Workday para administrar las operaciones CRUD de los empleados de la organización. Es una práctica habitual que RR. HH. genere informes de estas operaciones CRUD. Por ejemplo, ejecutar un informe semanal que incluya todos los empleados nuevos y los que han causado baja, o un informe diario que incluya las actualizaciones de los perfiles de empleados existentes (p. ej., una nueva dirección postal o un nuevo número de teléfono).",
    "HTTP request timeout (seconds)":
      "Tiempo de espera de la solicitud HTTP (segundos)",
    "HTTP Request Timeout (Specify the time interval in seconds. All the RiskSense API calls would timeout if the response is not returned within the configured time interval).":
      "Tiempo de espera de la solicitud HTTP (especifique el intervalo de tiempo en segundos. Todas las llamadas a la API de RiskSense agotarán el tiempo de espera si no se devuelve la respuesta dentro del intervalo de tiempo configurado).",
    "Human Readable Output":
      "Salida legible",
    "IAM Configuration":
      "Configuración de IAM",
    "ID (received from the admin consent - see Detailed Instructions (?)":
      "ID (recibido del consentimiento del administrador - consulte las instrucciones detalladas (?)",
    "Identify the fields list from the Splunk query and save it to a local file.":
      "Identifique la lista de campos de la consulta de Splunk y guárdela en un archivo local.",
    "Identity enrichment lookup tables":
      "Tablas de búsqueda para el enriquecimiento de identidades",
    "Identity posture management, directory sync, and security posture monitoring for Entra ID":
      "Administración de la postura de identidad, sincronización de directorios y supervisión de la postura de seguridad para Entra ID",
    "Identity search enrichment":
      "Enriquecimiento de la búsqueda de identidades",
    "IdentityIQ Server URL (e.g. https://identityiq-server.com/identityiq)":
      "URL del servidor de IdentityIQ (p. ej., https://identityiq-server.com/identityiq)",
    "IdentityNow Server URL (e.g. https://org.api.identitynow.com)":
      "URL del servidor de IdentityNow (p. ej., https://org.api.identitynow.com)",
    "If both body and htmlBody are provided, we will create an alternative envelope":
      "Si se proporcionan tanto body como htmlBody, se creará un sobre alternativo",
    "If checked, the fetch incidents command will sample (at most) five incidents. Use only to sample incidents for classification & mapping.":
      "Si se selecciona, el comando de recuperación de incidentes muestreará (como máximo) cinco incidentes. Utilícelo únicamente para muestrear incidentes con fines de clasificación y asignación.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zia-activate-changes' command to activate Zscaler command changes.":
      "Si se habilita, la integración activará los cambios de comandos después de cada ejecución. Si se deshabilita, utilice el comando 'zia-activate-changes' para activar los cambios de comandos de Zscaler.",
    "If enabled, the integration will activate the command changes after each execution. If disabled, use the 'zscaler-activate-changes' command to activate Zscaler command changes.":
      "Si se habilita, la integración activará los cambios de comandos después de cada ejecución. Si se deshabilita, utilice el comando 'zscaler-activate-changes' para activar los cambios de comandos de Zscaler.",
    "If enabled, the integration will log out after executing each command.":
      "Si se habilita, la integración cerrará la sesión después de ejecutar cada comando.",
    "If Fetch incidents is checked, make sure to enter at least one search field.":
      "Si la opción Recuperar incidentes está seleccionada, asegúrese de introducir al menos un campo de búsqueda.",
    "If not provided, \"host\" or \"system\" should be provided in the command's arguments.":
      "Si no se proporciona, debe proporcionarse \"host\" o \"system\" en los argumentos del comando.",
    "If not set, Client ID will be used.":
      "Si no se establece, se utilizará el ID de cliente.",
    "If nothing is selected, **All** severities will be used.":
      "Si no se selecciona nada, se utilizarán **todas** las gravedades.",
    "If nothing is selected, **All** statuses will be used.":
      "Si no se selecciona nada, se utilizarán **todos** los estados.",
    "If the Detection Status is updated in the Vectra Detection, it will be reflected in the XSOAR incident, or vice versa.":
      "Si Detection Status se actualiza en Vectra Detection, se reflejará en el incidente de XSOAR, o viceversa.",
    "If the integration was already set with look back > 0, and the look-back is not being increased at any point of time, then those incident duplications would not occur.":
      "Si la integración ya estaba configurada con un lookback > 0 y este no se aumenta en ningún momento, no se producirán esas duplicaciones de incidentes.",
    "If the second method is used, the system will automatically attempt to generate a token. If this attempt fails, it will then revert to using the first method.":
      "Si se utiliza el segundo método, el sistema intentará generar un token automáticamente. Si este intento falla, volverá a utilizar el primer método.",
    "If the server details were configured both as parameters and as command arguments, the commands argument will be used to set the connection.":
      "Si los detalles del servidor se configuraron tanto como parámetros como como argumentos del comando, se utilizará el argumento del comando para establecer la conexión.",
    "If true, will not raise an error if the image is corrupt and could not be processed.":
      "Si es true, no se generará un error si la imagen está dañada y no se pudo procesar.",
    "If you are a multi-tenant user and the body parameters of your login call include a user name and password instead of an access key ID and secret key, then you will also need to provide the Customer name":
      "Si es usuario multitenant y los parámetros del cuerpo de su llamada de inicio de sesión incluyen un nombre de usuario y una contraseña en lugar de un ID de clave de acceso y una clave secreta, también deberá proporcionar el Customer name",
    "If you are a multi-tenant user you will also need to provide the customerName.":
      "Si es usuario multitenant, también deberá proporcionar customerName.",
    "If you previously had an API V1 configured based on the credentials obtained from this method, refer to the link above to gain new credentials with the relevant permissions.":
      "Si anteriormente tenía configurada una API V1 basada en las credenciales obtenidas con este método, consulte el enlace anterior para obtener nuevas credenciales con los permisos pertinentes.",
    "If you want to close a detection in Vectra when the incident is closed in XSOAR, check the “Close Detection on Incident Closure” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Si desea cerrar una detección en Vectra cuando se cierra el incidente en XSOAR, seleccione la opción “Close Detection on Incident Closure”. Esta opción solo se utiliza cuando la dirección de reflejo está establecida en ‘Outgoing’ o ‘Incoming And Outgoing’.",
    "If you want to reopen a detection in Vectra when the incident is reopened in XSOAR, check the “Open Detection on Incident Reopen” option. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Si desea reabrir una detección en Vectra cuando se reabre el incidente en XSOAR, seleccione la opción “Open Detection on Incident Reopen”. Esta opción solo se utiliza cuando la dirección de reflejo está establecida en ‘Outgoing’ o ‘Incoming And Outgoing’.",
    "If you want to set the language to en-US, use en-GB instead.":
      "Si desea establecer el idioma en en-US, utilice en-GB en su lugar.",
    "If you want to use the mirror mechanism and you’re using custom mappers, then the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance, and dbotMirrorTags.":
      "Si desea utilizar el mecanismo de reflejo y está usando asignadores personalizados, el asignador entrante debe contener los siguientes campos: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance y dbotMirrorTags.",
    "If you wish to configure a mapper, wait for the integration to perform the first fetch successfully. This is to make the fetch mechanism logic stable.":
      "Si desea configurar un asignador, espere a que la integración realice correctamente la primera recuperación. Esto sirve para estabilizar la lógica del mecanismo de recuperación.",
    "Image scanning":
      "Análisis de imágenes",
    "Implement OAuth for Okta":
      "Implementar OAuth para Okta",
    "Implemented in Python to support extensions.":
      "Implementado en Python para admitir extensiones.",
    "Import from offset":
      "Importar desde el offset",
    "Import from partition":
      "Importar desde la partición",
    "Import from topic":
      "Importar desde el tema",
    "Important note: resetting the integration cache removes all data about teams, channels, members saved in the integration context. Performing this step requires removing the bot from all teams it was added to.":
      "Nota importante: al restablecer la caché de la integración se eliminan todos los datos sobre equipos, canales y miembros guardados en el contexto de la integración. Para realizar este paso, es necesario quitar el bot de todos los equipos a los que se agregó.",
    "Important Notes":
      "Notas importantes",
    "Important: If you want to use the mirror mechanism, the incoming mapper must contain the following fields: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance":
      "Importante: si desea utilizar el mecanismo de reflejo, el asignador entrante debe contener los siguientes campos: dbotMirrorDirection, dbotMirrorId, dbotMirrorInstance",
    "Important: The limit value can range from 10 to 200 and must be in multiples of 10.":
      "Importante: el valor de limit puede variar de 10 a 200 y debe ser múltiplo de 10.",
    "In case access is required to an instance in the cloud, use the PEM file provided by the cloud provider.":
      "Si se requiere acceso a una instancia en la nube, utilice el archivo PEM proporcionado por el proveedor de la nube.",
    "In order to add a rule name, use the filter name “alertRule.name”. In order to add a policy name, use the filter name “policy.name”.":
      "Para agregar un nombre de regla, utilice el nombre de filtro “alertRule.name”. Para agregar un nombre de política, utilice el nombre de filtro “policy.name”.",
    "In order to configure the SIGNL4 pack in Cortex you just need the SIGNL4 team or integration secret (Password). You can find the same in your SIGNL4 web portal under Teams or under Integrations -> Installed -> Inbound Webhook. It is the last part of your webhook URL.":
      "Para configurar el paquete SIGNL4 en Cortex, solo necesita el secreto del equipo o de la integración de SIGNL4 (contraseña). Puede encontrarlo en su portal web de SIGNL4, en Teams o en Integrations -> Installed -> Inbound Webhook. Es la última parte de la URL de su webhook.",
    "In order to ensure the mirroring works as expected, mappers are required, both for incoming and outgoing, to map the expected fields in Cortex and Splunk.":
      "Para garantizar que el reflejo funcione como se espera, se necesitan asignadores, tanto entrantes como salientes, que asignen los campos esperados en Cortex y Splunk.",
    "In order to use the Cortex application, use the default application ID.":
      "Para usar la aplicación de Cortex, utilice el ID de aplicación predeterminado.",
    "In order to use the Cortex Azure application, use the default application ID (3307a0ab-612c-47af-b3b5-8208247562db).":
      "Para usar la aplicación de Cortex Azure, utilice el ID de aplicación predeterminado (3307a0ab-612c-47af-b3b5-8208247562db).",
    "In order to use the rest of the commands, you are required to provide: App ID, App Key, Access Key & Secret Key.":
      "Para usar el resto de los comandos, debe proporcionar: App ID, App Key, Access Key & Secret Key.",
    "In order to use this integration, you need to enter your Zoom credentials in the relevant integration instance parameters.":
      "Para utilizar esta integración, debe introducir sus credenciales de Zoom en los parámetros correspondientes de la instancia de integración.",
    "In PEM format. Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "En formato PEM. Obligatorio y utilizado si se emplea OAuth 2.0 para la autenticación. Consulte las instrucciones detalladas en la pestaña 'Help'.",
    "In some hosted ElasticSearch environments, the standard ElasticSearch client is not supported. If you encounter any related client issues, please consider using the OpenSearch client type.":
      "En algunos entornos alojados de ElasticSearch, no se admite el cliente estándar de ElasticSearch. Si tiene problemas relacionados con el cliente, considere utilizar el tipo de cliente OpenSearch.",
    "In Splunk, there is often a delay between the time an incident is created (the event’s “occurrence time”) and the time it is actually searchable in Splunk and visible in the index (the event’s “index time”).":
      "En Splunk, suele haber un retraso entre el momento en que se crea un incidente (la “occurrence time” del evento) y el momento en que realmente se puede buscar en Splunk y es visible en el índice (la “index time” del evento).",
    "In Strata Cloud Manager, navigate to AI Security > API Applications":
      "En Strata Cloud Manager, vaya a AI Security > API Applications",
    "In the Silent Push Profile menu, click Organisation, and go to the API tab.":
      "En el menú Profile de Silent Push, haga clic en Organisation y vaya a la pestaña API.",
    "In the Summary indexing section, select the summary index, and enter the {key:value} pair for Cortex classification.":
      "En la sección Summary indexing, seleccione el índice de resumen e introduzca el par {key:value} para la clasificación de Cortex.",
    "In this case, all connections to Microsoft Security and Compliance PowerShell will use interactive delegated authentication.":
      "En este caso, todas las conexiones a Microsoft Security and Compliance PowerShell utilizarán autenticación delegada interactiva.",
    "Incident Asset Enrichment":
      "Enriquecimiento de activos del incidente",
    "Incident Asset Enrichment - When enabled, fetched offenses will also contain correlated assets.":
      "Enriquecimiento de activos del incidente - Cuando se habilita, las ofensas recuperadas también contendrán los activos correlacionados.",
    "Incident Enrichment (Asset) - When enabled, fetched offenses will also contain correlated assets.":
      "Enriquecimiento de incidentes (activos) - Cuando se habilita, las ofensas recuperadas también contendrán los activos correlacionados.",
    "Incident Enrichment (IP) - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "Enriquecimiento de incidentes (IP) - Cuando se habilita, los valores de IP de los incidentes recuperados (direcciones de origen locales y direcciones de destino locales) se recuperarán de QRadar en lugar de sus valores de ID.",
    "Incident IP Enrichment":
      "Enriquecimiento de IP del incidente",
    "Incident IP Enrichment - When enabled, fetched incidents IP values (local source addresses and local destination addresses) will be fetched from QRadar instead of their ID values.":
      "Enriquecimiento de IP del incidente - Cuando se habilita, los valores de IP de los incidentes recuperados (direcciones de origen locales y direcciones de destino locales) se recuperarán de QRadar en lugar de sus valores de ID.",
    "Incident management — Retrieve and change the incident status.":
      "Administración de incidentes — Recupere y cambie el estado del incidente.",
    "Incident Mirroring":
      "Reflejo de incidentes",
    "Incident statuses to fetch":
      "Estados de incidentes que se recuperarán",
    "Incident Type":
      "Tipo de incidente",
    "Incidents":
      "Incidentes",
    "Incidents channel":
      "Canal de incidentes",
    "Incidents Filter":
      "Filtro de incidentes",
    "Incoming - Any changes in Splunk findings (finding’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "Entrante - Cualquier cambio en los findings de Splunk (status, status_label, urgency, comments y owner del finding) se reflejará en los incidentes de Cortex.",
    "Incoming - Any changes in Splunk notables (notable’s status, status_label, urgency, comments, and owner) will be reflected in Cortex incidents.":
      "Entrante - Cualquier cambio en los notables de Splunk (status, status_label, urgency, comments y owner del notable) se reflejará en los incidentes de Cortex.",
    "Incoming - Mirrors changes from the Vectra RUX Detection into the Cortex incident.":
      "Entrante - Refleja los cambios de Vectra RUX Detection en el incidente de Cortex.",
    "Incoming and Outgoing":
      "Entrante y saliente",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk findings will be reflected in both directions.":
      "Entrante y saliente - Los cambios en los incidentes de Cortex y en los findings de Splunk se reflejarán en ambas direcciones.",
    "Incoming And Outgoing - Changes in Cortex incidents and Splunk notables will be reflected in both directions.":
      "Entrante y saliente - Los cambios en los incidentes de Cortex y en los notables de Splunk se reflejarán en ambas direcciones.",
    "Incoming And Outgoing - Mirrors changes both Incoming and Outgoing directions on incidents.":
      "Entrante y saliente - Refleja los cambios en las direcciones entrante y saliente de los incidentes.",
    "Indicator Field":
      "Campo de indicador",
    "Indicator Thresholds":
      "Umbrales de indicadores",
    "Indicator Types":
      "Tipos de indicador",
    "Indicators with positive results equal to or higher than half of the threshold value, and lower than the threshold, will be considered suspicious.":
      "Los indicadores con resultados positivos iguales o superiores a la mitad del valor del umbral e inferiores al umbral se considerarán sospechosos.",
    "Indicators with positive results equal to or higher than the threshold will be considered malicious.":
      "Los indicadores con resultados positivos iguales o superiores al umbral se considerarán maliciosos.",
    "Ingest Incidents from a SIEM Using Splunk article":
      "Artículo sobre la ingesta de incidentes desde un SIEM con Splunk",
    "Ingests Vectra AI detections as Cortex incidents enriched with entity-level risk prioritization from Attack Signal Intelligence. Priority is persistent and updates as threats evolve - high-risk detections stay surfaced until resolved. Bidirectional synchronization keeps incident state aligned across both platforms in real time.":
      "Ingiere las detecciones de Vectra AI como incidentes de Cortex enriquecidos con la priorización de riesgos a nivel de entidad de Attack Signal Intelligence. La prioridad es persistente y se actualiza a medida que evolucionan las amenazas: las detecciones de alto riesgo permanecen visibles hasta que se resuelven. La sincronización bidireccional mantiene el estado de los incidentes alineado en ambas plataformas en tiempo real.",
    "Initial Fetch":
      "Recuperación inicial",
    "Initial Fetch Interval (In minutes, used only for first fetch or after Reset last run)":
      "Intervalo de recuperación inicial (en minutos, se utiliza solo para la primera recuperación o después de Reset last run)",
    "Initial fetching history (in minutes)":
      "Historial de recuperación inicial (en minutos)",
    "Input the API key to access the sandbox.":
      "Introduzca la clave de API para acceder al sandbox.",
    "Input the url of SecneurX Analysis server.":
      "Introduzca la URL del servidor de SecneurX Analysis.",
    "Install the Workflows app in Microsoft Teams":
      "Instalar la aplicación Workflows en Microsoft Teams",
    "Instance Configuration":
      "Configuración de la instancia",
    "Instance Date Format":
      "Formato de fecha de la instancia",
    "Integrate Cloud Security with your MongoDB Atlas Account to gain comprehensive visibility into any data and posture risk existing in your MongoDB Atlas environment. This integration enables automated scanning of all assets in MongoDB Atlas, including data classification and risk assessment.":
      "Integre Cloud Security con su cuenta de MongoDB Atlas para obtener visibilidad integral de cualquier riesgo de datos y de postura que exista en su entorno de MongoDB Atlas. Esta integración permite el análisis automatizado de todos los activos de MongoDB Atlas, incluida la clasificación de datos y la evaluación de riesgos.",
    "Integrate Cloud Security with your Snowflake Account to gain comprehensive visibility into any data and posture risk existing in your Snowflake environment.This integration enables automated scanning of all assets in Snowflake,including data classification and risk assessment.":
      "Integre Cloud Security con su cuenta de Snowflake para obtener visibilidad integral de cualquier riesgo de datos y de postura que exista en su entorno de Snowflake. Esta integración permite el análisis automatizado de todos los activos de Snowflake, incluida la clasificación de datos y la evaluación de riesgos.",
    "Integration documentation":
      "Documentación de la integración",
    "Integration flow":
      "Flujo de la integración",
    "Integration with Intel Security’s ePolicy Orchestrator using the official API.":
      "Integración con ePolicy Orchestrator de Intel Security mediante la API oficial.",
    "Interactive terminal mode":
      "Modo de terminal interactivo",
    "Investigations fetch query":
      "Consulta de recuperación de investigaciones",
    "IP Malicious Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "Umbral de IP malicioso. Número mínimo de resultados positivos de los escáneres de VT para considerar maliciosa la IP.",
    "IP Relationships":
      "Relaciones de IP",
    "IP Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the IP suspicious.":
      "Umbral de IP sospechosa. Número mínimo de resultados positivos y sospechosos de los escáneres de VT para considerar sospechosa la IP.",
    "IP Threshold. Minimum number of positive results from VT scanners to consider the IP malicious.":
      "Umbral de IP. Número mínimo de resultados positivos de los escáneres de VT para considerar maliciosa la IP.",
    "IP Threshold. Minimum risk score from ThreatX to consider the IP malicious.":
      "Umbral de IP. Puntuación de riesgo mínima de ThreatX para considerar maliciosa la IP.",
    "JWT Authentication":
      "Autenticación JWT",
    "JWT Authentication.":
      "Autenticación JWT.",
    "JWT Signing Algorithm":
      "Algoritmo de firma JWT",
    "Keep the defaults for fetch limit, first fetch timestamp, earliest time to fetch, and latest time to fetch.":
      "Mantenga los valores predeterminados para el límite de recuperación, la marca de tiempo de la primera recuperación, la hora más temprana de recuperación y la hora más tardía de recuperación.",
    "Keep the Get notable events EQ query as is, as we use the Notable macro when ingesting events. You can create a more granular search by specifying specific conditions such as specific security domain, event ID, etc.":
      "Deje la consulta Get notable events EQ tal cual, ya que utilizamos la macro Notable al ingerir eventos. Puede crear una búsqueda más granular especificando condiciones concretas, como un dominio de seguridad o un ID de evento específicos, etc.",
    "Kenna API key":
      "Clave de API de Kenna",
    "Key (received from the admin consent - see Detailed Instructions (?)":
      "Clave (recibida del consentimiento del administrador - consulte las instrucciones detalladas (?)",
    "Key Algorithms":
      "Algoritmos de clave",
    "Key Features":
      "Características principales",
    "Key ID":
      "ID de clave",
    "Key or Client Secret (can be used instead of Certificate Thumbprint and Private Key)":
      "Clave o secreto de cliente (se puede usar en lugar de la huella digital del certificado y la clave privada)",
    "Kibana API Port":
      "Puerto de API de Kibana",
    "Languages":
      "Idiomas",
    "Last Incident ID (for initial fetch)":
      "ID del último incidente (para la recuperación inicial)",
    "Last Run":
      "Última ejecución",
    "Lastly, copy the API key.":
      "Por último, copie la clave de API.",
    "Limit of indicators to fetch from livehunt notification. Max 40.":
      "Límite de indicadores que se recuperarán de la notificación de livehunt. Máximo 40.",
    "Limit of indicators to fetch from retrohunt job results.":
      "Límite de indicadores que se recuperarán de los resultados del trabajo de retrohunt.",
    "Limitations":
      "Limitaciones",
    "Limitions":
      "Limitaciones",
    "List of domains to block":
      "Lista de dominios que se bloquearán",
    "Lists all of the security vulnerabilities for various products (OS,Applications) etc)":
      "Enumera todas las vulnerabilidades de seguridad de diversos productos (SO, aplicaciones, etc.)",
    "Located in the Firewall URL; by default of PAN-OS it is vsys1":
      "Se encuentra en la URL del firewall; de forma predeterminada en PAN-OS es vsys1",
    "Located in the Panorama UI. Go to Panorama, Device Groups and select the desired Device Group":
      "Se encuentra en la interfaz de Panorama. Vaya a Panorama, Device Groups y seleccione el Device Group deseado",
    "Log access — Access log files. You can either provide the client log access API or add a syslog receiver.":
      "Acceso a registros — Acceda a los archivos de registro. Puede proporcionar la API de acceso a registros del cliente o agregar un receptor de syslog.",
    "Log in to Kibana.":
      "Inicie sesión en Kibana.",
    "Log in to the Carbon Black console as the user for which you want to get the API key.":
      "Inicie sesión en la consola de Carbon Black como el usuario para el que desea obtener la clave de API.",
    "Log in to the Vectra UI as this local user.":
      "Inicie sesión en la interfaz de usuario de Vectra como este usuario local.",
    "Log in to your (Kenna account)[https://app.kennasecurity.com].":
      "Inicie sesión en su (cuenta de Kenna)[https://app.kennasecurity.com].",
    "Log in to your BloodHound Enterprise (BHE) tenant.":
      "Inicie sesión en su tenant de BloodHound Enterprise (BHE).",
    "Log in to your Magnet Automate interface.":
      "Inicie sesión en su interfaz de Magnet Automate.",
    "Log in to your Panorays platform.":
      "Inicie sesión en su plataforma de Panorays.",
    "Log in to your Splunk instance as an administrator":
      "Inicie sesión en su instancia de Splunk como administrador",
    "Log in to your VirusTotal console.":
      "Inicie sesión en su consola de VirusTotal.",
    "Log Type Query":
      "Consulta de tipo de registro",
    "Log Type Query Examples":
      "Ejemplos de consultas de tipo de registro",
    "Log Type Query.":
      "Consulta de tipo de registro.",
    "Login to the RiskSense platform.":
      "Inicie sesión en la plataforma de RiskSense.",
    "Long running instance enabled":
      "Instancia de ejecución prolongada habilitada",
    "Lookback Parameter Notes":
      "Notas sobre el parámetro lookback",
    "Mail server hostname or IP address":
      "Nombre de host o dirección IP del servidor de correo",
    "Maintain a consistent incident lifecycle between Threatmon and XSOAR.":
      "Mantenga un ciclo de vida de incidentes coherente entre Threatmon y XSOAR.",
    "Make sure the toggle at the bottom is switched on.":
      "Asegúrese de que el interruptor de la parte inferior esté activado.",
    "Manage PingOne users and their authentication settings through the PingOne Management API.":
      "Administre los usuarios de PingOne y su configuración de autenticación mediante la API de administración de PingOne.",
    "Map the severity of each indicator that will be synced to Cortex.":
      "Asigne la gravedad de cada indicador que se sincronizará con Cortex.",
    "Mapping limitations for XSOAR users below 6.0.0":
      "Limitaciones de asignación para usuarios de XSOAR anteriores a la versión 6.0.0",
    "Mattermost server address (e.g. https://1.2.3.4:8065)":
      "Dirección del servidor de Mattermost (p. ej., https://1.2.3.4:8065)",
    "Max fetch":
      "Recuperación máxima",
    "Max Fetch":
      "Recuperación máxima",
    "Max incidents per fetch (for each selected Log Type Query)":
      "Máximo de incidentes por recuperación (para cada consulta de tipo de registro seleccionada)",
    "Max number of events per incident":
      "Número máximo de eventos por incidente",
    "Maximum API requests per minute":
      "Número máximo de solicitudes de API por minuto",
    "Maximum events to fetch per fetch":
      "Número máximo de eventos que se recuperarán por recuperación",
    "Maximum incidents per fetch per type":
      "Número máximo de incidentes por recuperación y por tipo",
    "Maximum investigations per fetch":
      "Número máximo de investigaciones por recuperación",
    "Maximum is limited to 200.":
      "El máximo está limitado a 200.",
    "Maximum number of assets to fetch":
      "Número máximo de activos que se recuperarán",
    "Maximum number of entries returned from the query, to avoid slow response.":
      "Número máximo de entradas devueltas por la consulta, para evitar respuestas lentas.",
    "Maximum number of events per fetch":
      "Número máximo de eventos por recuperación",
    "Maximum number of events to fetch per type per fetch cycle (default: 5000).":
      "Número máximo de eventos que se recuperarán por tipo en cada ciclo de recuperación (predeterminado: 5000).",
    "Maximum number of incidents per fetch":
      "Número máximo de incidentes por recuperación",
    "Maximum number of incidents to fetch":
      "Número máximo de incidentes que se recuperarán",
    "Maximum Number Of Incidents To Fetch":
      "Número máximo de incidentes que se recuperarán",
    "Maximum number of incidents to fetch per run":
      "Número máximo de incidentes que se recuperarán por ejecución",
    "Maximum time to wait for a page to load (in seconds)":
      "Tiempo máximo de espera para que se cargue una página (en segundos)",
    "Maximum time to wait for a rate limiting call in seconds":
      "Tiempo máximo de espera para una llamada con límite de velocidad, en segundos",
    "McAfee ePO Server URI":
      "URI del servidor de McAfee ePO",
    "MCP Server Name":
      "Nombre del servidor MCP",
    "Methods to Authenticate Microsoft Defender XDR":
      "Métodos para autenticar Microsoft Defender XDR",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however we strongly recommend using OAuth 2.0 when using MFA.":
      "MFA se puede utilizar tanto con la autorización básica como con la autorización OAuth 2.0; sin embargo, le recomendamos encarecidamente utilizar OAuth 2.0 cuando use MFA.",
    "MFA can be used both when using basic authorization and when using OAuth 2.0 authorization, however, we strongly recommend using OAuth 2.0 when using MFA.":
      "MFA se puede utilizar tanto con la autorización básica como con la autorización OAuth 2.0; sin embargo, le recomendamos encarecidamente utilizar OAuth 2.0 cuando use MFA.",
    "Microsoft 365 Defender context":
      "Contexto de Microsoft 365 Defender",
    "Microsoft documentation":
      "Documentación de Microsoft",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Las integraciones de Microsoft (Graph y Azure) en Cortex utilizan aplicaciones de Entra ID para autenticarse con las API de Microsoft. Estas integraciones utilizan servicios de autenticación compatibles con los estándares OAuth 2.0 y OpenID Connect, que usan una aplicación para iniciar sesión o delegar la autenticación. Para obtener más información, consulte Microsoft identity platform overview.",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Las integraciones de Microsoft (Graph y Azure) en Cortex utilizan aplicaciones de Entra ID para autenticarse con las API de Microsoft. Estas integraciones utilizan servicios de autenticación compatibles con los estándares OAuth 2.0 y OpenID Connect, que usan una aplicación para iniciar sesión o delegar la autenticación. Para obtener más información, consulte Microsoft identity platform overview.",
    "Microsoft Management Activity API (O365/Azure Events) should be used to retrieve content records from the various Microsoft Management Activity content types.":
      "Se debe utilizar Microsoft Management Activity API (eventos de O365/Azure) para recuperar registros de contenido de los distintos tipos de contenido de Microsoft Management Activity.",
    "Microsoft Teams Documentation":
      "Documentación de Microsoft Teams",
    "Microsoft workflow URL":
      "URL del flujo de trabajo de Microsoft",
    "Microsoft’s technical blog":
      "Blog técnico de Microsoft",
    "Might have to slightly change the existing logic for some of their custom entities configured for Splunk (Playbooks, Mappers, Pre-Processing Rules, Scripts, Classifiers, etc.) in order for them to work with the modified structure of the fetched events.":
      "Es posible que deba modificar ligeramente la lógica existente de algunas de sus entidades personalizadas configuradas para Splunk (Playbooks, asignadores, reglas de preprocesamiento, scripts, clasificadores, etc.) para que funcionen con la estructura modificada de los eventos recuperados.",
    "Mimecast Documentation":
      "Documentación de Mimecast",
    "Mimecast uses quotas per period of time (i.e. rate limits) that apply to every API function, per registered App. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of 1 API will be permitted.":
      "Mimecast utiliza cuotas por período de tiempo (es decir, límites de velocidad) que se aplican a cada función de API, por cada aplicación registrada. Una cuota típica es un número de llamadas a la API por unidad de tiempo (aunque también puede expresarse como el tamaño de los datos devueltos, etc.). Cuando se agota la cuota, las solicitudes posteriores fallarán hasta que el nuevo período de tiempo reinicie el recuento de llamadas a la API. El valor de restablecimiento del límite de velocidad es la duración en milisegundos antes de que se permita un mínimo de 1 llamada a la API.",
    "Mimecast uses quotas per period of time (i.e., rate limits) that apply to every API function, per registered app. A typical quota is a number of API calls per unit of time (but could also be expressed as the size of data returned, etc.). When the quota has been exhausted, further requests will fail until the new time period restarts the count of API calls. The rate limit reset value is the length of time in milliseconds before a minimum of one API will be permitted.":
      "Mimecast utiliza cuotas por período de tiempo (es decir, límites de velocidad) que se aplican a cada función de API, por cada aplicación registrada. Una cuota típica es un número de llamadas a la API por unidad de tiempo (aunque también puede expresarse como el tamaño de los datos devueltos, etc.). Cuando se agota la cuota, las solicitudes posteriores fallarán hasta que el nuevo período de tiempo reinicie el recuento de llamadas a la API. El valor de restablecimiento del límite de velocidad es la duración en milisegundos antes de que se permita un mínimo de 1 llamada a la API.",
    "Min severity [1-4] 1=low":
      "Gravedad mínima [1-4] 1=baja",
    "Mirror Offense and Events":
      "Reflejar ofensas y eventos",
    "Mirror tag for notes":
      "Etiqueta de reflejo para notas",
    "Mirroring Direction":
      "Dirección del reflejo",
    "Mirroring offenses with events":
      "Reflejo de ofensas con eventos",
    "Mirroring Options":
      "Opciones de reflejo",
    "Model (optional free text override)":
      "Modelo (anulación opcional con texto libre)",
    "MongoDB Atlas (Posture) Instance":
      "Instancia de MongoDB Atlas (Posture)",
    "MongoDB Atlas Organization ID":
      "ID de organización de MongoDB Atlas",
    "More information can be found on https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/":
      "Puede encontrar más información en https://cortex.marketplace.pan.dev/marketplace/details/MicrosoftDefenderAdvancedThreatProtection/",
    "Most fields are optional and we allow empty subject and empty body":
      "La mayoría de los campos son opcionales y se permite dejar vacíos el asunto y el cuerpo",
    "My API Key":
      "Mi clave de API",
    "My MongoDB Atlas account is protected by network policies":
      "Mi cuenta de MongoDB Atlas está protegida por políticas de red",
    "My Snowflake account is protected by network policies":
      "Mi cuenta de Snowflake está protegida por políticas de red",
    "Name of the folder from which to fetch incidents (supports Folder ID and sub-folders e.g., Inbox/Phishing)":
      "Nombre de la carpeta de la que se recuperarán los incidentes (admite ID de carpeta y subcarpetas, p. ej., Inbox/Phishing)",
    "Name of the folder or sub-folder from which to fetch incidents":
      "Nombre de la carpeta o subcarpeta de la que se recuperarán los incidentes",
    "Name of the instance":
      "Nombre de la instancia",
    "New notes from the Vectra Detection will be created as notes in the XSOAR incident. Updates to existing notes in the Vectra Detection will create new notes in the XSOAR incident.":
      "Las notas nuevas de Vectra Detection se crearán como notas en el incidente de XSOAR. Las actualizaciones de las notas existentes en Vectra Detection crearán notas nuevas en el incidente de XSOAR.",
    "New notes from the XSOAR incident will be created as notes in the Vectra Detection. Updates to existing notes in the XSOAR incident will not be reflected in the Vectra Detection.":
      "Las notas nuevas del incidente de XSOAR se crearán como notas en Vectra Detection. Las actualizaciones de las notas existentes en el incidente de XSOAR no se reflejarán en Vectra Detection.",
    "Newly fetched incidents will be mirrored in the chosen direction.":
      "Los incidentes recuperados recientemente se reflejarán en la dirección elegida.",
    "None - Turns off incident mirroring.":
      "Ninguno - Desactiva el reflejo de incidentes.",
    "Note for the autofocus-sample-analysis Command":
      "Nota sobre el comando autofocus-sample-analysis",
    "Note that the default query values has some example text in it, make sure to enter a valid query.":
      "Tenga en cuenta que los valores de consulta predeterminados contienen texto de ejemplo; asegúrese de introducir una consulta válida.",
    "Note: Cortex recommends you use the Query only application events configured in IAM Configuration option to generate the fetch-incidents query filter. The following following method should be used primarily for debugging purposes.":
      "Nota: Cortex recomienda utilizar la opción \"Query only application events configured in IAM Configuration\" para generar el filtro de consulta de fetch-incidents. El siguiente método debe utilizarse principalmente con fines de depuración.",
    "Note: If you are using a custom incident type, you also need to create custom corresponding incoming and outgoing mappers.":
      "Nota: Si utiliza un tipo de incidente personalizado, también debe crear los asignadores entrante y saliente personalizados correspondientes.",
    "Note: If you have a TIM license that is up-to-date, you do not need to set up an API key.":
      "Nota: Si tiene una licencia de TIM actualizada, no es necesario configurar una clave de API.",
    "Note: In the example, Splunk Generic is a custom incident type.":
      "Nota: En el ejemplo, Splunk Generic es un tipo de incidente personalizado.",
    "Note: JWT authentication method was deprecated by Zoom from June 2023 and not available anymore.":
      "Nota: Zoom dejó obsoleto el método de autenticación JWT a partir de junio de 2023 y ya no está disponible.",
    "NOTE: The enrichment and mirroring mechanisms use a new default fetch query.":
      "Nota: Los mecanismos de enriquecimiento y reflejo utilizan una nueva consulta de recuperación predeterminada.",
    "Note: The integration is supported in Cortex and Cortex XSIAM without using an engine.":
      "Nota: La integración es compatible con Cortex y Cortex XSIAM sin utilizar un motor.",
    "Note: This is a beta Integration, which lets you implement and test pre-release software. Since the integration is beta, it might contain bugs. Updates to the integration during the beta phase might include non-backward compatible features. We appreciate your feedback on the quality and usability of the integration to help us identify issues, fix them, and continually improve.":
      "Nota: Esta es una integración beta, que le permite implementar y probar software de versión preliminar. Dado que la integración es beta, puede contener errores. Las actualizaciones de la integración durante la fase beta pueden incluir funciones no compatibles con versiones anteriores. Agradecemos sus comentarios sobre la calidad y la usabilidad de la integración, ya que nos ayudan a identificar problemas, corregirlos y mejorar continuamente.",
    "Note: This parameter is only used when close detection on incident closer is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Nota: Este parámetro solo se utiliza cuando close detection on incident closer está 'checked' y la dirección del reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Note: This parameter is only used when open detection on incident reopen is 'checked' and the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Nota: Este parámetro solo se utiliza cuando open detection on incident reopen está 'checked' y la dirección del reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Note: This parameter is only used when the mirroring direction is set to 'Outgoing' or 'Incoming And Outgoing'.":
      "Nota: Este parámetro solo se utiliza cuando la dirección del reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Note: This will not affect existing incidents.":
      "Nota: Esto no afectará a los incidentes existentes.",
    "Note: When upgrading from v1 (MITRE IDs Feed) to v2 (MITRE ATT&CK) - disabling the MITRE IDs Feed indicator type, and instance are important for the smooth flow of the upgrade.":
      "Nota: Al actualizar de la v1 (MITRE IDs Feed) a la v2 (MITRE ATT&CK), es importante deshabilitar el tipo de indicador y la instancia de MITRE IDs Feed para que la actualización se desarrolle sin problemas.",
    "Notice: Submitting indicators using the following commands of this integration might make the indicator data publicly available.":
      "Aviso: Al enviar indicadores mediante los siguientes comandos de esta integración, los datos de los indicadores podrían quedar disponibles públicamente.",
    "Notifications channel":
      "Canal de notificaciones",
    "Notifications channel (You will need to invite the Demisto Bot user to this channel)":
      "Canal de notificaciones (deberá invitar al usuario Demisto Bot a este canal)",
    "Number of addresses to enrich per API call":
      "Número de direcciones que se enriquecerán por llamada a la API",
    "Number of connection error retries":
      "Número de reintentos por error de conexión",
    "Number of days before hire date to enable Active Directory account":
      "Número de días antes de la fecha de contratación para habilitar la cuenta de Active Directory",
    "Number of days before hire date to sync hires":
      "Número de días antes de la fecha de contratación para sincronizar las nuevas contrataciones",
    "Number of Events Per Enrichment Type":
      "Número de eventos por tipo de enriquecimiento",
    "Number of incidents per fetch.":
      "Número de incidentes por recuperación.",
    "Number of maximum Chrome instances to keep running simultaneously.":
      "Número máximo de instancias de Chrome que se mantendrán en ejecución simultáneamente.",
    "Number of maximum tabs each Chrome will be allowed to open.":
      "Número máximo de pestañas que cada Chrome podrá abrir.",
    "Number of offenses to pull per API call":
      "Número de ofensas que se obtendrán por llamada a la API",
    "Number of offenses to pull per API call (max 50)":
      "Número de ofensas que se obtendrán por llamada a la API (máx. 50)",
    "OAuth 2.0 Authorization":
      "Autorización de OAuth 2.0",
    "OAuth 2.0 authorization.":
      "Autorización de OAuth 2.0.",
    "OAuth2 Credentials":
      "Credenciales de OAuth2",
    "Obtain the API Key":
      "Obtención de la clave de API",
    "Obtaining API Credentials":
      "Obtención de credenciales de API",
    "OCR engine.":
      "Motor de OCR.",
    "Offense Enrichment":
      "Enriquecimiento de ofensas",
    "Offenses":
      "Ofensas",
    "Okta API Scopes":
      "Ámbitos de la API de Okta",
    "Okta API tokens are used to authenticate requests to Okta APIs.":
      "Los tokens de la API de Okta se utilizan para autenticar solicitudes a las API de Okta.",
    "Okta documentation":
      "Documentación de Okta",
    "Okta URL (https://<domain>.okta.com)":
      "URL de Okta (https://<domain>.okta.com)",
    "Only applies when Findings scope is \"Supplier Findings\". Only findings with these severities create incidents.":
      "Solo se aplica cuando Findings scope es \"Supplier Findings\". Solo los hallazgos con estas gravedades crean incidentes.",
    "Only fetch events with this text in the name":
      "Recuperar solo los eventos que contengan este texto en el nombre",
    "Only use Features that are available in On-Premise installations":
      "Utilizar solo las funciones disponibles en las instalaciones locales",
    "Open Detection on Incident Reopen":
      "Abrir detección al reabrir el incidente",
    "Open the Google Authenticator application on your mobile device and make note of the number. The number refreshes every 30 seconds.":
      "Abra la aplicación Google Authenticator en su dispositivo móvil y anote el número. El número se actualiza cada 30 segundos.",
    "Open the Illusive Management console, navigate to Settings > General, and locate the API KEYS section. Generate a new API key with all permissions and copy the token at the end of the process.":
      "Abra la consola Illusive Management, vaya a Settings > General y localice la sección API KEYS. Genere una nueva clave de API con todos los permisos y copie el token al final del proceso.",
    "OpenDXL documentation":
      "Documentación de OpenDXL",
    "Optional":
      "Opcional",
    "Optional - Welcome message when creating new incidents using the bot. If left empty (default option) the current default welcome message will be used, i.e., \"Successfully created incident <incident_name>. View it on: <incident_link>\". If the parameter is set to \"no_welcome_message\" value, no message will be displayed. Any non-empty string value set will be used as the custom new incident welcome message.":
      "Opcional - Mensaje de bienvenida al crear nuevos incidentes mediante el bot. Si se deja vacío (opción predeterminada), se utilizará el mensaje de bienvenida predeterminado actual, es decir, \"Successfully created incident <incident_name>. View it on: <incident_link>\". Si el parámetro se establece en el valor \"no_welcome_message\", no se mostrará ningún mensaje. Cualquier valor de cadena no vacío establecido se utilizará como mensaje de bienvenida personalizado para nuevos incidentes.",
    "Other Sources of WildFire API keys":
      "Otras fuentes de claves de API de WildFire",
    "Outgoing - Any changes in Cortex incidents (finding’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk findings.":
      "Outgoing - Cualquier cambio en los incidentes de Cortex (estado del hallazgo (no status_label), urgencia, comentarios y propietario) se reflejará en los hallazgos de Splunk.",
    "Outgoing - Any changes in Cortex incidents (notable’s status (not status_label), urgency, comments, and owner) will be reflected in Splunk notables.":
      "Outgoing - Cualquier cambio en los incidentes de Cortex (estado del notable (no status_label), urgencia, comentarios y propietario) se reflejará en los notables de Splunk.",
    "Outgoing - Mirrors changes from the Cortex incident to the Vectra RUX Detection.":
      "Outgoing - Refleja los cambios del incidente de Cortex en Vectra RUX Detection.",
    "Output results of V1 commands to the context data in the old format":
      "Enviar los resultados de los comandos V1 a los datos de contexto en el formato anterior",
    "Override Agent":
      "Anular agente",
    "Override the agent header sent with WildFire API requests. auto = auto-detect based on platform (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW":
      "Anula el encabezado de agente enviado con las solicitudes de la API de WildFire. auto = detección automática según la plataforma (XSOAR/XSIAM), xdr = Cortex XSIAM, xsoartim = XSOAR TIM, pcc = Prisma Cloud Compute, prismaaccessapi = Prisma Access, other = NGFW",
    "Package resolution for code scanning":
      "Resolución de paquetes para el análisis de código",
    "Palo Alto Networks documentation":
      "Documentación de Palo Alto Networks",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto recomienda configurar Splunk para generar alertas básicas que la integración de SplunkPy pueda ingerir, creando un índice de resumen en el que se almacenen las alertas. A continuación, la integración de SplunkPy puede consultar ese índice para la ingesta de incidentes. No se recomienda utilizar la aplicación Cortex con Splunk para el consumo rutinario de eventos, ya que este método no se puede supervisar y no es escalable.",
    "Palo Alto recommends that you configure Splunk to produce basic alerts that the SplunkPy v2 integration can ingest, by creating a summary index in which alerts are stored. The SplunkPy v2 integration can then query that index for incident ingestion. It is not recommended to use the Cortex application with Splunk for routine event consumption because this method is not able to be monitored and is not scalable.":
      "Palo Alto recomienda configurar Splunk para generar alertas básicas que la integración de SplunkPy v2 pueda ingerir, creando un índice de resumen en el que se almacenen las alertas. A continuación, la integración de SplunkPy v2 puede consultar ese índice para la ingesta de incidentes. No se recomienda utilizar la aplicación Cortex con Splunk para el consumo rutinario de eventos, ya que este método no se puede supervisar y no es escalable.",
    "PAN support":
      "Soporte de PAN",
    "Pan-OS/Panorama API Key":
      "Clave de API de Pan-OS/Panorama",
    "Pan-OS/Panorama Server URL":
      "URL del servidor de Pan-OS/Panorama",
    "Panorays PAPI base URL":
      "URL base de PAPI de Panorays",
    "Parameter":
      "Parámetro",
    "Password - Used to generate the certificate":
      "Contraseña - Se utiliza para generar el certificado",
    "Password (Required for Basic authentication only)":
      "Contraseña (obligatoria solo para la autenticación básica)",
    "Password / Access Key Secret":
      "Contraseña / Secreto de clave de acceso",
    "Password / Client Secret":
      "Contraseña / Secreto de cliente",
    "Paste the Api Token copied from Orca":
      "Pegue el token de API copiado de Orca",
    "Paste your Terraform Enterprise token and domain name in the fields below":
      "Pegue su token de Terraform Enterprise y el nombre de dominio en los campos siguientes",
    "PingOne has 3 regions, US, EU and Asia.":
      "PingOne tiene 3 regiones: US, EU y Asia.",
    "PingOne Region":
      "Región de PingOne",
    "Please make sure you have the correct role so you have permissions to work with the relevant table.":
      "Asegúrese de tener el rol correcto para contar con los permisos necesarios para trabajar con la tabla correspondiente.",
    "Please refer to the documentation for a list of known endpoints.":
      "Consulte la documentación para obtener una lista de los endpoints conocidos.",
    "Port (e.g 443)":
      "Puerto (p. ej., 443)",
    "Preferred Vendor Threshold. The minimum number of highly trusted vendors required to consider a domain, IP address, URL, or file as malicious.":
      "Umbral de proveedores preferidos. Número mínimo de proveedores de alta confianza necesarios para considerar un dominio, una dirección IP, una URL o un archivo como malicioso.",
    "Preferred Vendors List. CSV list of vendors which are considered more trustworthy.":
      "Lista de proveedores preferidos. Lista CSV de proveedores que se consideran más fiables.",
    "Preferred Vendors List. CSV list of vendors who are considered more trustworthy.":
      "Lista de proveedores preferidos. Lista CSV de proveedores que se consideran más fiables.",
    "Premium Subscription":
      "Suscripción Premium",
    "Premium Subscription Only: Relationship Malicious Files Threshold":
      "Solo con suscripción Premium: umbral de archivos maliciosos de la relación",
    "Premium Subscription Only: Relationship Suspicious Files Threshold":
      "Solo con suscripción Premium: umbral de archivos sospechosos de la relación",
    "Prerequisite":
      "Requisito previo",
    "Prerequisite - Connect to McAfee Threat Intelligence Exchange (TIE) using the DXL TIE Client":
      "Requisito previo - Conectarse a McAfee Threat Intelligence Exchange (TIE) mediante DXL TIE Client",
    "Prerequisites in order to support JWT":
      "Requisitos previos para admitir JWT",
    "Prisma Access & NGFW Configuration":
      "Configuración de Prisma Access y NGFW",
    "Prisma Access API Key from Panorama":
      "Clave de API de Prisma Access de Panorama",
    "Prisma Cloud service tenant admin console URL. The URL for the Prisma Cloud service varies depending on the cluster on which your tenant is deployed. For more information see: https://pan.dev/prisma-cloud/api/cspm/api-urls/.":
      "URL de la consola de administración del tenant del servicio Prisma Cloud. La URL del servicio Prisma Cloud varía según el clúster en el que esté implementado su tenant. Para obtener más información, consulte: https://pan.dev/prisma-cloud/api/cspm/api-urls/.",
    "Private Key (Required for HTTPS)":
      "Clave privada (obligatoria para HTTPS)",
    "Private url is https://private.tria.ge/api/v0/":
      "La URL privada es https://private.tria.ge/api/v0/",
    "Proofpoint on Demand (PoD) administrators must file a support ticket to Proofpoint support to obtain a role with access to an API.":
      "Los administradores de Proofpoint on Demand (PoD) deben enviar un ticket de soporte al servicio de soporte de Proofpoint para obtener un rol con acceso a una API.",
    "Proofpoint Protection Server Version (e.g., 8.14.2)":
      "Versión de Proofpoint Protection Server (p. ej., 8.14.2)",
    "Provide a Client Name and Role, then click “Generate Credentials”.":
      "Indique un Client Name y un Role y, a continuación, haga clic en \"Generate Credentials\".",
    "Provide a name for the token and set an expiration time (optional)":
      "Indique un nombre para el token y establezca un tiempo de caducidad (opcional)",
    "Provide server URL and API Token.":
      "Proporcione la URL del servidor y el token de API.",
    "Provide server URL, ‘Live Response’ API key and connector.":
      "Proporcione la URL del servidor, la clave de API de 'Live Response' y el conector.",
    "Provides a list of versions by product name or id":
      "Proporciona una lista de versiones por nombre o ID de producto",
    "Provides all or specific vendor details to include vendor name and id":
      "Proporciona los detalles de todos los proveedores o de uno específico, incluidos el nombre y el ID del proveedor",
    "Provides full details about a specific vulnerability by id":
      "Proporciona todos los detalles de una vulnerabilidad específica por ID",
    "Provides full details about a specific vulnerability by vendor and product id":
      "Proporciona todos los detalles de una vulnerabilidad específica por ID de proveedor y de producto",
    "Provides full details about a specific vulnerability by vendor and product name":
      "Proporciona todos los detalles de una vulnerabilidad específica por nombre de proveedor y de producto",
    "Provides full details about vulnerabilities by cve id":
      "Proporciona todos los detalles de las vulnerabilidades por ID de CVE",
    "Provides full details about vulnerabilities by product id":
      "Proporciona todos los detalles de las vulnerabilidades por ID de producto",
    "Provides full details about vulnerabilities by vendor id":
      "Proporciona todos los detalles de las vulnerabilidades por ID de proveedor",
    "Provides the recent vulnerabilities by dates or hours":
      "Proporciona las vulnerabilidades recientes por fechas u horas",
    "Provides the versions for the specified product by product name or id":
      "Proporciona las versiones del producto especificado por nombre o ID de producto",
    "Proxy URL":
      "URL del proxy",
    "Proxy URL password":
      "Contraseña de la URL del proxy",
    "Proxy URL Password":
      "Contraseña de la URL del proxy",
    "Proxy URL to use in Slack API calls":
      "URL del proxy que se usará en las llamadas a la API de Slack",
    "Proxy URL username":
      "Nombre de usuario de la URL del proxy",
    "Proxy URL Username":
      "Nombre de usuario de la URL del proxy",
    "Public key / Private key":
      "Clave pública / clave privada",
    "PUBLIC KEYS":
      "CLAVES PÚBLICAS",
    "Push events from Cortex to Splunk":
      "Enviar eventos de Cortex a Splunk",
    "QRadar API Version":
      "Versión de la API de QRadar",
    "QRadar API versions page":
      "Página de versiones de la API de QRadar",
    "QRadar filter documentation":
      "Documentación de filtros de QRadar",
    "QRadar Filter Syntax Documentation":
      "Documentación de la sintaxis de filtros de QRadar",
    "QRadar offense documentation":
      "Documentación de ofensas de QRadar",
    "QRadar Offense Documentation":
      "Documentación de ofensas de QRadar",
    "Quarantine management — Quarantine assets and restore quarantined assets.":
      "Gestión de cuarentena: ponga activos en cuarentena y restaure los activos en cuarentena.",
    "Query all CVEs monitored by ThreatMon, including CVSS v2, v3, v3.1, and v4 scores.":
      "Consulte todos los CVE supervisados por ThreatMon, incluidas las puntuaciones CVSS v2, v3, v3.1 y v4.",
    "Query and response with Carbon Black endpoint detection and response.":
      "Consulta y respuesta con la detección y respuesta de endpoints de Carbon Black.",
    "Query CVEs affecting products the company is subscribed to.":
      "Consulte los CVE que afectan a los productos a los que la empresa está suscrita.",
    "Query Example":
      "Ejemplo de consulta",
    "Query to fetch offenses":
      "Consulta para recuperar ofensas",
    "Query URL":
      "URL de consulta",
    "Rasterize Mode":
      "Modo de rasterización",
    "Rate Limiting":
      "Limitación de velocidad",
    "Rate Limits":
      "Límites de velocidad",
    "Recommended for private/on-prem.":
      "Recomendado para entornos privados/locales.",
    "Red Teaming operations require accepting the End User License Agreement.":
      "Las operaciones de Red Teaming requieren aceptar el Contrato de licencia de usuario final.",
    "Redirect URL":
      "URL de redirección",
    "Refresh Token":
      "Token de actualización",
    "Reliability of the source providing intelligence data":
      "Fiabilidad de la fuente que proporciona los datos de inteligencia",
    "Request data removal for Black Market Monitoring findings directly from XSOAR playbooks.":
      "Solicite la eliminación de datos de los hallazgos de Black Market Monitoring directamente desde los Playbooks de XSOAR.",
    "Request timeout":
      "Tiempo de espera de la solicitud",
    "Request Timeout":
      "Tiempo de espera de la solicitud",
    "Request timeout (in seconds)":
      "Tiempo de espera de la solicitud (en segundos)",
    "Request timeout (in seconds).":
      "Tiempo de espera de la solicitud (en segundos).",
    "Require Demonstrating Proof of Possession (DPoP) header in token requests":
      "Requerir el encabezado Demonstrating Proof of Possession (DPoP) en las solicitudes de token",
    "Required and used if more than one key is used for signing JWT tokens.":
      "Obligatorio y utilizado si se usa más de una clave para firmar tokens JWT.",
    "Required and used if OAuth 2.0 is used for authentication. See detailed instructions on the 'Help' tab.":
      "Obligatorio y utilizado si se usa OAuth 2.0 para la autenticación. Consulte las instrucciones detalladas en la pestaña 'Ayuda'.",
    "Required Scopes":
      "Scopes requeridos",
    "Required when choosing an external engine. You must enable Long running instance to run the web server on this port from within Cortex. Requires a unique port for each long-running integration instance. Do not use the same port for multiple instances.":
      "Obligatorio al elegir un motor externo. Debe habilitar la instancia de ejecución prolongada para ejecutar el servidor web en este puerto desde Cortex. Se requiere un puerto único para cada instancia de integración de ejecución prolongada. No utilice el mismo puerto para varias instancias.",
    "Requirements":
      "Requisitos",
    "Requires a server URL, and an API key":
      "Requiere una URL de servidor y una clave de API",
    "Reset the “last run”":
      "Restablecer el “last run”",
    "Resetting the enriching fetch mechanism":
      "Restablecimiento del mecanismo de recuperación de enriquecimiento",
    "Retrieve Your API Key":
      "Obtener su clave de API",
    "Retry requests when API is rate limited":
      "Reintentar solicitudes cuando la API tenga limitación de velocidad",
    "Return Errors":
      "Devolver errores",
    "Return Errors: If this checkbox is not selected, a warning will be returned instead of an error entry.":
      "Devolver errores: si no se selecciona esta casilla, se devolverá una advertencia en lugar de una entrada de error.",
    "Run the command":
      "Ejecute el comando",
    "Run this query to fetch new events as incidents":
      "Ejecute esta consulta para recuperar nuevos eventos como incidentes",
    "Runtime API Key":
      "Clave de API de tiempo de ejecución",
    "Save changes":
      "Guardar cambios",
    "Save intrusion sets as threat actor indicator types":
      "Guardar los conjuntos de intrusión como tipos de indicador de actor de amenazas",
    "Scanner API Base URL":
      "URL base de la API del escáner",
    "Scanner API base URL for runtime scanning operations. Default is US region. For other regions: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. This must match the region selected during deployment profile creation.":
      "URL base de la API del escáner para las operaciones de análisis en tiempo de ejecución. El valor predeterminado es la región de EE. UU. Para otras regiones: EU: https://service-de.api.aisecurity.paloaltonetworks.com, IN: https://service-in.api.aisecurity.paloaltonetworks.com, SG: https://service-sg.api.aisecurity.paloaltonetworks.com. Debe coincidir con la región seleccionada durante la creación del perfil de implementación.",
    "Scope (Required for using Cortex Azure app)":
      "Scope (obligatorio para usar la aplicación Cortex Azure)",
    "Search and Compliance URL":
      "URL de búsqueda y cumplimiento",
    "Search for SplunkPy and select your integration instance.":
      "Busque SplunkPy y seleccione su instancia de integración.",
    "Search for SplunkPy v2 and select your integration instance.":
      "Busque SplunkPy v2 y seleccione su instancia de integración.",
    "Search for VulnDB.":
      "Busque VulnDB.",
    "Seconds to sleep between checking for results":
      "Segundos de espera entre comprobaciones de resultados",
    "Secret token":
      "Token secreto",
    "Secret Token":
      "Token secreto",
    "Secret Token(Team Chat App)":
      "Token secreto (Team Chat App)",
    "See detailed instructions on the 'Help' tab.":
      "Consulte las instrucciones detalladas en la pestaña 'Ayuda'.",
    "See the vendor’s documentation for more details.":
      "Consulte la documentación del proveedor para obtener más información.",
    "Select Scan Type":
      "Seleccionar tipo de análisis",
    "Select SSL certificate validation and Proxy if required.":
      "Seleccione la validación del certificado SSL y el proxy si es necesario.",
    "Select the “Detection Close Reason for Incident Closure” option if you want to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Remediated’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Seleccione la opción “Detection Close Reason for Incident Closure” si desea establecer el motivo de cierre de la detección en Vectra cuando se cierre el incidente en XSOAR. El valor predeterminado es ‘Remediated’. Esta opción solo se utiliza cuando la opción “Close Detection on Incident Closure” está seleccionada y la dirección de reflejo está establecida en ‘Outgoing’ o ‘Incoming And Outgoing’.",
    "Select the “Detection Status for Incident Reopen” option if you want to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Seleccione la opción “Detection Status for Incident Reopen” si desea establecer el estado de la detección en Vectra cuando se vuelva a abrir el incidente en XSOAR. El valor predeterminado es ‘Escalated’. Esta opción solo se utiliza cuando la opción “Open Detection on Incident Reopen” está seleccionada y la dirección de reflejo está establecida en ‘Outgoing’ o ‘Incoming And Outgoing’.",
    "Select the date format of your ServiceNow instance. Mandatory when using the `Use Display Value` option. More details under the troubleshooting section in the documentation of the integration. The integration supports the ServiceNow default time format (full form) `HH:mm:ss` with support to `a` notation for AM/PM.":
      "Seleccione el formato de fecha de su instancia de ServiceNow. Obligatorio cuando se usa la opción `Use Display Value`. Encontrará más detalles en la sección de solución de problemas de la documentación de la integración. La integración admite el formato de hora predeterminado de ServiceNow (forma completa) `HH:mm:ss`, con compatibilidad con la notación `a` para AM/PM.",
    "Select the field that determines when to trigger a termination incident for deactivated employees.":
      "Seleccione el campo que determina cuándo se activa un incidente de baja para los empleados desactivados.",
    "Select the list of relationships to retrieve from the API. Note that relationships that are signed with * key are available only for the VirusTotal premium API key.":
      "Seleccione la lista de relaciones que se recuperarán de la API. Tenga en cuenta que las relaciones marcadas con * solo están disponibles con la clave de API premium de VirusTotal.",
    "Select this checkbox if to use OAuth 2.0 authentication. See (?) for more information.":
      "Marque esta casilla para usar la autenticación OAuth 2.0. Consulte (?) para obtener más información.",
    "Select this checkbox to retrieve comments and work notes without accessing the `sys_field_journal` table.":
      "Marque esta casilla para recuperar comentarios y notas de trabajo sin acceder a la tabla `sys_field_journal`.",
    "Select this checkbox to retrieve the body of an email in HTML format. If this checkbox is not selected, a psuedo-text representation of HTML emails will be returned and some functionality in other packs (e.g., email previews in the Email Communication pack) may not provide their full capabilities.":
      "Marque esta casilla para recuperar el cuerpo de un correo electrónico en formato HTML. Si no se marca esta casilla, se devolverá una representación de seudotexto de los correos electrónicos HTML y es posible que algunas funciones de otros paquetes (p. ej., las vistas previas de correo electrónico del paquete Email Communication) no ofrezcan todas sus capacidades.",
    "Select this checkbox to use JWT authentication. See (?) for more information.":
      "Marque esta casilla para usar la autenticación JWT. Consulte (?) para obtener más información.",
    "Select this option if the bot was originally created as multi-tenant and later converted to single-tenant. The system will detect the bot type automatically in all other standard cases.":
      "Seleccione esta opción si el bot se creó originalmente como multi-tenant y luego se convirtió a single-tenant. El sistema detectará el tipo de bot automáticamente en todos los demás casos estándar.",
    "Select which domains you would like to pull indicators from. Additionally, each domain has a subset of “concepts”. Most of the domains have all of the concepts, with the exception of the “PRE-ATT&CK” domain. There are only a small subset of “concepts” within this domain. Any concept that does not exist will be skipped.":
      "Seleccione los dominios de los que desea extraer indicadores. Además, cada dominio tiene un subconjunto de “conceptos”. La mayoría de los dominios tienen todos los conceptos, con la excepción del dominio “PRE-ATT&CK”. Este dominio solo tiene un pequeño subconjunto de “conceptos”. Se omitirá cualquier concepto que no exista.",
    "Select which event types to fetch from KOI.":
      "Seleccione los tipos de eventos que se recuperarán de KOI.",
    "Select which log types to fetch.":
      "Seleccione los tipos de registro que se recuperarán.",
    "Select which log types to fetch. Selecting 'All' will use all the log type queries in the fetch. To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "Seleccione los tipos de registro que se recuperarán. Si selecciona 'All', se usarán todas las consultas de tipos de registro en la recuperación. Para elegir un conjunto específico de consultas, seleccione sus tipos de registro en la lista desplegable (asegúrese de que la opción 'All' no esté seleccionada).",
    "Select which record types to fetch. You can select Alerts, Incidents, or both.":
      "Seleccione los tipos de registro que se recuperarán. Puede seleccionar alertas, incidentes o ambos.",
    "Select your instance.":
      "Seleccione su instancia.",
    "Selecting 'All' will use all the log type queries in the fetch.":
      "Si selecciona 'All', se usarán todas las consultas de tipos de registro en la recuperación.",
    "Selecting “All” will use all the log type queries in the fetch.":
      "Si selecciona “All”, se usarán todas las consultas de tipos de registro en la recuperación.",
    "Self-serve pay-as-you-go keys are entitled to all six by default.":
      "Las claves de pago por uso de autoservicio tienen derecho a los seis de forma predeterminada.",
    "Send emails including support for rich emails with HTML and embedded files.":
      "Envíe correos electrónicos, con compatibilidad con correos enriquecidos con HTML y archivos incrustados.",
    "Send notifications about incidents to the dedicated channel":
      "Enviar notificaciones sobre incidentes al canal dedicado",
    "Sender address":
      "Dirección del remitente",
    "Sender address can be specified as 'user@host.com' or 'Full Name <user@host.com>'":
      "La dirección del remitente se puede especificar como 'user@host.com' o 'Full Name <user@host.com>'",
    "Server Address":
      "Dirección del servidor",
    "Server base URL":
      "URL base del servidor",
    "Server base URL (e.g., https://192.168.0.1/publicapi)":
      "URL base del servidor (p. ej., https://192.168.0.1/publicapi)",
    "Server Host or IP":
      "Host o IP del servidor",
    "Server Host or IP (e.g., 10.1.1.9 or panorama.my.domain)":
      "Host o IP del servidor (p. ej., 10.1.1.9 o panorama.my.domain)",
    "Server IP / Hostname (e.g. 1.2.3.4)":
      "IP / nombre de host del servidor (p. ej., 1.2.3.4)",
    "Server NetBIOS (AD) Name":
      "Nombre NetBIOS (AD) del servidor",
    "Server Port":
      "Puerto del servidor",
    "Server URL (e.g. 'https://api.zoom.us/v2/')":
      "URL del servidor (p. ej., 'https://api.zoom.us/v2/')",
    "Server URL (e.g. https://192.168.0.1:20013)":
      "URL del servidor (p. ej., https://192.168.0.1:20013)",
    "Server URL (e.g. https://analysis.lastline.com)":
      "URL del servidor (p. ej., https://analysis.lastline.com)",
    "Server URL (e.g. https://api.kennasecurity.com)":
      "URL del servidor (p. ej., https://api.kennasecurity.com)",
    "Server URL (e.g. https://example.net)":
      "URL del servidor (p. ej., https://example.net)",
    "Server URL (e.g. https://vxsuz5.manage.trendmicro.com)":
      "URL del servidor (p. ej., https://vxsuz5.manage.trendmicro.com)",
    "Server URL (e.g., 'https://api.zoom.us/v2/')":
      "URL del servidor (p. ej., 'https://api.zoom.us/v2/')",
    "Server URL (e.g., https://192.0.2.0:8080)":
      "URL del servidor (p. ej., https://192.0.2.0:8080)",
    "Server URL (e.g., https://192.168.0.1:10000)":
      "URL del servidor (p. ej., https://192.168.0.1:10000)",
    "Server URL (e.g., https://api.securitycenter.microsoft.com)":
      "URL del servidor (p. ej., https://api.securitycenter.microsoft.com)",
    "Server URL (e.g., https://cloud.vmray.com)":
      "URL del servidor (p. ej., https://cloud.vmray.com)",
    "Server URL (e.g., https://demisto.zendesk.com)":
      "URL del servidor (p. ej., https://demisto.zendesk.com)",
    "Server URL (e.g., https://xxxxxxxx.pphosted.com:10000)":
      "URL del servidor (p. ej., https://xxxxxxxx.pphosted.com:10000)",
    "Server URL used to enter the Sophos XG Firewall web console. e.g., https://ip:port/":
      "URL del servidor utilizada para acceder a la consola web de Sophos XG Firewall. P. ej., https://ip:port/",
    "Service Key (for triggering events only)":
      "Clave de servicio (solo para activar eventos)",
    "Service Key (for triggering, acknowledging and resolving events only)":
      "Clave de servicio (solo para activar, confirmar y resolver eventos)",
    "ServiceNow API Version (e.g. 'v1')":
      "Versión de la API de ServiceNow (p. ej., 'v1')",
    "ServiceNow API Version (e.g. 'v1'). Specify this value to use an endpoint version other than the latest.":
      "Versión de la API de ServiceNow (p. ej., 'v1'). Especifique este valor para usar una versión del endpoint distinta de la más reciente.",
    "ServiceNow docs":
      "Documentación de ServiceNow",
    "ServiceNow Instance":
      "Instancia de ServiceNow",
    "ServiceNow Instance URL":
      "URL de la instancia de ServiceNow",
    "ServiceNow ticket column to be set as the incident name. Default is the incident number":
      "Columna del ticket de ServiceNow que se establecerá como nombre del incidente. El valor predeterminado es el número de incidente",
    "ServiceNow URL (https://<domain>.service-now.com)":
      "URL de ServiceNow (https://<domain>.service-now.com)",
    "ServiceNow URL, in the format https://company.service-now.com/":
      "URL de ServiceNow, con el formato https://company.service-now.com/",
    "ServiceNowGenericFeed fetches records from a ServiceNow CMDB API endpoint and ingests them as indicators into Cortex TIM with user desired tags.":
      "ServiceNowGenericFeed recupera registros de un endpoint de la API de ServiceNow CMDB y los ingiere como indicadores en Cortex TIM con las etiquetas que desee el usuario.",
    "Set the “Detection Close Reason for Incident Closure” option to set the detection close reason in Vectra when the incident is closed in XSOAR. Default value is ‘Benign’. This option is only used when the “Close Detection on Incident Closure” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Configure la opción “Detection Close Reason for Incident Closure” para establecer el motivo de cierre de la detección en Vectra cuando se cierre el incidente en XSOAR. El valor predeterminado es ‘Benign’. Esta opción solo se utiliza cuando la opción “Close Detection on Incident Closure” está seleccionada y la dirección de reflejo está establecida en ‘Outgoing’ o ‘Incoming And Outgoing’.",
    "Set the “Detection Status for Incident Reopen” option to set the detection status in Vectra when the incident is reopened in XSOAR. Default value is ‘Escalated’. This option is only used when the “Open Detection on Incident Reopen” option is checked and the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Configure la opción “Detection Status for Incident Reopen” para establecer el estado de la detección en Vectra cuando se vuelva a abrir el incidente en XSOAR. El valor predeterminado es ‘Escalated’. Esta opción solo se utiliza cuando la opción “Open Detection on Incident Reopen” está seleccionada y la dirección de reflejo está establecida en ‘Outgoing’ o ‘Incoming And Outgoing’.",
    "Set the DBot Score Threshold to a number between 1 and 100 (default is 70). Any IP addresses associated with an Entity queried with a ThreatX score greater than or equal to the DBot Score Threshold will be assigned a DBot Score of 3 (Malicious).":
      "Establezca el DBot Score Threshold en un número entre 1 y 100 (el valor predeterminado es 70). A todas las direcciones IP asociadas con una entidad consultada con una puntuación de ThreatX mayor o igual que el DBot Score Threshold se les asignará un DBot Score de 3 (Malicious).",
    "Set the fetch interval and enable fetching":
      "Establezca el intervalo de recuperación y habilite la recuperación",
    "Set the Incidents Fetch Interval to a maximum of 15 minutes if the number of incidents is expected to exceed the specified max fetch limit in each fetch cycle.":
      "Establezca el Incidents Fetch Interval en un máximo de 15 minutos si se espera que el número de incidentes supere el límite máximo de recuperación especificado en cada ciclo de recuperación.",
    "Set up a SpecterOps BloodHound Enterprise integration instance":
      "Configurar una instancia de integración de SpecterOps BloodHound Enterprise",
    "Sets the AWS_STS_REGIONAL_ENDPOINTS environment variable to specify the AWS STS endpoint resolution logic. By default, this option is set to “legacy” in AWS. Leave empty if the environment variable is already set using server configuration.":
      "Establece la variable de entorno AWS_STS_REGIONAL_ENDPOINTS para especificar la lógica de resolución del endpoint de AWS STS. De forma predeterminada, esta opción está establecida en “legacy” en AWS. Déjela vacía si la variable de entorno ya está establecida mediante la configuración del servidor.",
    "Setting the lookback parameter will fetch duplicated incidents in the event that incidents that fall out during the given look-back time were already fetched.":
      "Si se establece el parámetro lookback, se recuperarán incidentes duplicados en caso de que los incidentes que queden fuera durante el tiempo de retroceso indicado ya se hubieran recuperado.",
    "Setup Instructions":
      "Instrucciones de configuración",
    "Setup Steps":
      "Pasos de configuración",
    "Sever URLs":
      "URL de servidores",
    "Shodan is a search engine for Internet-connected devices. Unlike traditional search engines that index websites, Shodan indexes information about the devices connected to the internet, such as servers, routers, webcams, and other IoT devices.":
      "Shodan es un motor de búsqueda para dispositivos conectados a Internet. A diferencia de los motores de búsqueda tradicionales que indexan sitios web, Shodan indexa información sobre los dispositivos conectados a Internet, como servidores, enrutadores, cámaras web y otros dispositivos IoT.",
    "Should anyone be allowed to create incidents by DM":
      "Permitir que cualquier persona cree incidentes por mensaje directo",
    "Sigma and Intrusion Detection Rules Threshold":
      "Umbral de reglas de Sigma y de detección de intrusiones",
    "Sign in to Okta Admin Console.":
      "Inicie sesión en Okta Admin Console.",
    "Sign in to the Tenzai application.":
      "Inicie sesión en la aplicación Tenzai.",
    "Site security monitoring, external sharing controls, and document compliance for SharePoint":
      "Supervisión de la seguridad del sitio, controles de uso compartido externo y cumplimiento de documentos para SharePoint",
    "Skip on corrupted images":
      "Omitir imágenes dañadas",
    "Slack (Deprecated)":
      "Slack (obsoleto)",
    "Slack API access token":
      "Token de acceso a la API de Slack",
    "Slack API bot token":
      "Token de bot de la API de Slack",
    "Slack API Token for channel creation":
      "Token de la API de Slack para la creación de canales",
    "Slack Bot API token":
      "Token de API del bot de Slack",
    "Slack Documentation":
      "Documentación de Slack",
    "Slack v2 (Deprecated)":
      "Slack v2 (obsoleto)",
    "Slack V3 utilizes “Socket Mode” to enable the integration to communicate directly with Slack for mirroring.":
      "Slack V3 utiliza “Socket Mode” para permitir que la integración se comunique directamente con Slack para el reflejo.",
    "SMTP Port":
      "Puerto SMTP",
    "SMTP Sender":
      "Remitente SMTP",
    "Snow documentation":
      "Documentación de Snow",
    "Source Priority Level":
      "Nivel de prioridad de la fuente",
    "Specify a unique name for the API client.":
      "Especifique un nombre único para el cliente de API.",
    "Splunk Token":
      "Token de Splunk",
    "Splunk token-based authentication":
      "Autenticación basada en tokens de Splunk",
    "SSH Certificate":
      "Certificado SSH",
    "SSH connection":
      "Conexión SSH",
    "SSH Credentials for CLI":
      "Credenciales SSH para la CLI",
    "SSH credentials should be your username and password for the PAN-OS CLI - they can be tested using a standalone SSH client to verify that you are able to connect to the CLI on the SSH port.":
      "Las credenciales SSH deben ser su nombre de usuario y contraseña de la CLI de PAN-OS. Se pueden probar con un cliente SSH independiente para comprobar que puede conectarse a la CLI en el puerto SSH.",
    "SSH Port":
      "Puerto SSH",
    "Step 1: Login and add your authorization code":
      "Paso 1: Inicie sesión y agregue su código de autorización",
    "Step 2: Activate the API.":
      "Paso 2: Active la API.",
    "Steps to follow":
      "Pasos que debe seguir",
    "Subdomain":
      "Subdominio",
    "Submission Server URL":
      "URL del servidor de envío",
    "Submit Black Market Monitoring data removal requests — checks company credit rights and returns an appropriate error if the quota is exceeded.":
      "Envíe solicitudes de eliminación de datos de Black Market Monitoring: comprueba los derechos de crédito de la empresa y devuelve el error correspondiente si se supera la cuota.",
    "Submit takedown requests for eligible findings (Phishing Domains, Rogue Mobile Apps, Fake Social Media Accounts).":
      "Envíe solicitudes de eliminación para los hallazgos aptos (dominios de phishing, aplicaciones móviles fraudulentas, cuentas falsas de redes sociales).",
    "Submit takedown requests for eligible threat findings.":
      "Envíe solicitudes de eliminación para los hallazgos de amenazas aptos.",
    "Sumo Logic URL (region specific), for example: https://api.us2.sumologic.com/api/":
      "URL de Sumo Logic (específica de la región), por ejemplo: https://api.us2.sumologic.com/api/",
    "Supplier finding severities":
      "Gravedad de los hallazgos del proveedor",
    "Supplier finding statuses":
      "Estados de los hallazgos del proveedor",
    "Supplier Findings":
      "Hallazgos del proveedor",
    "Support for Multiple Teams":
      "Compatibilidad con varios equipos",
    "Support for template replacement variables using {var} syntax":
      "Compatibilidad con variables de sustitución de plantillas mediante la sintaxis {var}",
    "Supported Authentication Methods":
      "Métodos de autenticación admitidos",
    "Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.":
      "Formatos admitidos: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ.",
    "Supported Indicators":
      "Indicadores admitidos",
    "Supported REST API versions":
      "Versiones de la API REST admitidas",
    "Supports automated playbooks for streamlined response.":
      "Admite Playbooks automatizados para agilizar la respuesta.",
    "Supports folder ID and sub-folders, for example Inbox/Phishing.":
      "Admite el ID de carpeta y subcarpetas, por ejemplo Inbox/Phishing.",
    "Suppress errors for non found indicators":
      "Suprimir errores de indicadores no encontrados",
    "Sync Query":
      "Consulta de sincronización",
    "Sync user profiles on first run":
      "Sincronizar perfiles de usuario en la primera ejecución",
    "Sysdig Configuration":
      "Configuración de Sysdig",
    "Tag: The ruleset's name or the identifier for the YARA rule matching the file to fetch its notifications. Leave blank to fetch all.":
      "Tag: nombre del conjunto de reglas o identificador de la regla YARA que coincide con el archivo cuyas notificaciones se van a recuperar. Déjelo en blanco para recuperarlas todas.",
    "Takedown Server URL":
      "URL del servidor de eliminación",
    "Team name (e.g. my-team-name)":
      "Nombre del equipo (p. ej., my-team-name)",
    "Template - Panorama instances only":
      "Plantilla: solo instancias de Panorama",
    "Tenant ID (Required for using Self Deployed Azure app)":
      "ID de tenant (obligatorio para usar una aplicación de Azure autoimplementada)",
    "Tenant Services Group ID":
      "ID del grupo de servicios del tenant",
    "Tenzai App URL (e.g., https://app.tenzai.io)":
      "URL de la aplicación de Tenzai (p. ej., https://app.tenzai.io)",
    "Tenzai Server URL":
      "URL del servidor de Tenzai",
    "Tenzai Server URL (e.g., https://api.tenzai.io)":
      "URL del servidor de Tenzai (p. ej., https://api.tenzai.io)",
    "Terminal Type":
      "Tipo de terminal",
    "Terms and Conditions":
      "Términos y condiciones",
    "Test fails with a connection or timeout error.":
      "La prueba falla con un error de conexión o de tiempo de espera.",
    "Test fails with an authorization error.":
      "La prueba falla con un error de autorización.",
    "Test the connection":
      "Pruebe la conexión",
    "Test the integration. If successful, you’ll see a test message in the channel.":
      "Pruebe la integración. Si se realiza correctamente, verá un mensaje de prueba en el canal.",
    "The “Test” button does not fully validate all command functionality. To ensure the commands are working correctly, run each one and validate that API permissions are sufficient.":
      "El botón “Probar” no valida por completo todas las funciones de los comandos. Para asegurarse de que los comandos funcionan correctamente, ejecute cada uno y compruebe que los permisos de la API son suficientes.",
    "The amount of time to go back when performing the first fetch, or when creating a mapping using the Select Schema option.":
      "Cantidad de tiempo que se retrocede al realizar la primera recuperación o al crear una asignación con la opción Select Schema.",
    "The API key can be found by going to your Hatching UI, clicking your account name in the top right, and the API key will be listed in the left hand side under “API Key”":
      "La clave de API se encuentra en la interfaz de Hatching: haga clic en el nombre de su cuenta en la esquina superior derecha y la clave de API aparecerá en el lado izquierdo, en “API Key”",
    "The API key for authenticating with the KOI API. See the help section for instructions on creating an API key.":
      "La clave de API para autenticarse con la API de KOI. Consulte la sección de ayuda para obtener instrucciones sobre cómo crear una clave de API.",
    "The API Key to use for the connection":
      "La clave de API que se utilizará para la conexión",
    "The API route of the requested information in ServiceNow":
      "La ruta de API de la información solicitada en ServiceNow",
    "The authentication type and credentials to use: Basic Auth (Username and Password), Bearer Auth (Username and Password), or API Key Auth (API Key ID and API Key).":
      "El tipo de autenticación y las credenciales que se utilizarán: Basic Auth (nombre de usuario y contraseña), Bearer Auth (nombre de usuario y contraseña) o API Key Auth (ID de clave de API y clave de API).",
    "The backwards window is a way for you to configure the longest delay you would like to support.":
      "La ventana retroactiva le permite configurar el retraso máximo que desea admitir.",
    "The base URL of the Tenzai API.":
      "La URL base de la API de Tenzai.",
    "The base URL of the Tenzai web app, used to build a deep link (referenceUrl) to the scan results. Leave empty to derive it from the Tenzai Server URL (the API and web-app hosts mirror each other); set it only to override that.":
      "La URL base de la aplicación web de Tenzai, que se usa para crear un vínculo directo (referenceUrl) a los resultados del análisis. Déjela vacía para derivarla de la URL del servidor de Tenzai (los hosts de la API y de la aplicación web se corresponden); establézcala solo para anular ese valor.",
    "The best value to set depends on the delays that you see in your system (consult with your Splunk expert / master), the number of events in your system, and other network properties.":
      "El mejor valor depende de los retrasos que observe en su sistema (consulte con su experto o responsable de Splunk), del número de eventos del sistema y de otras propiedades de la red.",
    "The category of attack paths to fetch. Default is all.":
      "La categoría de rutas de ataque que se van a recuperar. El valor predeterminado es todas.",
    "The client machine name to identify the client to the server on a new connection.":
      "El nombre del equipo cliente para identificar al cliente ante el servidor en una conexión nueva.",
    "The connection security. The `SSL/TLS` first establishes a secure `SSL/TLS` connection and conducts SMTP over that connection, and STARTTLS starts with unencrypted SMTP and then switches to SSL/TLS to ensure security.":
      "La seguridad de la conexión. `SSL/TLS` establece primero una conexión segura `SSL/TLS` y ejecuta SMTP sobre ella, mientras que STARTTLS comienza con SMTP sin cifrar y luego cambia a SSL/TLS para garantizar la seguridad.",
    "The date or relative timestamp from which to begin fetching events detections.":
      "La fecha o la marca de tiempo relativa a partir de la cual se empiezan a recuperar las detecciones de eventos.",
    "The date or relative timestamp from which to begin fetching events detections. Supported formats: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. For example: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.":
      "La fecha o la marca de tiempo relativa a partir de la cual se empiezan a recuperar las detecciones de eventos. Formatos admitidos: 2 minutes, 2 hours, 2 days, 2 weeks, 2 months, 2 years, yyyy-mm-dd, yyyy-mm-ddTHH:MM:SSZ. Por ejemplo: 01 Oct 2025, 01 Mar 2021 04:45:33, 2025-12-17T14:05:44Z.",
    "The default Jev model. Use a pinned version when playbook thresholds have been validated against that version.":
      "El modelo Jev predeterminado. Utilice una versión fija cuando los umbrales de los Playbooks se hayan validado con esa versión.",
    "The default region to use with the takedown Service.":
      "La región predeterminada que se utilizará con el servicio de eliminación.",
    "The default timeout (in seconds) for API calls. Default is 15 seconds.":
      "El tiempo de espera predeterminado (en segundos) para las llamadas a la API. El valor predeterminado es 15 segundos.",
    "The domain controller hostname. This is useful for environments with DFS servers as it is used to identify the DFS domain information automatically.":
      "El nombre de host del controlador de dominio. Es útil en entornos con servidores DFS, ya que se utiliza para identificar automáticamente la información del dominio DFS.",
    "The eDiscovery APIs in Microsoft Graph only work with eDiscovery (Premium) cases.":
      "Las API de eDiscovery de Microsoft Graph solo funcionan con casos de eDiscovery (Premium).",
    "The environment from which to fetch attack paths. Default is all.":
      "El entorno desde el que se recuperan las rutas de ataque. El valor predeterminado es todos.",
    "The fetched data may take up to 10 minutes to be ingested into the tenant after each fetch cycle.":
      "Los datos recuperados pueden tardar hasta 10 minutos en ingerirse en el tenant después de cada ciclo de recuperación.",
    "The field needed from the ServiceNow response which contains the indicator value":
      "El campo necesario de la respuesta de ServiceNow que contiene el valor del indicador",
    "The filtering works the same way as in the Prisma Cloud UI. When providing several values for the same filter it gets only alerts that have one of these values, and when providing different values, it gets only alerts that have all the stated field values.":
      "El filtrado funciona igual que en la interfaz de Prisma Cloud. Si se proporcionan varios valores para el mismo filtro, solo se obtienen las alertas que tengan uno de esos valores; si se proporcionan valores para filtros distintos, solo se obtienen las alertas que tengan todos los valores de campo indicados.",
    "The following features are not supported in non-ES (Enterprise Security) Splunk.":
      "Las siguientes funciones no son compatibles con Splunk que no sea ES (Enterprise Security).",
    "The format should be https://company.service-now.com/":
      "El formato debe ser https://company.service-now.com/",
    "The format should be: [ssl://]<hostname>[:port]. Get the hostname and port from the `brokerlist.properties` file. The broker should be reachable from the Cortex server.":
      "El formato debe ser [ssl://]<hostname>[:port]. Obtenga el nombre de host y el puerto del archivo `brokerlist.properties`. El broker debe ser accesible desde el servidor de Cortex.",
    "The FQDN/IP of the IdentityIQ server to connect":
      "El FQDN/IP del servidor IdentityIQ al que conectarse",
    "The FQDN/IP of the IdentityNow server to connect":
      "El FQDN/IP del servidor IdentityNow al que conectarse",
    "The generated incidents are notifications from vt-private-livehunt-notifications-list.":
      "Los incidentes generados son notificaciones de vt-private-livehunt-notifications-list.",
    "The header of an external form hyperlink.":
      "El encabezado del hipervínculo de un formulario externo.",
    "The host URL. When using this parameter, select the Custom option for the Azure Cloud. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "La URL del host. Al usar este parámetro, seleccione la opción Custom para Azure Cloud. Encontrará más información sobre las nubes nacionales aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "The HTTP request timeout in seconds.":
      "El tiempo de espera de la solicitud HTTP en segundos.",
    "The incident name to give to the created incident":
      "El nombre que se asignará al incidente creado",
    "The initial time to fetch from":
      "La hora inicial desde la que se recuperan los datos",
    "The instance configuration URL based on the server location: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com":
      "La URL de configuración de la instancia según la ubicación del servidor: <br/>US: https://api.aperture.paloaltonetworks.com<br/> EU: https://api.aperture-eu.paloaltonetworks.com<br/> APAC: https://api.aperture-apac.paloaltonetworks.com",
    "The integration pulls the Mcafee SIEM triggered alarms that are unacknowledged.":
      "La integración obtiene las alarmas activadas de McAfee SIEM que no se han confirmado.",
    "The integration uses both the Panorama XML API and SSH into the PAN-OS CLI.":
      "La integración utiliza tanto la API XML de Panorama como SSH para acceder a la CLI de PAN-OS.",
    "The integration uses the Panorama XML API.":
      "La integración utiliza la API XML de Panorama.",
    "The interval for fetching attack paths.":
      "El intervalo para recuperar rutas de ataque.",
    "The iZOOlogic API server URL.":
      "La URL del servidor de la API de iZOOlogic.",
    "The Kafka brokers to connect to, as a comma separated list, in the form: ip:port,ip2:port2":
      "Los brokers de Kafka a los que conectarse, como lista separada por comas con el formato: ip:port,ip2:port2",
    "The KOI API server URL.":
      "La URL del servidor de la API de KOI.",
    "The max incidents per fetch parameter specifies the maximum number of incidents to fetch":
      "El parámetro de máximo de incidentes por recuperación especifica el número máximo de incidentes que se recuperarán",
    "The maximum number of events detections to fetch each time. If the value is greater than 200, it will be considered as 200. The maximum is 200.":
      "El número máximo de detecciones de eventos que se recuperan cada vez. Si el valor es superior a 200, se considerará 200. El máximo es 200.",
    "The maximum number of incidents per fetch":
      "Número máximo de incidentes por recuperación",
    "The maximum number of incidents to fetch per Log Type Query. To ensure optimal efficiency, it is strongly advised to keep the limit as low as possible. The maximum is 5,000.":
      "El número máximo de incidentes que se recuperan por consulta de tipo de registro. Para garantizar una eficiencia óptima, se recomienda encarecidamente mantener el límite lo más bajo posible. El máximo es 5000.",
    "The maximum number of incidents to fetch per type per fetch cycle.":
      "El número máximo de incidentes que se recuperan por tipo y por ciclo de recuperación.",
    "The maximum number of incidents to retrieve per fetch cycle. Hard upper limit is 200. Increase if your environment ingests more PagerDuty incidents per fetch interval than the configured default.":
      "El número máximo de incidentes que se recuperan por ciclo de recuperación. El límite superior estricto es 200. Auméntelo si su entorno ingiere más incidentes de PagerDuty por intervalo de recuperación que el valor predeterminado configurado.",
    "The maximum number of items to fetch per type. Applies to both alerts and incidents. Note that when fetching incidents, no more than 50 can be fetched per cycle, due to a Microsoft limitation.":
      "El número máximo de elementos que se recuperan por tipo. Se aplica tanto a alertas como a incidentes. Tenga en cuenta que, al recuperar incidentes, no se pueden recuperar más de 50 por ciclo debido a una limitación de Microsoft.",
    "The message to send to the user to ask for feedback.":
      "El mensaje que se envía al usuario para solicitar comentarios.",
    "The mirroring direction in which to mirror the detections. You can mirror 'Incoming' (from Vectra to XSOAR), 'Outgoing' (from XSOAR to Vectra), or in both directions.":
      "La dirección de reflejo en la que se reflejan las detecciones. Puede reflejar 'Incoming' (de Vectra a XSOAR), 'Outgoing' (de XSOAR a Vectra) o en ambas direcciones.",
    "The mirroring is strictly tied to Incident type “Vectra RUX Events Detection” & Incoming mapper “Vectra RUX - Incoming Mapper” If you want to change or use your custom incident type/mapper then make sure changes related to these are present.":
      "La función de reflejo está estrictamente vinculada al tipo de incidente “Vectra RUX Events Detection” y al asignador de entrada “Vectra RUX - Incoming Mapper”. Si desea cambiar o usar su propio tipo de incidente o asignador, asegúrese de que los cambios relacionados con estos estén presentes.",
    "The mirroring settings apply only for incidents that are fetched after applying the settings.":
      "La configuración de reflejo se aplica solo a los incidentes que se recuperan después de aplicar la configuración.",
    "The name of the lookup column containing the Cortex username.":
      "El nombre de la columna de búsqueda que contiene el nombre de usuario de Cortex.",
    "The name of the lookup table containing the Splunk username.":
      "El nombre de la tabla de búsqueda que contiene el nombre de usuario de Splunk.",
    "The name of the lookup table in Splunk, containing the username's mapping data.":
      "El nombre de la tabla de búsqueda de Splunk que contiene los datos de asignación de nombres de usuario.",
    "The name of the MCP server on the ServiceNow instance. Use `sn_mcp_server_default` for the preconfigured Quickstart Server.":
      "El nombre del servidor MCP en la instancia de ServiceNow. Utilice `sn_mcp_server_default` para el Quickstart Server preconfigurado.",
    "The number of objects to process. Maximum value is 500":
      "El número de objetos que se van a procesar. El valor máximo es 500",
    "The number of times to try and re-create connections with rapid7 instance when there are temporary connection errors":
      "El número de veces que se intenta volver a crear las conexiones con la instancia de rapid7 cuando hay errores de conexión temporales",
    "The OAuth 2.0 client ID from ZIdentity.":
      "El ID de cliente de OAuth 2.0 de ZIdentity.",
    "The OAuth 2.0 client secret from ZIdentity.":
      "El secreto de cliente de OAuth 2.0 de ZIdentity.",
    "The operations are accessed through port 10000.":
      "Se accede a las operaciones a través del puerto 10000.",
    "The optional model name that overrides the selected model.":
      "El nombre de modelo opcional que anula el modelo seleccionado.",
    "The Palo Alto Networks Best Practice Assessment (BPA) measures your usage of our Next-Generation Firewall (NGFW) and Panorama™ security management capabilities across your deployment, enabling you to make adjustments that maximize your return on investment and strengthen security.":
      "La Palo Alto Networks Best Practice Assessment (BPA) mide el uso que hace de nuestro firewall de nueva generación (NGFW) y de las funciones de gestión de seguridad de Panorama™ en toda su implementación, lo que le permite realizar ajustes que maximicen el retorno de la inversión y refuercen la seguridad.",
    "The Panorama integration now supports fetch incidents.":
      "La integración de Panorama ahora admite la recuperación de incidentes.",
    "The Panorays API permits 150 requests per minute and blocks the caller for one hour when that is exceeded. Keep this below 150.":
      "La API de Panorays permite 150 solicitudes por minuto y bloquea al llamador durante una hora si se supera ese límite. Mantenga este valor por debajo de 150.",
    "The parameter uses the AQL SELECT syntax. For more info see: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html":
      "El parámetro utiliza la sintaxis AQL SELECT. Para obtener más información, consulte: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.3/com.ibm.qradar.doc/c_aql_intro.html",
    "The per-request timeout for calls to the Tenzai API. Kept low so a stalled or unreachable host fails fast and the validation poll automation can reschedule instead of exceeding its execution timeout.":
      "El tiempo de espera por solicitud para las llamadas a la API de Tenzai. Se mantiene bajo para que un host bloqueado o inaccesible falle rápidamente y la automatización de sondeo de validación pueda reprogramarse en lugar de superar su tiempo de espera de ejecución.",
    "The port for the Elastic API.":
      "El puerto de la API de Elastic.",
    "The port for the Kibana API.":
      "El puerto de la API de Kibana.",
    "The port in Splunk server which is open to the REST API calls.":
      "El puerto del servidor de Splunk que está abierto a las llamadas a la API REST.",
    "The possible values for severities can be found under “policy.severity” entry. In order to add a severity, use the filter name “policy.severity”":
      "Los valores posibles de gravedad se encuentran en la entrada “policy.severity”. Para añadir una gravedad, utilice el nombre de filtro “policy.severity”",
    "The queries that will be included during the fetch are decided according to the “Log Type” parameter (Multiple select dropdown).":
      "Las consultas que se incluyen durante la recuperación se determinan según el parámetro “Log Type” (lista desplegable de selección múltiple).",
    "The query to use when fetching incidents":
      "La consulta que se utiliza al recuperar incidentes",
    "The query used to collect indicators to sync from Cortex.":
      "La consulta que se utiliza para recopilar los indicadores que se van a sincronizar desde Cortex.",
    "The raw JSON string to use as the sample data":
      "La cadena JSON sin procesar que se utilizará como datos de ejemplo",
    "The redirect URI registered in the ServiceNow OAuth Inbound Integration. Must match the URI configured on the ServiceNow side.":
      "El URI de redireccionamiento registrado en la OAuth Inbound Integration de ServiceNow. Debe coincidir con el URI configurado en ServiceNow.",
    "The required information is automatically retrieved from your Cortex TIM license.":
      "La información necesaria se obtiene automáticamente de su licencia de Cortex TIM.",
    "The scope of the rule-set should be narrowed to catch only indicators that you want to analyze by a playbook.":
      "El alcance del conjunto de reglas debe limitarse para que solo incluya los indicadores que desea analizar con un Playbook.",
    "The Server URL assigned to your organization. For example, www.acme.zslogin.net.":
      "La URL del servidor asignada a su organización. Por ejemplo, www.acme.zslogin.net.",
    "The server URL of your Magnet Automate instance.":
      "La URL del servidor de su instancia de Magnet Automate.",
    "The ServiceNow instance URL (e.g., `https://dev12345.service-now.com`).":
      "La URL de la instancia de ServiceNow (p. ej., `https://dev12345.service-now.com`).",
    "The Silent Push platform focuses on proactive threat intelligence and threat hunting. It offers a comprehensive view of global internet-facing infrastructure, helping organizations detect and counteract cyber threats before they manifest.":
      "La plataforma Silent Push se centra en la inteligencia de amenazas proactiva y la búsqueda de amenazas. Ofrece una visión integral de la infraestructura global expuesta a Internet y ayuda a las organizaciones a detectar y contrarrestar las ciberamenazas antes de que se materialicen.",
    "The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "La forma más sencilla de obtener este token es que un Org Owner cree una nueva aplicación de Slack, agregue el ámbito OAuth admin, instale la aplicación y utilice el token generado.",
    "The single mailbox this integration operates against. During authentication, ensure you are logged in to this email address. This mailbox is used by fetch-incidents and by all mail commands. Because this integration uses delegated permissions, it can only access this signed-in user's mailbox.":
      "El único buzón con el que opera esta integración. Durante la autenticación, asegúrese de haber iniciado sesión con esta dirección de correo electrónico. Este buzón se utiliza en fetch-incidents y en todos los comandos de correo. Como esta integración usa permisos delegados, solo puede acceder al buzón del usuario que ha iniciado sesión.",
    "The Splunk search query by which to fetch events. The default query fetches ES finding events. You can edit this query to fetch other types of events. Note, that to fetch ES finding events, make sure to include the \\`notable\\` macro in your query.":
      "La consulta de búsqueda de Splunk con la que se recuperan los eventos. La consulta predeterminada recupera eventos finding de ES. Puede editar esta consulta para recuperar otros tipos de eventos. Tenga en cuenta que, para recuperar eventos finding de ES, debe incluir la macro `notable` en la consulta.",
    "The Splunk search query by which to fetch events. The default query fetches ES notable events. You can edit this query to fetch other types of events. Note, that to fetch ES notable events, make sure to include the \\`notable\\` macro in your query.":
      "La consulta de búsqueda de Splunk con la que se recuperan los eventos. La consulta predeterminada recupera eventos notable de ES. Puede editar esta consulta para recuperar otros tipos de eventos. Tenga en cuenta que, para recuperar eventos notable de ES, debe incluir la macro `notable` en la consulta.",
    "The Splunk server URL. Port 8089 (Splunk's default REST API port) is used automatically. Only include the port in the URL if using a non-default port. Examples: 'https://splunk.example.com' (uses default port 8089) or 'https://splunk.example.com:8090' (uses custom port 8090).":
      "La URL del servidor de Splunk. El puerto 8089 (el puerto predeterminado de la API REST de Splunk) se utiliza automáticamente. Incluya el puerto en la URL solo si utiliza un puerto distinto del predeterminado. Ejemplos: 'https://splunk.example.com' (utiliza el puerto predeterminado 8089) o 'https://splunk.example.com:8090' (utiliza el puerto personalizado 8090).",
    "The Standard Authentication Profile of type Oauth should be already present in ServiceNow and has to be added to the Policy.":
      "El perfil de autenticación estándar de tipo OAuth ya debe existir en ServiceNow y debe agregarse a la política.",
    "The statuses of PagerDuty incidents to ingest. Include \"resolved\" to capture short-lived incidents that move to resolved between fetch cycles.":
      "Los estados de los incidentes de PagerDuty que se van a ingerir. Incluya “resolved” para capturar los incidentes de corta duración que pasan a resueltos entre ciclos de recuperación.",
    "The tag value should be used to mirror the detection note by adding the same tag in the notes.":
      "El valor de la etiqueta debe usarse para reflejar la nota de la detección agregando la misma etiqueta en las notas.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application.":
      "El grupo de servicios del tenant debe contener una aplicación “AIOps for NGFW (Free)” activa.",
    "The Tennant Service Group must contain an active “AIOps for NGFW (Free)” application. For more information about the service activation, visit the following link: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb":
      "El grupo de servicios del tenant debe contener una aplicación “AIOps for NGFW (Free)” activa. Para obtener más información sobre la activación del servicio, visite el siguiente enlace: https://docs.paloaltonetworks.com/ngfw/aiops/about/activate-aiops-for-ngfw#activate-aiops-for-ngfw_section_xjs_p55_fyb",
    "The Test button does not ensure sufficient permissions for all integration commands.":
      "El botón Probar no garantiza que se tengan permisos suficientes para todos los comandos de la integración.",
    "The Threatmon integration allows Cortex to connect with the Threatmon platform to automatically retrieve and update incident data. This integration is designed to help security teams streamline incident management workflows by synchronizing Threatmon alarms and their status directly into XSOAR.":
      "La integración de Threatmon permite que Cortex se conecte con la plataforma Threatmon para recuperar y actualizar automáticamente los datos de incidentes. Esta integración está diseñada para ayudar a los equipos de seguridad a agilizar los flujos de trabajo de gestión de incidentes sincronizando las alarmas de Threatmon y su estado directamente en XSOAR.",
    "The ticket type can be: incident, problem, change_request, sc_request, sc_task or sc_req_item.":
      "El tipo de ticket puede ser: incident, problem, change_request, sc_request, sc_task o sc_req_item.",
    "The time range between create_after and created_before that is sent to the API when fetching older incidents. If timeout errors occur, consider changing this value.":
      "El intervalo de tiempo entre create_after y created_before que se envía a la API al recuperar incidentes antiguos. Si se producen errores de tiempo de espera, considere cambiar este valor.",
    "The time range for the initial data fetch. If timeout errors occur, consider changing this value.":
      "El intervalo de tiempo de la recuperación inicial de datos. Si se producen errores de tiempo de espera, considere cambiar este valor.",
    "The timeout for HTTP(S) requests (in seconds) to the Proofpoint server.":
      "El tiempo de espera de las solicitudes HTTP(S) al servidor de Proofpoint (en segundos).",
    "The timeout of the HTTP requests sent to Cortex (in seconds).":
      "El tiempo de espera de las solicitudes HTTP enviadas a Cortex (en segundos).",
    "The timeout of the HTTP requests sent to McAfee ePO API (in seconds), the max timeout allowed is 300s.":
      "El tiempo de espera de las solicitudes HTTP enviadas a la API de McAfee ePO (en segundos). El tiempo de espera máximo permitido es de 300 s.",
    "The timeout of the HTTP requests sent to Microsoft Graph API (in seconds).":
      "El tiempo de espera de las solicitudes HTTP enviadas a la API de Microsoft Graph (en segundos).",
    "The URL to use for the Submission Service.":
      "La URL que se utilizará para el Submission Service.",
    "The URL to use for the Takedown Service.":
      "La URL que se utilizará para el Takedown Service.",
    "The user must also have the “Allow Multiple Logins” capability.":
      "El usuario también debe tener la capacidad “Allow Multiple Logins”.",
    "The value can be updated if necessary.":
      "El valor se puede actualizar si es necesario.",
    "The value of kid in JWT Verifier Maps has to be the same as Key Id in JWT signing key.":
      "El valor de kid en JWT Verifier Maps debe ser el mismo que el Key Id de la JWT signing key.",
    "The vsys is located in the Firewall URL; e.g., https://<server>#device::<vsys>::device/setup":
      "El vsys se encuentra en la URL del firewall; p. ej., https://<server>#device::<vsys>::device/setup",
    "The webhook URL in the Teams channel.":
      "La URL del webhook en el canal de Teams.",
    "There are 2 methods to authenticate.":
      "Hay 2 métodos de autenticación.",
    "There are two main use cases for the SplunkPy integration.":
      "Hay dos casos de uso principales de la integración SplunkPy.",
    "There are two main use cases for the SplunkPy v2 integration.":
      "Hay dos casos de uso principales de la integración SplunkPy v2.",
    "There is a limit to 1000 API calls per day with the free dev API key.":
      "La clave de API gratuita para desarrolladores tiene un límite de 1000 llamadas a la API por día.",
    "Therefore, we can’t use index time as our primary search key without making the searches inefficient.":
      "Por lo tanto, no podemos usar la hora de indexación como clave de búsqueda principal sin que las búsquedas resulten ineficientes.",
    "These roles are required to make API calls.":
      "Estos roles son necesarios para realizar llamadas a la API.",
    "This article will help you configure your Splunk integration, set up a basic flow, and start ingesting incidents from Splunk to Cortex.":
      "Este artículo le ayudará a configurar su integración de Splunk, establecer un flujo básico y empezar a ingerir incidentes de Splunk en Cortex.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints / machines that generate Splunk events are usually offline.":
      "Este retraso puede deberse a una arquitectura de Splunk ineficiente que provoque una mayor latencia en la indexación de eventos. Sin embargo, también puede ser “intencionado”, por ejemplo, si algunos endpoints o equipos que generan eventos de Splunk suelen estar sin conexión.",
    "This delay can be caused by an inefficient Splunk architecture, causing higher event indexing latency. However, it can also be “by design”, e.g., if some endpoints or machines that generate Splunk events are frequently offline.":
      "Este retraso puede deberse a una arquitectura de Splunk ineficiente que provoque una mayor latencia en la indexación de eventos. Sin embargo, también puede ser “intencionado”, por ejemplo, si algunos endpoints o equipos que generan eventos de Splunk están sin conexión con frecuencia.",
    "This enrichment provides additional information about assets, drilldown, and identities that are related to the finding events you ingest.":
      "Este enriquecimiento proporciona información adicional sobre los activos, el análisis detallado (drilldown) y las identidades relacionados con los eventos finding que ingiere.",
    "This feature is available from Cortex version 6.0.0.":
      "Esta función está disponible a partir de la versión 6.0.0 de Cortex.",
    "This feature is compliant with XSOAR version 6.0 and above.":
      "Esta función es compatible con la versión 6.0 y posteriores de XSOAR.",
    "This feature is supported by Splunk Enterprise Security only.":
      "Esta función solo es compatible con Splunk Enterprise Security.",
    "This field determines from which instance the XSOAR incident was created. It is a required field for XSOAR to enable mirroring support.":
      "Este campo determina de qué instancia se creó el incidente de XSOAR. Es un campo obligatorio para que XSOAR habilite la compatibilidad con el reflejo.",
    "This field determines the mirroring direction for the incident. It is a required field for XSOAR to enable mirroring support.":
      "Este campo determina la dirección de reflejo del incidente. Es un campo obligatorio para que XSOAR habilite la compatibilidad con el reflejo.",
    "This field determines what would be the tag needed to mirror the XSOAR entry out to Vectra RUX. It is a required field for XSOAR to enable mirroring support.":
      "Este campo determina qué etiqueta se necesita para reflejar la entrada de XSOAR en Vectra RUX. Es un campo obligatorio para que XSOAR habilite la compatibilidad con el reflejo.",
    "This field is require when running as ‘long running instance’ - please set the max amount of events to fetch.":
      "Este campo es obligatorio cuando se ejecuta como ‘long running instance’. Establezca el número máximo de eventos que se recuperarán.",
    "This implies that new fetched events might have a slightly different structure than old events fetched so far.":
      "Esto implica que los eventos recuperados recientemente pueden tener una estructura ligeramente distinta a la de los eventos recuperados hasta ahora.",
    "This integration allows 3 types of enrichments for fetched findings: Drilldown, Asset, and Identity.":
      "Esta integración permite 3 tipos de enriquecimiento para los hallazgos recuperados: Drilldown, Asset e Identity.",
    "This integration allows 3 types of enrichments for fetched notables: Drilldown, Asset, and Identity.":
      "Esta integración permite 3 tipos de enriquecimiento para los notables recuperados: Drilldown, Asset e Identity.",
    "This integration can be used to pull indicators from ServiceNow with a given user query and add them to the Threat Intelligence Module.":
      "Esta integración se puede utilizar para extraer indicadores de ServiceNow con una consulta de usuario determinada y agregarlos al Threat Intelligence Module.",
    "This integration connects securely with a ServiceNow Model Context Protocol (MCP) server, allowing you to access its tools in real time.":
      "Esta integración se conecta de forma segura con un servidor de Model Context Protocol (MCP) de ServiceNow y le permite acceder a sus herramientas en tiempo real.",
    "This integration currently supports fetching DLP incidents from “NGFW” and “Prisma Access” channels only.":
      "Actualmente, esta integración solo admite la recuperación de incidentes de DLP de los canales “NGFW” y “Prisma Access”.",
    "This integration enables Cortex to access and run commands on a terminal in a remote location (via SSH).":
      "Esta integración permite a Cortex acceder a un terminal en una ubicación remota (mediante SSH) y ejecutar comandos en él.",
    "This integration enables executing commands with different permission levels.":
      "Esta integración permite ejecutar comandos con diferentes niveles de permisos.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from Cortex XSOAR/XSIAM.":
      "Esta integración le permite gestionar desde Cortex XSOAR/XSIAM las funciones disponibles en el Security & Compliance Center.",
    "This integration enables you to manage the features that are available in the Security & Compliance Center from XSOAR.":
      "Esta integración le permite gestionar desde XSOAR las funciones disponibles en el Security & Compliance Center.",
    "This integration enables you to programmatically generate BPA data for both the free and premium instances of AIOps for NGFW.":
      "Esta integración le permite generar mediante programación datos de BPA tanto para las instancias gratuitas como para las premium de AIOps for NGFW.",
    "This integration enables you to run message traces and manage junk mail rules in Microsoft O365 - Exchange Online.":
      "Esta integración le permite ejecutar seguimientos de mensajes y administrar reglas de correo no deseado en Microsoft O365 - Exchange Online.",
    "This integration is for uploading and downloading files from an SMB server.":
      "Esta integración sirve para cargar y descargar archivos de un servidor SMB.",
    "This integration is set up by default on Cortex with the Threat Intel Module (TIM). It is designed for internal use with the TIM Sample Analysis feature. To run ad hoc CLI commands to generate WildFire reports, use the Palo Alto Networks WildFire v2 integration instead.":
      "Esta integración se configura de forma predeterminada en Cortex con el Threat Intel Module (TIM). Está diseñada para uso interno con la función TIM Sample Analysis. Para ejecutar comandos de CLI ad hoc y generar informes de WildFire, utilice en su lugar la integración Palo Alto Networks WildFire v2.",
    "This integration only supports Carbon Black Cloud on-premise APIs.":
      "Esta integración solo admite las API locales (on-premise) de Carbon Black Cloud.",
    "This integration requires a Cortex Threat Intelligence Management (TIM) license.":
      "Esta integración requiere una licencia de Cortex Threat Intelligence Management (TIM).",
    "This integration requires a Threat Intelligence Management (TIM) license.":
      "Esta integración requiere una licencia de Threat Intelligence Management (TIM).",
    "This integration searches the unified audit log to view user and administrator activity in your organization.":
      "Esta integración busca en el registro de auditoría unificado para ver la actividad de usuarios y administradores de su organización.",
    "This integration supports a default Classifier (Panorama Classifier) and Mapper (Panorama Mapper) that handles incidents returned from the API.":
      "Esta integración admite un Classifier predeterminado (Panorama Classifier) y un Mapper (Panorama Mapper) que gestionan los incidentes devueltos por la API.",
    "This integration was integrated and tested with McAfee ePO v5.3.2 and v5.10.0 .":
      "Esta integración se ha integrado y probado con McAfee ePO v5.3.2 y v5.10.0.",
    "This integration was integrated and tested with version 1.0 of Prisma SASE API.":
      "Esta integración se ha integrado y probado con la versión 1.0 de la API de Prisma SASE.",
    "This integration was integrated and tested with version 3.5 of Vectra API.":
      "Esta integración se ha integrado y probado con la versión 3.5 de la API de Vectra.",
    "This integration was integrated and tested with version 8.11.12 of Proofpoint Protection Server.":
      "Esta integración se ha integrado y probado con la versión 8.11.12 de Proofpoint Protection Server.",
    "This integration was integrated and tested with version xx of VulnDB":
      "Esta integración se ha integrado y probado con la versión xx de VulnDB",
    "This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Así se aplica el filtro a la consulta: “ORDERBYopened_at^opened_at>[Last Run]. Para evitar incidentes duplicados, este campo es obligatorio para recuperar incidentes.",
    "This method applies to Jamf versions 10.35.0 and above.":
      "Este método se aplica a las versiones de Jamf 10.35.0 y posteriores.",
    "This method applies to Jamf versions 10.49.0 and above.":
      "Este método se aplica a las versiones de Jamf 10.49.0 y posteriores.",
    "This parameter determines the size of the occurrence time “sliding window” we will support in our queries. For example, if set for 2 hours, we will always search for events that occurred up to 2 hours ago (and will of course ignore duplicates).":
      "Este parámetro determina el tamaño de la “ventana deslizante” de hora de ocurrencia que admitiremos en nuestras consultas. Por ejemplo, si se establece en 2 horas, siempre buscaremos eventos ocurridos hasta 2 horas antes (e ignoraremos, por supuesto, los duplicados).",
    "This parameter will write additional data to the logs and should only be used when you are directed to by XSOAR support.":
      "Este parámetro escribe datos adicionales en los registros y solo debe utilizarse cuando el soporte de XSOAR se lo indique.",
    "This section explains how to configure the instance of Hello IAM World in Cortex.":
      "Esta sección explica cómo configurar la instancia de Hello IAM World en Cortex.",
    "This section explains how to fully configure the instance of Orca Security in Cortex.":
      "Esta sección explica cómo configurar por completo la instancia de Orca Security en Cortex.",
    "This section will help you configure your Splunk v2 integration, set up a basic flow, and start ingesting events from Splunk to Cortex XSIAM.":
      "Esta sección le ayudará a configurar su integración de Splunk v2, establecer un flujo básico y empezar a ingerir eventos de Splunk en Cortex XSIAM.",
    "This value is mapped to the dbotMirrorTags incident field in Cortex, which defines how Cortex handles notes when you tag them in the War Room. This is required for mirroring notes from Cortex to Vectra RUX.":
      "Este valor se asigna al campo de incidente dbotMirrorTags de Cortex, que define cómo gestiona Cortex las notas cuando las etiqueta en el War Room. Es necesario para reflejar notas de Cortex en Vectra RUX.",
    "Threatmon API credentials (API key).":
      "Credenciales de la API de Threatmon (clave de API).",
    "Threatmon Integration":
      "Integración de Threatmon",
    "Threatmon is a threat intelligence and monitoring platform that provides actionable alerts to security teams. Integrating Threatmon with XSOAR enables more efficient triage, faster response times, and better visibility into your security operations.":
      "Threatmon es una plataforma de inteligencia de amenazas y monitorización que proporciona alertas accionables a los equipos de seguridad. Integrar Threatmon con XSOAR permite una clasificación más eficiente, tiempos de respuesta más rápidos y una mejor visibilidad de sus operaciones de seguridad.",
    "ThreatX Server URL (e.g., https://provision.threatx.io)":
      "URL del servidor de ThreatX (p. ej., https://provision.threatx.io)",
    "Threshold":
      "Umbral",
    "Through the integration you can subscribe to new content types or stop your subscription, list the available content of each content type, and most importantly - fetch new content records from content types of your choice as Cortex incidents.":
      "Con la integración puede suscribirse a nuevos tipos de contenido o cancelar su suscripción, enumerar el contenido disponible de cada tipo y, sobre todo, recuperar nuevos registros de contenido de los tipos de contenido que elija como incidentes de Cortex.",
    "Time between fetches (in seconds). The actual time will be the maximum between the selected value and the server configuration.":
      "Tiempo entre recuperaciones (en segundos). El tiempo real será el máximo entre el valor seleccionado y la configuración del servidor.",
    "Time to wait before taking a screenshot (in seconds)":
      "Tiempo de espera antes de tomar una captura de pantalla (en segundos)",
    "Time zone of the collector to fetch from (see detailed description)":
      "Zona horaria del recopilador desde el que se recuperan los datos (consulte la descripción detallada)",
    "Timeframe for first fetch (in seconds)":
      "Intervalo de tiempo para la primera recuperación (en segundos)",
    "Timeout (in seconds) for HTTP requests to Zscaler":
      "Tiempo de espera (en segundos) para las solicitudes HTTP a Zscaler",
    "Timestamp field to filter by (e.g., `opened_at`)":
      "Campo de marca de tiempo por el que filtrar (p. ej., `opened_at`)",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: “ORDERBYopened_at^opened_at>[Last Run]. To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Campo de marca de tiempo por el que filtrar (p. ej., `opened_at`). Así se aplica el filtro a la consulta: “ORDERBYopened_at^opened_at>[Last Run]. Para evitar incidentes duplicados, este campo es obligatorio para recuperar incidentes.",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\".":
      "Campo de marca de tiempo por el que filtrar (p. ej., `opened_at`). Así se aplica el filtro a la consulta: «ORDERBYopened_at^opened_at>[Last Run]».",
    "Timestamp field to filter by (e.g., `opened_at`) This is how the filter is applied to the query: \"ORDERBYopened_at^opened_at>[Last Run]\". To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Campo de marca de tiempo por el que filtrar (p. ej., `opened_at`). Así se aplica el filtro a la consulta: «ORDERBYopened_at^opened_at>[Last Run]». Para evitar incidentes duplicados, este campo es obligatorio para recuperar incidentes.",
    "Timezone of Nitro ESM server in minutes e.g. for gmt +3 set +180 (set only if different than Cortex XSOAR server)":
      "Zona horaria del servidor Nitro ESM en minutos; p. ej., para GMT+3 establezca +180 (establézcala solo si es diferente de la del servidor de Cortex XSOAR)",
    "Tip":
      "Sugerencia",
    "To choose a specific set of queries, select their log types from the dropdown (make sure “All” option is unselected).":
      "Para elegir un conjunto específico de consultas, seleccione sus tipos de registro en la lista desplegable (asegúrese de que la opción «All» no esté seleccionada).",
    "To choose a specific set of queries, select their log types from the dropdown (make sure the 'All' option is unselected).":
      "Para elegir un conjunto específico de consultas, seleccione sus tipos de registro en la lista desplegable (asegúrese de que la opción 'All' no esté seleccionada).",
    "To configure this integration you can either use Email and Password, or the API token.":
      "Para configurar esta integración, puede utilizar el correo electrónico y la contraseña, o el token de API.",
    "To generate the new token, press the “Generate” button under the API Tokens section and fill the required details.":
      "Para generar el nuevo token, pulse el botón «Generate» de la sección API Tokens y complete los detalles necesarios.",
    "To prevent duplicate incidents, this field is mandatory for fetching incidents.":
      "Para evitar incidentes duplicados, este campo es obligatorio para recuperar incidentes.",
    "To reduce the number of lookups made to the VT API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "Para reducir el número de consultas realizadas a la API de VT, puede seleccionar esta opción para omitir de forma limpia el enriquecimiento de las direcciones IP asignadas a redes privadas.",
    "To use a custom mapper, you must first duplicate the mapper and update the fields in the copy of the mapper. (Refer to the “Create a custom mapper consisting of the default Vectra RUX mapper” section for more information.)":
      "Para utilizar un asignador personalizado, primero debe duplicar el asignador y actualizar los campos en la copia. (Consulte la sección «Create a custom mapper consisting of the default Vectra RUX mapper» para obtener más información.)",
    "To use ServiceNow on Cortex, ensure your user account has the rest_api_explorer and web_service_admin roles.":
      "Para utilizar ServiceNow en Cortex, asegúrese de que su cuenta de usuario tenga los roles rest_api_explorer y web_service_admin.",
    "To use this integration, you need a VirusTotal API key.":
      "Para utilizar esta integración, necesita una clave de API de VirusTotal.",
    "To use this integration, you need to add a new Azure App Registration in the Azure Portal.":
      "Para utilizar esta integración, debe agregar un nuevo registro de aplicación de Azure en Azure Portal.",
    "To use this integration, you will need to add a new Azure App Registration in the Azure Portal.":
      "Para utilizar esta integración, deberá agregar un nuevo registro de aplicación de Azure en Azure Portal.",
    "Token (received from the admin consent - see Detailed Instructions (?)":
      "Token (recibido del consentimiento del administrador; consulte las instrucciones detalladas (?)",
    "Token Exchange":
      "Intercambio de tokens",
    "Token Format":
      "Formato del token",
    "Token ID":
      "ID de token",
    "Token ID and Token Key (credentials field)":
      "ID de token y clave de token (campo de credenciales)",
    "Token Key":
      "Clave de token",
    "Troubleshooting enrichment status":
      "Solución de problemas del estado de enriquecimiento",
    "Trust any certificate (not secure). Make sure to mark this parameter if you want the SlackBlockBuilder script to send a response back to the incident context.":
      "Confiar en cualquier certificado (no seguro). Marque este parámetro si desea que el script SlackBlockBuilder envíe una respuesta al contexto del incidente.",
    "Two-factor authentication (2FA) must be enabled on the console and configured for the account accessing the API.":
      "La autenticación de dos factores (2FA) debe estar habilitada en la consola y configurada para la cuenta que accede a la API.",
    "Type of authentication - either Authorization Code (recommended) or Client Credentials.":
      "Tipo de autenticación: Authorization Code (recomendado) o Client Credentials.",
    "Type the Host -ip, username, password, and Port.":
      "Escriba la IP del host, el nombre de usuario, la contraseña y el puerto.",
    "Uncheck the “Close Detection on Incident Closure” option if you don’t want to close the detection in Vectra when the incident is closed in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Desmarque la opción «Close Detection on Incident Closure» si no desea cerrar la detección en Vectra cuando se cierre el incidente en XSOAR. Esta opción solo se utiliza cuando la dirección de reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Uncheck the “Open Detection on Incident Reopen” option if you don’t want to open the detection in Vectra when the incident is reopened in XSOAR. This option is only used when the mirroring direction is set to ‘Outgoing’ or ‘Incoming And Outgoing’.":
      "Desmarque la opción «Open Detection on Incident Reopen» si no desea abrir la detección en Vectra cuando se vuelva a abrir el incidente en XSOAR. Esta opción solo se utiliza cuando la dirección de reflejo está establecida en 'Outgoing' o 'Incoming And Outgoing'.",
    "Under Classifier, select “N/A”.":
      "En Classifier, seleccione «N/A».",
    "Under Classifier, select N/A.":
      "En Classifier, seleccione N/A.",
    "Under Incident type, select “Vectra RUX Events Detection”.":
      "En Incident type, seleccione «Vectra RUX Events Detection».",
    "Under Mapper (incoming), select “Vectra RUX - Incoming Mapper” for default mapping.":
      "En Mapper (incoming), seleccione «Vectra RUX - Incoming Mapper» para usar la asignación predeterminada.",
    "Update “Max Fetch” & “First Fetch Time” based on your requirements.":
      "Actualice «Max Fetch» y «First Fetch Time» según sus requisitos.",
    "Update the status of existing Threatmon incidents (e.g., Open, In Progress, Resolved).":
      "Actualice el estado de los incidentes existentes de Threatmon (p. ej., Open, In Progress, Resolved).",
    "Update the status of Threatmon incidents from within XSOAR.":
      "Actualice el estado de los incidentes de Threatmon desde XSOAR.",
    "UPN Password":
      "Contraseña de UPN",
    "URL and Port":
      "URL y puerto",
    "URL Malicious Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "Umbral de URL maliciosa. Número mínimo de resultados positivos de los escáneres de VT para considerar maliciosa la URL.",
    "URL of the Vectra AI platform.":
      "URL de la plataforma Vectra AI.",
    "URL Relationships":
      "Relaciones de URL",
    "URL Suspicious Threshold. Minimum number of positive and suspicious results from VT scanners to consider the URL suspicious.":
      "Umbral de URL sospechosa. Número mínimo de resultados positivos y sospechosos de los escáneres de VT para considerar sospechosa la URL.",
    "URL Threshold. Minimum number of positive results from VT scanners to consider the URL malicious.":
      "Umbral de URL. Número mínimo de resultados positivos de los escáneres de VT para considerar maliciosa la URL.",
    "Use “Tag” to filter which notification tag to get.":
      "Utilice «Tag» para filtrar la etiqueta de notificación que desea obtener.",
    "Use API token instead of Username and Password":
      "Usar el token de API en lugar del nombre de usuario y la contraseña",
    "Use both values to configure the integration instance.":
      "Utilice ambos valores para configurar la instancia de integración.",
    "Use Display Value":
      "Usar valor de visualización",
    "Use Enterprise DLP API":
      "Usar la API de Enterprise DLP",
    "Use JWT Authentication":
      "Usar autenticación JWT",
    "Use Live Response for VMware Carbon Black Endpoint Standard or VMware Carbon Black EDR (previously known as Carbon Black Defense and Carbon Black Response respectively).":
      "Utilice Live Response para VMware Carbon Black Endpoint Standard o VMware Carbon Black EDR (anteriormente conocidos como Carbon Black Defense y Carbon Black Response, respectivamente).",
    "Use OAuth 2.0 Authentication":
      "Usar autenticación OAuth 2.0",
    "Use OAuth Login":
      "Usar inicio de sesión con OAuth",
    "Use secure requests protocol (HTTPS).":
      "Usar protocolo de solicitudes seguro (HTTPS)",
    "Use system proxy settings checkbox":
      "Casilla Usar la configuración de proxy del sistema",
    "Use system proxy settings: Select this checkbox to use the system’s proxy settings.":
      "Usar la configuración de proxy del sistema: seleccione esta casilla para utilizar la configuración de proxy del sistema.",
    "Use the \"API Key (Recommended)\" parameter instead.":
      "Utilice en su lugar el parámetro «API Key (Recommended)».",
    "Use the Client ID and Client Secret Key directly in this integration, or store them in the Cortex credentials store. In that case, the Client ID should be stored in the “username” field and the Client Secret Key should be stored in the “password” field.":
      "Utilice el Client ID y el Client Secret Key directamente en esta integración o guárdelos en el almacén de credenciales de Cortex. En ese caso, el Client ID debe guardarse en el campo «username» y el Client Secret Key en el campo «password».",
    "Use the following naming convention: (demisto_fields_{type}).":
      "Utilice la siguiente convención de nomenclatura: (demisto_fields_{type}).",
    "Use the Microsoft Teams integration to send messages and notifications to your team members and create meetings.":
      "Utilice la integración de Microsoft Teams para enviar mensajes y notificaciones a los miembros de su equipo y crear reuniones.",
    "Use the Microsoft Teams Webhook integration to send messages and notifications to Teams configured with an incoming webhook or a workflow. When using an adaptive card, the message will always include a link back to the investigation from which it was sent.":
      "Utilice la integración de Microsoft Teams Webhook para enviar mensajes y notificaciones a Teams configurado con un webhook entrante o un flujo de trabajo. Cuando se utiliza una tarjeta adaptable, el mensaje siempre incluirá un vínculo a la investigación desde la que se envió.",
    "Use the Prisma Cloud integration to manage alerts from Microsoft Azure, Google Cloud Platform, and AWS.":
      "Utilice la integración de Prisma Cloud para administrar alertas de Microsoft Azure, Google Cloud Platform y AWS.",
    "Use the SplunkPy integration to fetch incidents from Splunk ES, and query results by SID.":
      "Utilice la integración de SplunkPy para recuperar incidentes de Splunk ES y consultar resultados por SID.",
    "Use the system proxy settings to reach with the Vectra RUX API.":
      "Utiliza la configuración de proxy del sistema para comunicarse con la API de Vectra RUX.",
    "Use the Workday IAM integration to fetch Workday reports and create corresponding incidents in Cortex. This integration is meant to be used as part of the IAM premium pack.":
      "Utilice la integración de Workday IAM para recuperar informes de Workday y crear los incidentes correspondientes en Cortex. Esta integración está pensada para utilizarse como parte del paquete premium de IAM.",
    "Use the Zendesk V2 integration to perform operations related to users, tickets, attachments, and more.":
      "Utilice la integración de Zendesk V2 para realizar operaciones relacionadas con usuarios, tickets, archivos adjuntos y más.",
    "Use these client_id, client_secret, tsg_id to authenticate to your AIOps instance.":
      "Utilice estos client_id, client_secret y tsg_id para autenticarse en su instancia de AIOps.",
    "Use this option when required to customize the URL to the Azure management endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Utilice esta opción cuando necesite personalizar la URL del punto de conexión de administración de Azure. Encontrará más información aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this option when required to customize the URL to the Entra ID endpoint. More information can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Utilice esta opción cuando necesite personalizar la URL del punto de conexión de Entra ID. Encontrará más información aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Use this parameter with careful consideration.":
      "Utilice este parámetro con precaución.",
    "Use TLS for connection":
      "Usar TLS para la conexión",
    "Use to query SQL Server, using a remote (TCP) connection to the DB.":
      "Se utiliza para consultar SQL Server mediante una conexión remota (TCP) a la base de datos.",
    "Use when SonarQube is publicly accessible.":
      "Úsela cuando SonarQube sea de acceso público.",
    "Use your server URL, username and password in order to get your API-key.":
      "Utilice la URL del servidor, el nombre de usuario y la contraseña para obtener su clave de API.",
    "Used for certificate authentication. As appears in the \"Certificates & secrets\" page of the app.":
      "Se utiliza para la autenticación con certificado. Tal como aparece en la página «Certificates & secrets» de la aplicación.",
    "User Email Address (Use for auto token refresh)":
      "Dirección de correo electrónico del usuario (se utiliza para la actualización automática del token)",
    "User Token":
      "Token de usuario",
    "Username (email address)":
      "Nombre de usuario (dirección de correo electrónico)",
    "Username (or '<username>/token' when using API key).":
      "Nombre de usuario (o '<username>/token' cuando se utiliza una clave de API).",
    "Username / Access Key ID":
      "Nombre de usuario / ID de clave de acceso",
    "Username / API Key":
      "Nombre de usuario / clave de API",
    "Username / API Key (see '?')":
      "Nombre de usuario / clave de API (consulte '?')",
    "Users and Authentication":
      "Usuarios y autenticación",
    "Users Lookup table name":
      "Nombre de la tabla de búsqueda de usuarios",
    "Users must be assigned to the admin role to use this integration.":
      "Para utilizar esta integración, los usuarios deben tener asignado el rol admin.",
    "Uses the system proxy server to communicate with the integration. If not selected, the integration will not use the system proxy server.":
      "Utiliza el servidor proxy del sistema para comunicarse con la integración. Si no se selecciona, la integración no usará el servidor proxy del sistema.",
    "Using API Token authentication":
      "Uso de la autenticación con token de API",
    "Using Multi Factor Authentication (MFA)":
      "Uso de la autenticación multifactor (MFA)",
    "Using Multi-Factor Authentication (MFA)":
      "Uso de la autenticación multifactor (MFA)",
    "Using National Cloud":
      "Uso de nubes nacionales",
    "Using the task ‘Create Integration system user’ create an account with username and password":
      "Con la tarea 'Create Integration system user', cree una cuenta con nombre de usuario y contraseña",
    "Validate the negotiation info when connecting to a share. More information can be found on https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation":
      "Valida la información de negociación al conectarse a un recurso compartido. Encontrará más información en https://docs.microsoft.com/en-us/archive/blogs/openspecification/smb3-secure-dialect-negotiation",
    "Verbose (show log in case of error)":
      "Detallado (mostrar el registro en caso de error)",
    "Verification Token(Team Chat App)":
      "Token de verificación (Team Chat App)",
    "Verify SSL":
      "Verificar SSL",
    "VirusTotal has been updated to VirusTotal (API v3). Please use the updated version instead.":
      "VirusTotal se ha actualizado a VirusTotal (API v3). Utilice en su lugar la versión actualizada.",
    "Vsys - Firewall instances only":
      "Vsys: solo instancias de firewall",
    "When checked, no SSL certificates check will be done when interacting with the Vectra RUX API. It's insecure. (Default - unchecked)":
      "Si se marca, no se comprobarán los certificados SSL al interactuar con la API de Vectra RUX. No es seguro. (Predeterminado: sin marcar)",
    "When ciphers are specified, the SSH connection will be established with the first cipher of the specified ciphers that the given host supports.":
      "Cuando se especifican cifrados, la conexión SSH se establecerá con el primero de los cifrados especificados que admita el host indicado.",
    "When fetch is enable you must provide this argument. Possible values are: new, open, assigned, closed or ignored.":
      "Cuando la recuperación está habilitada, debe proporcionar este argumento. Los valores posibles son: new, open, assigned, closed o ignored.",
    "When fetching supplier findings, a run that reaches this limit part-way through a supplier resumes on that same supplier next run, so the limit is honored without skipping findings.":
      "Al recuperar los hallazgos de proveedores, una ejecución que alcance este límite a mitad de un proveedor se reanuda con ese mismo proveedor en la siguiente ejecución, de modo que se respeta el límite sin omitir hallazgos.",
    "When key algorithms are specified, the SSH connection will be established with the first key algorithm of the specified key algorithms that the given host supports.":
      "Cuando se especifican algoritmos de clave, la conexión SSH se establecerá con el primero de los algoritmos de clave especificados que admita el host indicado.",
    "When mirroring incidents, you can make changes in Vectra that will be reflected in Cortex, or vice versa.":
      "Al reflejar incidentes, puede realizar cambios en Vectra que se reflejarán en Cortex, o viceversa.",
    "When running Live Response commands (e.g. ‘cb-process-kill’), it is possible to pass ‘wait-timeout’ argument to determine the number of seconds to wait for the command to be executed on Live Response side. Once the command has been executed or wait-time has expired - the command information will be returned to the war room.":
      "Al ejecutar comandos de Live Response (p. ej., 'cb-process-kill'), es posible pasar el argumento 'wait-timeout' para determinar el número de segundos que se debe esperar a que el comando se ejecute en Live Response. Una vez que el comando se haya ejecutado o haya expirado el tiempo de espera, la información del comando se devolverá al war room.",
    "When selected, closing and re-opening the Cortex incident is mirrored in Prisma Cloud.":
      "Si se selecciona, el cierre y la reapertura del incidente de Cortex se reflejan en Prisma Cloud.",
    "When selected, the hunting query result is also saved to the Microsoft 365 Defender context path. Relevant only for the msg-advanced-hunting command.":
      "Si se selecciona, el resultado de la consulta de búsqueda también se guarda en la ruta de contexto de Microsoft 365 Defender. Solo es relevante para el comando msg-advanced-hunting.",
    "When selecting the Custom option, the Azure AD endpoint parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Al seleccionar la opción Custom, debe completarse el parámetro Azure AD endpoint. Encontrará más información sobre las nubes nacionales aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Host URL parameter must be filled. More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Al seleccionar la opción Custom, debe completarse el parámetro Host URL. Encontrará más información sobre las nubes nacionales aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "When selecting the Custom option, the Server URL parameter must be filled. More information can be found on the integration page - https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection":
      "Al seleccionar la opción Custom, debe completarse el parámetro Server URL. Encontrará más información en la página de la integración: https://xsoar.pan.dev/docs/reference/integrations/microsoft-defender-advanced-threat-protection",
    "When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "Al cambiar de 'Authorization Code Flow' a 'Client Credentials Flow', compruebe la validez de la instancia haciendo clic en el botón 'Test'.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command.":
      "Al cambiar de 'Client Credentials Flow' a 'Authorization Code Flow', haga lo siguiente: guarde la instancia, ejecute el comando 'microsoft-teams-generate-login-url' y siga las instrucciones que se indican allí. Una vez hecho, compruebe la validez de la instancia ejecutando el comando 'microsoft-teams-auth-test'.",
    "When switching from the 'Client Credentials Flow' to the 'Authorization Code Flow' do as follow: Save the instance, run the 'microsoft-teams-generate-login-url' command and follow the instructions mentioned there. Once done, test the validity of your instance by running the 'microsoft-teams-auth-test' command. When switching from the 'Authorization Code Flow' to the 'Client Credentials Flow', test the validity of the instance by clicking the 'Test' button.":
      "Al cambiar de 'Client Credentials Flow' a 'Authorization Code Flow', haga lo siguiente: guarde la instancia, ejecute el comando 'microsoft-teams-generate-login-url' y siga las instrucciones que se indican allí. Una vez hecho, compruebe la validez de la instancia ejecutando el comando 'microsoft-teams-auth-test'. Al cambiar de 'Authorization Code Flow' a 'Client Credentials Flow', compruebe la validez de la instancia haciendo clic en el botón 'Test'.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), hence we recommend using OAuth 2.0 authorization.":
      "Cuando se utiliza la autorización básica, deberá actualizar su contraseña con el OTP actual cada vez que caduque el código vigente (30 segundos); por ello, recomendamos utilizar la autorización OAuth 2.0.",
    "When using basic authorization, you will have to update your password with the current OTP every time the current code expires (30 seconds), therefore we recommend using OAuth 2.0 authorization.":
      "Cuando se utiliza la autorización básica, deberá actualizar su contraseña con el OTP actual cada vez que caduque el código vigente (30 segundos); por lo tanto, recomendamos utilizar la autorización OAuth 2.0.",
    "Whether this instance fetches your own organization's findings or findings across your supplier portfolio. Configure a separate instance for each scope.":
      "Indica si esta instancia recupera los hallazgos de su propia organización o los de toda su cartera de proveedores. Configure una instancia independiente para cada ámbito.",
    "Whether to add escaping before `=` chars in URLs. For further information, see the pack README":
      "Indica si se debe agregar un carácter de escape antes de los caracteres `=` en las URL. Para obtener más información, consulte el README del paquete",
    "Whether to disable automatic notifications to the configured notifications channel.":
      "Indica si se deben deshabilitar las notificaciones automáticas al canal de notificaciones configurado.",
    "Whether to enable mirroring only from xsoar to slack, mark it if file mirroring is required in investigations.":
      "Indica si se debe habilitar el reflejo solo de XSOAR a Slack; márquela si se requiere el reflejo de archivos en las investigaciones.",
    "Whether to trust any certificate (not secure).":
      "Indica si se debe confiar en cualquier certificado (no seguro).",
    "Whether to use the system proxy settings.":
      "Indica si se debe usar la configuración de proxy del sistema.",
    "WildFire Server URLs":
      "URL de servidores de WildFire",
    "Workday Report URL":
      "URL del informe de Workday",
    "Workday Reports":
      "Informes de Workday",
    "XSOAR API Key":
      "Clave de API de XSOAR",
    "XSOAR user key":
      "Clave de usuario de XSOAR",
    "XSOAR will query for Orca Alerts/ Alert updates every 1 minute":
      "XSOAR consultará las alertas de Orca y sus actualizaciones cada minuto",
    "You can also specify the threshold as an argument when running relevant commands.":
      "También puede especificar el umbral como argumento al ejecutar los comandos pertinentes.",
    "You can enable incident mirroring between Cortex incidents and Splunk findings.":
      "Puede habilitar el reflejo de incidentes entre los incidentes de Cortex y los hallazgos de Splunk.",
    "You can enable incident mirroring between Cortex incidents and Splunk notables.":
      "Puede habilitar el reflejo de incidentes entre los incidentes de Cortex y los notables de Splunk.",
    "You can execute these commands from the Cortex CLI, as part of an automation, or in a playbook.":
      "Puede ejecutar estos comandos desde la CLI de Cortex, como parte de una automatización o en un playbook.",
    "You can store the additional workflow in a Cortex list, and use a transformer on the task in a playbook to send to a specific team.":
      "Puede almacenar el flujo de trabajo adicional en una lista de Cortex y usar un transformador en la tarea de un playbook para enviarlo a un equipo específico.",
    "You can use Prisma Cloud UI to generate this required access key.":
      "Puede usar la interfaz de usuario de Prisma Cloud para generar esta clave de acceso necesaria.",
    "You can use the following methods to authenticate Microsoft Defender XDR.":
      "Puede usar los siguientes métodos para autenticar Microsoft Defender XDR.",
    "You do not need to specify the classifier as all Splunk incidents are ingested as Splunk Notable Generic. As you become more familiar with Cortex, you can create custom incident types as needed instead of using the Splunk Notable Generic incident type.":
      "No es necesario especificar el clasificador, ya que todos los incidentes de Splunk se incorporan como Splunk Notable Generic. A medida que se familiarice con Cortex, podrá crear tipos de incidente personalizados según sea necesario en lugar de usar el tipo de incidente Splunk Notable Generic.",
    "You don’t need to install the packages, they are included in the Docker image.":
      "No es necesario instalar los paquetes, ya que están incluidos en la imagen de Docker.",
    "You may also use the advanced search in Okta’s System Logs to generate the filter expression.":
      "También puede usar la búsqueda avanzada de los registros del sistema de Okta para generar la expresión de filtro.",
    "You most enable or run mirror-investigation.":
      "Debe habilitar o ejecutar mirror-investigation.",
    "You must have an API subscription.":
      "Debe tener una suscripción a la API.",
    "You must have your client applications registered on your authorization server with the required scope and configured appropriately.":
      "Debe tener sus aplicaciones cliente registradas en su servidor de autorización con el ámbito necesario y configuradas correctamente.",
    "You need to create a separate integration instance for Palo Alto Networks Firewall and Palo Alto Networks. Unless specified otherwise, all commands are valid for both Firewall and Panorama.":
      "Debe crear una instancia de integración independiente para Palo Alto Networks Firewall y para Palo Alto Networks. Salvo que se indique lo contrario, todos los comandos son válidos tanto para Firewall como para Panorama.",
    "You should have a non-admin user with all necessary roles (only non-admin roles) in addition to the existing role snc_platform_rest_api_access that is required to make API calls.":
      "Debe contar con un usuario no administrador con todos los roles necesarios (solo roles que no sean de administrador), además del rol existente snc_platform_rest_api_access, que es necesario para realizar llamadas a la API.",
    "Your API key can be found in your Orion Malware account user menu.":
      "Puede encontrar su clave de API en el menú de usuario de su cuenta de Orion Malware.",
    "Your API key can be found in your VirusTotal account user menu.":
      "Puede encontrar su clave de API en el menú de usuario de su cuenta de VirusTotal.",
    "Your API key carries all your privileges, so keep it secure and don’t share it with anyone.":
      "Su clave de API incluye todos sus privilegios, así que manténgala segura y no la comparta con nadie.",
    "Your PingOne Environment ID":
      "Su ID de entorno de PingOne",
    "Your server URL (e.g., https://yourdomain.jamfcloud.com)":
      "URL de su servidor (p. ej., https://yourdomain.jamfcloud.com)",
    "Zendesk address (e.g. https://demisto.zendesk.com)":
      "Dirección de Zendesk (p. ej., https://demisto.zendesk.com)",
    "Zendesk integration requires the API key and a username.":
      "La integración de Zendesk requiere la clave de API y un nombre de usuario.",
    "ZIdentity returns a Bearer access token.":
      "ZIdentity devuelve un token de acceso Bearer.",

    // --- Batch: Splunk/ServiceNow/Mimecast/RelayShield/Panorays/TypeSafe etc. integration docs as joined sentences (16:09 export, Collector 0.2.0) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Investigation only) If {0} is selected in step 8, configure the following Investigation-specific parameters:":
      "(Solo para investigaciones) Si se selecciona {0} en el paso 8, configure los siguientes parámetros específicos de investigaciones:",
    "(Optional) Test the created instance by running the {0} command.":
      "(Opcional) Pruebe la instancia creada ejecutando el comando {0}.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. When provided, the integration automatically performs the initial OAuth login on first use. It also automatically renews the refresh token when it expires.":
      "(Recomendado) Introduzca en la configuración de la instancia de la integración el {0} y la {1} de la cuenta de ServiceNow. Si se proporcionan, la integración realiza automáticamente el inicio de sesión OAuth inicial en el primer uso. También renueva automáticamente el token de actualización cuando caduca.",
    "{0} Check the balance and entitlements on your account at {1}.":
      "{0} Compruebe el saldo y los derechos de su cuenta en {1}.",
    "{0} Confirm the key was copied in full and begins with {1}. Keys are deactivated when the underlying subscription is cancelled.":
      "{0} Confirme que la clave se copió completa y que comienza por {1}. Las claves se desactivan cuando se cancela la suscripción subyacente.",
    "{0} This is a clean result, not an error. RelayShield reports only on sources it queried; see the DBotScore mapping above.":
      "{0} Se trata de un resultado limpio, no de un error. RelayShield informa únicamente de las fuentes que consultó; consulte la asignación de DBotScore anterior.",
    "{0}: Fetches the drilldown searches configured by the user in the rule name that triggered the finding event and performs this search. The results are stored in the context of the incident under the {1} field as follows: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].":
      "{0}: recupera las búsquedas drilldown configuradas por el usuario en el nombre de la regla que activó el evento de tipo finding y ejecuta esta búsqueda. Los resultados se almacenan en el contexto del incidente, en el campo {1}, con el siguiente formato: [{‘query_name’:<query_name>, ‘query_search’: <query_search>, ‘query_results’: [{result1}, {result2}, {result3}], ‘enrichment_status’: <enrichment_status>}].",
    "{0}: Keep the SPL query as-is unless you need to filter further. The query must include the {1} token. Do not modify or remove this token. To add custom filters, append extra URL parameters such as {2} after the placeholder.":
      "{0}: mantenga la consulta SPL tal cual, a menos que necesite filtrar más. La consulta debe incluir el token {1}. No modifique ni elimine este token. Para agregar filtros personalizados, anexe parámetros de URL adicionales, como {2}, después del marcador de posición.",
    "{0}: Select the enrichment types you want to enrich each fetched finding with. If none are selected, the integration will fetch findings as usual (without enrichment).":
      "{0}: seleccione los tipos de enriquecimiento con los que desea enriquecer cada finding recuperado. Si no se selecciona ninguno, la integración recuperará los findings como de costumbre (sin enriquecimiento).",
    "{0}: Select the enrichment types you want to enrich each fetched notable with. If none are selected, the integration will fetch notables as usual (without enrichment).":
      "{0}: seleccione los tipos de enriquecimiento con los que desea enriquecer cada notable recuperado. Si no se selecciona ninguno, la integración recuperará los notables como de costumbre (sin enriquecimiento).",
    "{0}: The maximal amount of events to fetch per enrichment type (Drilldown, Asset, and Identity). In a case of multiple drilldown enrichments the limit will apply for each drilldown search query. (default to 20).":
      "{0}: cantidad máxima de eventos que se recuperan por tipo de enriquecimiento (Drilldown, Asset e Identity). Si hay varios enriquecimientos drilldown, el límite se aplica a cada consulta de búsqueda drilldown. (El valor predeterminado es 20).",
    "{0}: The maximum number of investigations to fetch per cycle. Limited to 100 by the Splunk investigations endpoint.":
      "{0}: número máximo de investigaciones que se recuperan por ciclo. El punto de conexión de investigaciones de Splunk lo limita a 100.",
    "{0}: The query for the finding events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: la consulta para el enriquecimiento de eventos de tipo finding (definida de forma predeterminada). Si decide editarla, asegúrese de proporcionar una consulta que use la macro `notable`. Consulte la consulta predeterminada como ejemplo.",
    "{0}: The query for the notable events enrichment (defined by default). If you decide to edit this, make sure to provide a query that uses the `notable` macro. See the default query as an example.":
      "{0}: la consulta para el enriquecimiento de eventos notable (definida de forma predeterminada). Si decide editarla, asegúrese de proporcionar una consulta que use la macro `notable`. Consulte la consulta predeterminada como ejemplo.",
    "{0}: The relative time interval to look back during the initial investigation fetch (for example, {1}).":
      "{0}: el intervalo de tiempo relativo que se retrocede durante la primera recuperación de investigaciones (por ejemplo, {1}).",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, finding events that were not enriched will be saved without the enrichment.":
      "{0}: el tiempo de espera de cada enriquecimiento (el valor predeterminado es 5 min). Cuando se alcanza el tiempo de espera seleccionado, los eventos de tipo finding que no se enriquecieron se guardan sin enriquecimiento.",
    "{0}: The timeout for each enrichment (default is 5min). When the selected timeout was reached, notable events that were not enriched will be saved without the enrichment.":
      "{0}: el tiempo de espera de cada enriquecimiento (el valor predeterminado es 5 min). Cuando se alcanza el tiempo de espera seleccionado, los eventos notable que no se enriquecieron se guardan sin enriquecimiento.",
    "{0}: whether the asset enrichment was successful.":
      "{0}: indica si el enriquecimiento de activos se realizó correctamente.",
    "{0}: whether the drilldown enrichment was successful. In a case of multiple drilldown enrichments, the status is successful if at least one drilldown search enrichment was successful.":
      "{0}: indica si el enriquecimiento drilldown se realizó correctamente. Si hay varios enriquecimientos drilldown, el estado es correcto si al menos un enriquecimiento de búsqueda drilldown se realizó correctamente.",
    "{0}: whether the identity enrichment was successful.":
      "{0}: indica si el enriquecimiento de identidades se realizó correctamente.",
    "A clean result (“no known finding”) is mapped to DBotScore {0}, never {1}. “No known finding” means nothing was flagged in the sources RelayShield actually queried. It is not a verified-safe guarantee, and treating it as “Good” would claim more certainty than the underlying data supports. CRITICAL/HIGH findings map to {2}, MEDIUM/LOW findings map to {3}.":
      "Un resultado limpio (\"no known finding\") se asigna a DBotScore {0}, nunca a {1}. \"No known finding\" significa que no se marcó nada en las fuentes que RelayShield consultó realmente. No es una garantía de que sea seguro, y tratarlo como \"Good\" supondría una certeza mayor de la que respaldan los datos subyacentes. Los hallazgos CRITICAL/HIGH se asignan a {2} y los hallazgos MEDIUM/LOW se asignan a {3}.",
    "Build a query by selecting fields operators and relevant values. You can always add an additional condition by selecting the {0} button on the right. For more information on how to use the search editor see {1}.":
      "Cree una consulta seleccionando campos, operadores y valores relevantes. Siempre puede agregar una condición adicional seleccionando el botón {0} de la derecha. Para obtener más información sobre cómo usar el editor de búsqueda, consulte {1}.",
    "By default, the {0} parameter is set to 70. This means that for every file with a severity of over 70 the Dbot score will be set to {1}. This parameter is configurable.":
      "De forma predeterminada, el parámetro {0} se establece en 70. Esto significa que, para todo archivo con una gravedad superior a 70, la puntuación de Dbot se establecerá en {1}. Este parámetro es configurable.",
    "Content in the Splunk content pack (such as mappers, layout, playbooks, incident fields, and the incident type). Therefore, you will need to create your own content. See the {0} for information.":
      "Contenido del paquete de contenido de Splunk (como asignadores, diseños, playbooks, campos de incidente y el tipo de incidente). Por lo tanto, deberá crear su propio contenido. Consulte {0} para obtener información.",
    "Copy the API key from the confirmation page. It begins with {0}. The key is also emailed to the address you entered.":
      "Copie la clave de API de la página de confirmación. Comienza por {0}. La clave también se envía por correo electrónico a la dirección que introdujo.",
    "Copy the query value and paste it as the value for the {0} argument for both search commands. For example:":
      "Copie el valor de la consulta y péguelo como valor del argumento {0} en ambos comandos de búsqueda. Por ejemplo:",
    "Create a Java Key Store and upload it to the instance by accessing from the upper menu: {0} > {1} > {2}. The private key will be used as an integration parameter.":
      "Cree un Java Key Store y cárguelo en la instancia accediendo desde el menú superior: {0} > {1} > {2}. La clave privada se utilizará como parámetro de la integración.",
    "Create a summary index in Splunk. For more information, click {0}.":
      "Cree un índice de resumen en Splunk. Para obtener más información, haga clic {0}.",
    "Enter your username and password, and append the One Time Password (OTP) that you currently see on your mobile device to your password without any extra spaces. For example, if your password is {0} and the current OTP code is {1}, enter {2}.":
      "Introduzca su nombre de usuario y contraseña, y agregue al final de la contraseña, sin espacios adicionales, la contraseña de un solo uso (OTP) que vea en ese momento en su dispositivo móvil. Por ejemplo, si su contraseña es {0} y el código OTP actual es {1}, introduzca {2}.",
    "For anything else, contact {0}.":
      "Para cualquier otra consulta, póngase en contacto con {0}.",
    "For assistance, contact Panorays support at {0}.":
      "Para obtener ayuda, póngase en contacto con el soporte de Panorays en {0}.",
    "For full instructions, see the {0}.":
      "Para obtener instrucciones completas, consulte {0}.",
    "For mirroring the {0} field, the usernames need to be transformed to the corresponding names in Cortex and Splunk.":
      "Para reflejar el campo {0}, los nombres de usuario deben transformarse en los nombres correspondientes en Cortex y Splunk.",
    "For more information about creating an OAuth app click {0}.":
      "Para obtener más información sobre cómo crear una aplicación OAuth, haga clic {0}.",
    "For using OAuth 2.0 see the above instructions. The OTP code should be appended to the password parameter in the {0} command.":
      "Para usar OAuth 2.0, consulte las instrucciones anteriores. El código OTP debe anexarse al parámetro de contraseña del comando {0}.",
    "From the {0} page, click {1}.":
      "En la página {0}, haga clic en {1}.",
    "From the left-side navigation menu, click {0}.":
      "En el menú de navegación de la izquierda, haga clic en {0}.",
    "From the top navigation bar, click {0}.":
      "En la barra de navegación superior, haga clic en {0}.",
    "Go to the {0}.":
      "Vaya a {0}.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires — no manual commands are needed. Otherwise, you will have to run the {2} command for the initial login and again each time the refresh token expires.":
      "Si los campos {0} y {1} están configurados, la integración realizará automáticamente el inicio de sesión inicial y renovará el token de actualización cuando caduque; no se necesitan comandos manuales. De lo contrario, tendrá que ejecutar el comando {2} para el inicio de sesión inicial y de nuevo cada vez que caduque el token de actualización.",
    "If you did note provide {0} and {1} in step 3, run the {2} command from the Cortex CLI and fill in the username and password of the ServiceNow integration instance. This step generates an access token to the ServiceNow instance and is required only the first time after configuring a new integration instance in Cortex. If you provided {3} and {4}, this step is handled automatically.":
      "Si no proporcionó {0} y {1} en el paso 3, ejecute el comando {2} desde la CLI de Cortex e introduzca el nombre de usuario y la contraseña de la instancia de la integración de ServiceNow. Este paso genera un token de acceso a la instancia de ServiceNow y solo es necesario la primera vez, después de configurar una nueva instancia de la integración en Cortex. Si proporcionó {3} y {4}, este paso se gestiona automáticamente.",
    "In case of inconsistent authentication issues when using username & password, try to use {0} as the username. this will set the integration to use basic authentication when connecting to the Splunk server. For example: TestUser@_basic":
      "Si tiene problemas de autenticación inconsistentes al usar nombre de usuario y contraseña, pruebe a usar {0} como nombre de usuario. Esto hará que la integración use la autenticación básica al conectarse al servidor de Splunk. Por ejemplo: TestUser@_basic",
    "In order for the mirroring to work, the {0} parameter needs to be set before the incident is fetched.":
      "Para que el reflejo funcione, el parámetro {0} debe establecerse antes de recuperar el incidente.",
    "In order to activate them check the {0} checkbox, and then check the relevant boxes for each fetch type you want.":
      "Para activarlos, marque la casilla {0} y, a continuación, marque las casillas correspondientes a cada tipo de recuperación que desee.",
    "In order to refresh token / discover auth types of the account / create new access & secret keys, you are required to provide: App ID, Account email address & password, and BaseUrl is set to {0}, based on your {1}. These parameters support the following integration commands: mimecast-login -> fetches new access key & secret key mimecast-discover -> lists supported auth types of user mimecast-refresh-token -> refreshes the validity duration of access key & secret key (3 days)":
      "Para actualizar el token, detectar los tipos de autenticación de la cuenta y crear nuevas claves de acceso y secretas, debe proporcionar: App ID, dirección de correo electrónico y contraseña de la cuenta, y BaseUrl debe establecerse en {0}, según su {1}. Estos parámetros admiten los siguientes comandos de la integración: mimecast-login -> recupera una nueva clave de acceso y una nueva clave secreta mimecast-discover -> enumera los tipos de autenticación admitidos del usuario mimecast-refresh-token -> renueva la duración de validez de la clave de acceso y la clave secreta (3 días)",
    "In the {0} parameter, select which Splunk event types to ingest. Default is {1}. Add {2} to also fetch Splunk investigations (select both to fetch them together).":
      "En el parámetro {0}, seleccione qué tipos de eventos de Splunk se van a ingerir. El valor predeterminado es {1}. Agregue {2} para recuperar también las investigaciones de Splunk (seleccione ambos para recuperarlos conjuntamente).",
    "In the Enrichment Types field, select {0}, {1} and {2}. This enrichment provides additional information about assets, drilldown, and identities that are related to the notable events you ingest. Multiple drilldown searches enrichment is supported from Enterprise Security v7.2.0. For more information, see {3}.":
      "En el campo Enrichment Types, seleccione {0}, {1} e {2}. Este enriquecimiento proporciona información adicional sobre los activos, el drilldown y las identidades relacionados con los eventos notable que ingiere. El enriquecimiento con varias búsquedas drilldown se admite a partir de Enterprise Security v7.2.0. Para obtener más información, consulte {3}.",
    "Keep the {0} as-is, since we use the `notable` macro when ingesting Finding events. You can create a more granular search by specifying specific conditions, for example specific security domain or event ID.":
      "Mantenga {0} tal cual, ya que se usa la macro `notable` al ingerir eventos de tipo finding. Puede crear una búsqueda más granular especificando condiciones concretas, por ejemplo un dominio de seguridad o un ID de evento específicos.",
    "Keep the default values for the Finding {0} and {1}.":
      "Mantenga los valores predeterminados de {0} y {1} para Finding.",
    "Leave {0} at {1} unless you have been given a dedicated endpoint.":
      "Deje {0} en {1} a menos que se le haya proporcionado un punto de conexión dedicado.",
    "Locate the Mimecast API 2.0 tile and select {0}.":
      "Localice el icono Mimecast API 2.0 y seleccione {0}.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance (see {0} for more information).":
      "Inicie sesión en su instancia de ServiceNow y cree un punto de conexión para que Cortex acceda a la instancia (consulte {0} para obtener más información).",
    "Make sure you have provided the Client ID and Client Secret, and that the BaseUrl is set to {0}.":
      "Asegúrese de haber proporcionado el Client ID y el Client Secret, y de que BaseUrl esté establecido en {0}.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details.":
      "Aviso: Al enviar indicadores mediante el comando {0} de esta integración, los datos de los indicadores podrían quedar disponibles públicamente. Consulte la documentación del proveedor para obtener más información.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding finding is closed on the Splunk side. By default, only Findings closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "Opcional: marque el parámetro de la integración {0} para cerrar el incidente de Cortex cuando se cierre el finding correspondiente en Splunk. De forma predeterminada, solo se reflejarán los Findings cerrados con la etiqueta \"Closed\". Puede especificar estados concretos (separados por comas) en {1} y habilitar la opción {2} para agregar los estados marcados como \"End Status\" en Splunk y para agregar estados adicionales al proceso de reflejo.",
    "Optional: Check the {0} integration parameter to close the Cortex incident when the corresponding notable is closed on the Splunk side. By default, only Notables closed with a “Closed” label will be mirrored. You can specify specific statuses (comma-separated) in the {1}, and enable the {2} option to add statuses marked as “End Status” in Splunk, and to add additional statuses to the mirroring process.":
      "Opcional: marque el parámetro de la integración {0} para cerrar el incidente de Cortex cuando se cierre el notable correspondiente en Splunk. De forma predeterminada, solo se reflejarán los Notables cerrados con la etiqueta \"Closed\". Puede especificar estados concretos (separados por comas) en {1} y habilitar la opción {2} para agregar los estados marcados como \"End Status\" en Splunk y para agregar estados adicionales al proceso de reflejo.",
    "Optional: Check the {0} integration parameter to close the Splunk finding when the corresponding Cortex incident is closed. {1}":
      "Opcional: marque el parámetro de la integración {0} para cerrar el finding de Splunk cuando se cierre el incidente de Cortex correspondiente. {1}",
    "Optional: Check the {0} integration parameter to close the Splunk notable when the corresponding Cortex incident is closed.":
      "Opcional: marque el parámetro de la integración {0} para cerrar el notable de Splunk cuando se cierre el incidente de Cortex correspondiente.",
    "The drilldown search does not support Splunk’s advanced syntax. For example: Splunk filters ({0}, {1}, etc.)":
      "La búsqueda drilldown no admite la sintaxis avanzada de Splunk. Por ejemplo: filtros de Splunk ({0}, {1}, etc.)",
    "The grant type used to get an access token is {0}. See the {1} for more information.":
      "El tipo de concesión que se usa para obtener un token de acceso es {0}. Consulte {1} para obtener más información.",
    "The integration allows for fetching Splunk {0} and {1} events using default queries. The queries can be changed and modified to support different Splunk use cases.":
      "La integración permite recuperar eventos {0} y {1} de Splunk mediante consultas predeterminadas. Las consultas se pueden cambiar y modificar para admitir distintos casos de uso de Splunk.",
    "The integration sends data to TypeSafe’s hosted API. Review your organization’s data-handling requirements before including incident evidence, personal data, credentials, or other sensitive content in {0}.":
      "La integración envía datos a la API alojada de TypeSafe. Revise los requisitos de tratamiento de datos de su organización antes de incluir pruebas de incidentes, datos personales, credenciales u otro contenido sensible en {0}.",
    "These instructions explain how to build a query, which you can use as the value for the {0} argument. You can use this argument in the {1} and {2} commands.":
      "Estas instrucciones explican cómo crear una consulta que puede usar como valor del argumento {0}. Puede usar este argumento en los comandos {1} y {2}.",
    "This integration only reads data (company findings, supplier findings, and the supplier list) - it never creates, updates, or deletes anything in Panorays. The read-only {0} role is sufficient for both {1} and {2} scopes, including reading across your entire supplier portfolio.":
      "Esta integración solo lee datos (hallazgos de la empresa, hallazgos de proveedores y la lista de proveedores); nunca crea, actualiza ni elimina nada en Panorays. El rol de solo lectura {0} es suficiente para los ámbitos {1} y {2}, incluida la lectura de toda su cartera de proveedores.",
    "This integration uses {0}.":
      "Esta integración usa {0}.",
    "To export the query, click the {0} button.":
      "Para exportar la consulta, haga clic en el botón {0}.",
    "To use API 2.0, you need to generate a {0} and {1} from the Mimecast admin console:":
      "Para usar API 2.0, debe generar un {0} y un {1} desde la consola de administración de Mimecast:",
    "To use this integration you need a RelayShield API key. RelayShield authenticates every request with a single API key sent in the {0} header. There are no OAuth flows, tenant IDs, or additional permissions to grant.":
      "Para usar esta integración, necesita una clave de API de RelayShield. RelayShield autentica cada solicitud con una única clave de API enviada en el encabezado {0}. No hay flujos de OAuth, ID de tenant ni permisos adicionales que conceder.",
    "Type the {0} and {1}.":
      "Escriba {0} y {1}.",
    "Under Classifier, select {0}. The classifier routes Finding events to the {1} incident type and Investigation events to the {2} incident type.":
      "En Classifier, seleccione {0}. El clasificador enruta los eventos Finding al tipo de incidente {1} y los eventos Investigation al tipo de incidente {2}.",
    "Under Mapper (incoming), select {0}.":
      "En Mapper (incoming), seleccione {0}.",
    "Under Mapper (outgoing), select {0}.":
      "En Mapper (outgoing), seleccione {0}.",
    "Visit {0}.":
      "Visite {0}.",
    "When running the {0} command, a refresh token is generated and will be used to produce new access tokens after the current access token has expired.":
      "Al ejecutar el comando {0}, se genera un token de actualización que se utilizará para generar nuevos tokens de acceso después de que caduque el token de acceso actual.",
    "Will need to change the {0} integration parameter to the following query (or a fetch query of their own that uses the `notable` macro):":
      "Será necesario cambiar el parámetro de la integración {0} por la siguiente consulta (o por una consulta de recuperación propia que use la macro `notable`):",
    "You can go to the {0} parameter and select the query to fetch the findings from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "Puede ir al parámetro {0} y seleccionar la consulta para recuperar los findings de Splunk. Asegúrese de proporcionar una consulta que use la macro `notable`. Consulte la consulta predeterminada como ejemplo.",
    "You can go to the {0} parameter and select the query to fetch the notables from Splunk. Make sure to provide a query which uses the `notable` macro, See the default query as an example.":
      "Puede ir al parámetro {0} y seleccionar la consulta para recuperar los notables de Splunk. Asegúrese de proporcionar una consulta que use la macro `notable`. Consulte la consulta predeterminada como ejemplo.",
    "API Access Policy should be configured as global in order to cover all available resources and not just now/table":
      "La política de acceso a la API debe configurarse como global para cubrir todos los recursos disponibles y no solo now/table",
    "Findings scope":
      "Ámbito de Finding",
    "Select Add Site License.":
      "Seleccione Add Site License.",
    "Select the Assets > Site Licenses tab.":
      "Seleccione la pestaña Assets > Site Licenses.",
    "Select the Enable action in Site Licenses.":
      "Seleccione la acción Enable en Site Licenses.",
    "The BotJID in the Chat subscription section on the Features page of your App Dashboard.":
      "El BotJID en la sección Chat subscription de la página Features de su App Dashboard.",
    "Zoom Integration":
      "Integración de Zoom",

    // --- Batch: Integration docs, parameter labels, tooltips and table descriptions (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "Manual Mode":
      "Modo manual",
    "(For Cortex) For use with HTTPS - the certificate that the service should use. (For Cortex and Cortex XSIAM) Custom certificates are not supported.":
      "(Para Cortex) Para uso con HTTPS: el certificado que debe utilizar el servicio. (Para Cortex y Cortex XSIAM) No se admiten certificados personalizados.",
    "(For Cortex) For use with HTTPS - the private key that the service should use. <br> (For Cortex and Cortex XSIAM) When using an engine, configure a private API key. Not supported on the Cortex 8 or Cortex XSIAM server.":
      "(Para Cortex) Para uso con HTTPS: la clave privada que debe utilizar el servicio. <br> (Para Cortex y Cortex XSIAM) Al utilizar un motor, configure una clave de API privada. No se admite en el servidor de Cortex 8 ni de Cortex XSIAM.",
    "(Optional: Add additional request headers in the field “Additional request headers” as key:value pairs, one request header per line)":
      "(Opcional: agregue encabezados de solicitud adicionales en el campo “Additional request headers” como pares clave:valor, un encabezado de solicitud por línea)",
    "(Optional: If you want incidents to be created automatically out of the retrieved data, activate the checkbox “Fetches issues” in the “Collect” section of the setup)":
      "(Opcional: si desea que los incidentes se creen automáticamente a partir de los datos recuperados, active la casilla “Fetches issues” en la sección “Collect” de la configuración)",
    "A comma-separated list of AWS Organization accounts to use when running EC2 commands. A role name for cross-organization account access must be provided to use this feature.":
      "Lista separada por comas de cuentas de AWS Organization que se utilizarán al ejecutar comandos de EC2. Para usar esta función, debe proporcionar un nombre de rol para el acceso a cuentas entre organizaciones.",
    "A successful API call returns status=“success” along with the API key within the key element:":
      "Una llamada a la API correcta devuelve status=“success” junto con la clave de API dentro del elemento key:",
    "Access Type (Impersonation is deprecated as of February 2025)":
      "Tipo de acceso (Impersonation está obsoleto desde febrero de 2025)",
    "Additional request headers":
      "Encabezados de solicitud adicionales",
    "After providing the mandatory details, click Test* to test the configuration.":
      "Después de proporcionar los detalles obligatorios, haga clic en Test* para probar la configuración.",
    "After this time the connection pool will be refreshed":
      "Transcurrido este tiempo, el grupo de conexiones se actualizará",
    "AIOps Authentication:":
      "Autenticación de AIOps:",
    "And one of the following:":
      "Y una de las siguientes:",
    "ANY.RUN API-KEY without prefix":
      "API-KEY de ANY.RUN sin prefijo",
    "API Base URL":
      "URL base de la API",
    "API URL":
      "URL de la API",
    "Authentication method available:":
      "Método de autenticación disponible:",
    "Authentication methods configuration:":
      "Configuración de los métodos de autenticación:",
    "Authorize the API client for the required scopes. You use these scopes in the POST request to the /oauth/token endpoint. The Required Scopes are:":
      "Autorice el cliente de API para los ámbitos necesarios. Utilice estos ámbitos en la solicitud POST al endpoint /oauth/token. Los ámbitos obligatorios son:",
    "Available options:":
      "Opciones disponibles:",
    "AWS Default Region":
      "Región predeterminada de AWS",
    "AWS organization accounts":
      "Cuentas de AWS Organization",
    "Base domain for the ANY.RUN connection. By default, the domain is any.run.":
      "Dominio base para la conexión de ANY.RUN. De forma predeterminada, el dominio es any.run.",
    "Base domain for the ANY.RUN connection. Enter only the domain (e.g. any.run), without a scheme or trailing slash.":
      "Dominio base para la conexión de ANY.RUN. Introduzca solo el dominio (p. ej., any.run), sin esquema ni barra final.",
    "Before configuring this integration, you need:":
      "Antes de configurar esta integración, necesita lo siguiente:",
    "Bot Type Converted to Single-Tenant":
      "Tipo de bot convertido a tenant único",
    "Broker CA certificates":
      "Certificados de CA de Broker",
    "Broker CA certificates (‘brokercerts.crt’ file)":
      "Certificados de CA de Broker (archivo ‘brokercerts.crt’)",
    "Broker CA certificates content (see `brokercerts.crt` in Integration Tips)":
      "Contenido de los certificados de CA de Broker (consulte `brokercerts.crt` en Consejos de integración)",
    "Broker list properties file (‘brokerlist.properties’ file)":
      "Archivo de propiedades de la lista de Broker (archivo ‘brokerlist.properties’)",
    "Broker URLs":
      "URL de Broker",
    "Cache 404 TTL":
      "TTL de caché 404",
    "Cache Default TTL":
      "TTL de caché predeterminado",
    "Caps the number of Darkmon records ingested as incidents per fetch cycle to protect the war room from sudden backlogs.":
      "Limita el número de registros de Darkmon que se ingieren como incidentes en cada ciclo de recuperación para proteger el Warroom de acumulaciones repentinas.",
    "Choose the instance configuration base URL based on the server location:":
      "Elija la URL base de configuración de la instancia según la ubicación del servidor:",
    "Choose the tag to add to an entry to mirror it as a comment in Jira.":
      "Elija la etiqueta que se agregará a una entrada para reflejarla como comentario en Jira.",
    "Choose the tag to add to an entry to mirror it as an attachment in Jira.":
      "Elija la etiqueta que se agregará a una entrada para reflejarla como archivo adjunto en Jira.",
    "Ciphers":
      "Cifrados",
    "Clear, Deep, and Dark Web - tailored to your assets.":
      "Web superficial, profunda y oscura, adaptadas a sus activos.",
    "Click “Add API Client”.":
      "Haga clic en “Add API Client”.",
    "Click “Save”.":
      "Haga clic en “Save”.",
    "Click on “CONNECT CORTEX XSOAR”":
      "Haga clic en “CONNECT CORTEX XSOAR”",
    "Configure a SpecterOps BloodHound Enterprise integration instance by providing the following mandatory details:":
      "Configure una instancia de integración de SpecterOps BloodHound Enterprise proporcionando los siguientes detalles obligatorios:",
    "Configure the instance by providing following mandatory details:":
      "Configure la instancia proporcionando los siguientes detalles obligatorios:",
    "Confirm that the pre-filled URL matches the correct API endpoint for your Anomali ThreatStream instance.":
      "Confirme que la URL rellenada previamente coincide con el endpoint de API correcto de su instancia de Anomali ThreatStream.",
    "Connect to an OAuth provider and create an OAuth application registry by accessing All→System OAuth→Application Registry:":
      "Conéctese a un proveedor de OAuth y cree un registro de aplicaciones OAuth accediendo a All→System OAuth→Application Registry:",
    "Content metadata":
      "Metadatos de contenido",
    "Cortex version 6.0.0 and below:":
      "Cortex versión 6.0.0 y anteriores:",
    "Create an account in Prisma SASE UI:":
      "Cree una cuenta en la interfaz de Prisma SASE:",
    "Create user if does not exist":
      "Crear usuario si no existe",
    "Darkmon incident types to fetch":
      "Tipos de incidentes de Darkmon que se recuperarán",
    "Deprecation Note:":
      "Nota de obsolescencia:",
    "Developer Contributed Integration":
      "Integración aportada por un desarrollador",
    "Device group - Panorama instances only (write shared for Shared location)":
      "Grupo de dispositivos - solo instancias de Panorama (escriba shared para la ubicación compartida)",
    "Domain (used in Multi Domain Server)":
      "Dominio (utilizado en Multi Domain Server)",
    "DOMAIN\\USERNAME (e.g. DEMISTO.INT\\admin)":
      "DOMAIN\\USERNAME (p. ej., DEMISTO.INT\\admin)",
    "Each enriched incident contains the following fields in the incident context:":
      "Cada incidente enriquecido contiene los siguientes campos en el contexto del incidente:",
    "Enable the “Allow Multiple Logins” checkbox for the relevant user.":
      "Habilite la casilla “Allow Multiple Logins” para el usuario correspondiente.",
    "Enable to automatically tag indicators with Analyst1 entity type classifications (e.g., \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\"). Tags help identify how Analyst1 classifies each indicator.":
      "Habilite esta opción para etiquetar automáticamente los indicadores con las clasificaciones de tipo de entidad de Analyst1 (p. ej., \"Analyst1: Indicator\", \"Analyst1: Asset\", \"Analyst1: In Private Range\"). Las etiquetas ayudan a identificar cómo clasifica Analyst1 cada indicador.",
    "Exchange Server Hostname or IP address":
      "Nombre de host o dirección IP del servidor Exchange",
    "Exchange Server Version (On-Premise only. Supported versions: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016, and 2019)":
      "Versión de Exchange Server (solo local. Versiones compatibles: 2007, 2010, 2010_SP2, 2013, 2013_SP1, 2016 y 2019)",
    "Fetch attachments for a Jira ticket.":
      "Recupera los archivos adjuntos de un ticket de Jira.",
    "Fetch comments for a Jira ticket.":
      "Recupera los comentarios de un ticket de Jira.",
    "Fetch incidents only for devices with the device families selected":
      "Recupera incidentes solo de los dispositivos con las familias de dispositivos seleccionadas",
    "Fetch incidents only for devices with the tags selected":
      "Recupera incidentes solo de los dispositivos con las etiquetas seleccionadas",
    "Fetch incidents:":
      "Recuperación de incidentes:",
    "Fetch Incidents:":
      "Recuperación de incidentes:",
    "Filter the Detections by “Create Incidents for Prioritized Detections”, “Create Incidents for Escalated Detections”:":
      "Filtre las detecciones por “Create Incidents for Prioritized Detections” y “Create Incidents for Escalated Detections”:",
    "Finding Environment":
      "Entorno de la detección",
    "First fetch query time range when starting from a clean state. Accepts ISO timestamps or relative durations (e.g. \"3 days\", \"12 hours\").":
      "Intervalo de tiempo de la consulta de la primera recuperación al comenzar desde un estado limpio. Acepta marcas de tiempo ISO o duraciones relativas (p. ej., \"3 days\", \"12 hours\").",
    "Following new fields are introduced in the response of the incident to enable the mirroring:":
      "Se han introducido los siguientes campos nuevos en la respuesta del incidente para habilitar el reflejo:",
    "For detailed instructions, refer to the official Splunk documentation:":
      "Para obtener instrucciones detalladas, consulte la documentación oficial de Splunk:",
    "For example:":
      "Por ejemplo:",
    "For the OAuth method:":
      "Para el método OAuth:",
    "For the URL argument, take a look here:":
      "Para el argumento URL, consulte aquí:",
    "For VMware Carbon Black EDR:":
      "Para VMware Carbon Black EDR:",
    "For VMware Carbon Black Endpoint Standard:":
      "Para VMware Carbon Black Endpoint Standard:",
    "Format: server.analyst1.com (do not include http:// or https://)":
      "Formato: server.analyst1.com (no incluya http:// ni https://)",
    "Gather additional information about the threat model from remote APIs.":
      "Recopile información adicional sobre el modelo de amenazas desde API remotas.",
    "Generate API token":
      "Generar un token de API",
    "Get an API key":
      "Obtener una clave de API",
    "Go to classifier":
      "Ir al clasificador",
    "Go to incoming mapper":
      "Ir al asignador entrante",
    "If MFA is enabled for your user, follow the next steps:":
      "Si la MFA está habilitada para su usuario, siga estos pasos:",
    "If MFA is enabled for your user, perform the following steps:":
      "Si la MFA está habilitada para su usuario, realice los siguientes pasos:",
    "If set to false, iam-create-user command will be skipped, and user will not be created.":
      "Si se establece en false, se omitirá el comando iam-create-user y no se creará el usuario.",
    "If the connection test was successful, click “Save & Exit”":
      "Si la prueba de conexión se realizó correctamente, haga clic en “Guardar y salir”",
    "If this parameter is given, the commands will run with the UPN mailbox instead of the default target mailbox.":
      "Si se proporciona este parámetro, los comandos se ejecutarán con el buzón UPN en lugar del buzón de destino predeterminado.",
    "If true, the user is created if the user profile doesn't exist in AD. Used in IAM commands only.":
      "Si es true, el usuario se crea si el perfil de usuario no existe en AD. Se utiliza solo en comandos IAM.",
    "In order to connect to Microsoft Graph Services using either Cortex Azure App or the Self-Deployed Azure App:":
      "Para conectarse a Microsoft Graph Services mediante Cortex Azure App o Self-Deployed Azure App:",
    "In order to create an instance of the Microsoft Teams Webhook in Cortex, complete the following:":
      "Para crear una instancia de Microsoft Teams Webhook en Cortex, complete lo siguiente:",
    "In order to create the API Key go to:":
      "Para crear la clave de API, vaya a:",
    "In order to use multiple values for the same filter and get alerts that have one of the values, state them several time, for example:":
      "Para utilizar varios valores para el mismo filtro y obtener alertas que tengan uno de los valores, indíquelos varias veces, por ejemplo:",
    "In Terraform Enterprise:":
      "En Terraform Enterprise:",
    "In the Azure Application you created give the following application permission:":
      "En la aplicación de Azure que creó, otorgue el siguiente permiso de aplicación:",
    "In the Cortex Xsoar configuration window:":
      "En la ventana de configuración de Cortex Xsoar:",
    "In the Silent Push Profile menu, click Organization, and go to the API tab.":
      "En el menú Profile de Silent Push, haga clic en Organization y vaya a la pestaña API.",
    "Joe Security Url":
      "URL de Joe Security",
    "Log in to your Zoom admin user account, and follow these steps:":
      "Inicie sesión en su cuenta de usuario administrador de Zoom y siga estos pasos:",
    "Make sure you have the following parameters:":
      "Asegúrese de tener los siguientes parámetros:",
    "Max concurrent command calls":
      "Máximo de llamadas de comandos simultáneas",
    "Max. Polling Time (in seconds):":
      "Tiempo máximo de sondeo (en segundos):",
    "Maximum number of incidents per fetch. The default value is 200.":
      "Número máximo de incidentes por recuperación. El valor predeterminado es 200.",
    "More information about National clouds can be found here - https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud":
      "Encontrará más información sobre las nubes nacionales aquí: https://xsoar.pan.dev/docs/reference/articles/microsoft-integrations---authentication#using-national-cloud",
    "Navigate to one of the following:":
      "Vaya a una de las siguientes opciones:",
    "Navigate to User Settings. (Vertical ellipsis available on the top right corner).":
      "Vaya a User Settings (los puntos suspensivos verticales están disponibles en la esquina superior derecha).",
    "Next, you need to extract the private.key. You can do this using the following commands:":
      "A continuación, debe extraer private.key. Puede hacerlo con los siguientes comandos:",
    "NGINX Global Directives":
      "Directivas globales de NGINX",
    "NGINX global directives to be passed on the command line using the -g option. Each directive should end with `;`. For example: `worker_processes 4; timer_resolution 100ms;`. Advanced configuration to be used only if instructed by Cortex Support.":
      "Directivas globales de NGINX que se pasan en la línea de comandos mediante la opción -g. Cada directiva debe terminar con `;`. Por ejemplo: `worker_processes 4; timer_resolution 100ms;`. Configuración avanzada que debe utilizarse únicamente si lo indica el soporte de Cortex.",
    "NGINX Read Timeout":
      "Tiempo de espera de lectura de NGINX",
    "NGINX Server Conf":
      "Configuración del servidor NGINX",
    "NGINX server configuration to be used instead of the default NGINX_SERVER_CONF used in the integration code. Advanced configuration to be used only if instructed by Cortex Support.":
      "Configuración del servidor NGINX que se utilizará en lugar de NGINX_SERVER_CONF, el valor predeterminado utilizado en el código de la integración. Configuración avanzada que debe utilizarse únicamente si lo indica el soporte de Cortex.",
    "NGNIX read timeout in seconds.":
      "Tiempo de espera de lectura de NGINX en segundos.",
    "NTLM authentication":
      "Autenticación NTLM",
    "OAuth2 Client Credentials":
      "Credenciales de cliente de OAuth2",
    "Override Authentication Type (NTLM, Basic, or Digest).":
      "Anular el tipo de autenticación (NTLM, Basic o Digest).",
    "Override the Darkmon TIP API base URL only if your tenant points at a non-default endpoint. The default value already targets the production Darkmon TIP service (https://api.darkmon.com/tip/2025.1). Leave blank to use the default.":
      "Anule la URL base de la API de Darkmon TIP solo si su tenant apunta a un endpoint distinto del predeterminado. El valor predeterminado ya apunta al servicio Darkmon TIP de producción (https://api.darkmon.com/tip/2025.1). Déjelo en blanco para usar el valor predeterminado.",
    "Panorama / Pan-OS Authentication:":
      "Autenticación de Panorama / Pan-OS:",
    "Panorama: Configure a device group":
      "Panorama: configurar un grupo de dispositivos",
    "Paste the API key into the settings of this integration in the field “API Key”":
      "Pegue la clave de API en la configuración de esta integración, en el campo “API Key”.",
    "Port is optional (e.g https://sonar.example.com:9000)":
      "El puerto es opcional (p. ej., https://sonar.example.com:9000)",
    "Post to a channel when a webhook request is received":
      "Publicar en un canal cuando se recibe una solicitud de webhook",
    "PrivateLink service URL.":
      "URL del servicio PrivateLink.",
    "Product version id":
      "ID de la versión del producto",
    "Product versions name":
      "Nombre de las versiones del producto",
    "Production vs development":
      "Producción frente a desarrollo",
    "Products id":
      "ID de los productos",
    "Products name":
      "Nombre de los productos",
    "Public Folder":
      "Carpeta pública",
    "Redact secrets in War Room output":
      "Ocultar secretos en la salida de War Room",
    "Required Permissions:":
      "Permisos necesarios:",
    "Requited. Not relevant for deprecated GSuite Apps setup - see Help section":
      "Obligatorio. No es relevante para la configuración obsoleta de GSuite Apps; consulte la sección de ayuda.",
    "Result name":
      "Nombre del resultado",
    "Result short name":
      "Nombre corto del resultado",
    "Result vendor url (only human readable)":
      "URL del proveedor del resultado (solo legible por humanos)",
    "Retries":
      "Reintentos",
    "Role name for cross-organization account access":
      "Nombre del rol para el acceso a cuentas entre organizaciones",
    "Role Session Duration":
      "Duración de la sesión del rol",
    "Run as a separate process (protects against memory depletion)":
      "Ejecutar como un proceso independiente (protege contra el agotamiento de la memoria)",
    "Search query for fetching alerts. The default fetch query is \"alert\".":
      "Consulta de búsqueda para recuperar alertas. La consulta de recuperación predeterminada es \"alert\".",
    "Select Fetches incidents.":
      "Seleccione Fetches incidents.",
    "Select how to authenticate with the Analyst1 API. Basic Authentication uses username/password. OAuth2 uses client_id/client_secret from an API Key.":
      "Seleccione cómo autenticarse con la API de Analyst1. La autenticación básica utiliza nombre de usuario y contraseña. OAuth2 utiliza client_id/client_secret de una clave de API.",
    "Select the authentication method.":
      "Seleccione el método de autenticación.",
    "Select the Incident Mirroring Direction:":
      "Seleccione la dirección de reflejo de incidentes:",
    "Select this checkbox if you are using a US Government cloud account.":
      "Seleccione esta casilla si utiliza una cuenta de nube del gobierno de EE. UU.",
    "Server port. If not specified, the default port is 389 for LDAP, 636 for LDAPS, or 3268 for global catalog servers.":
      "Puerto del servidor. Si no se especifica, el puerto predeterminado es 389 para LDAP, 636 para LDAPS o 3268 para los servidores de catálogo global.",
    "SSL Version":
      "Versión de SSL",
    "Start fetching incidents from the specified time.":
      "Comience a recuperar incidentes a partir de la hora especificada.",
    "STS PrivateLink URL.":
      "URL de PrivateLink de STS.",
    "STS Region":
      "Región de STS",
    "Supported authentication methods:":
      "Métodos de autenticación admitidos:",
    "The account identifier can be found using the user blade at the bottom left. Hover over the account you wish to onboard and select the copy option at the top right.":
      "El identificador de la cuenta se puede encontrar en el panel de usuario, en la parte inferior izquierda. Pase el cursor sobre la cuenta que desea incorporar y seleccione la opción de copiar en la parte superior derecha.",
    "The account identifier is usually of the format: [organization].[account]":
      "El identificador de la cuenta suele tener el formato [organization].[account].",
    "The API key must be entitled to the endpoints backing the commands you intend to run:":
      "La clave de API debe tener permisos para los endpoints en los que se basan los comandos que desea ejecutar:",
    "The AWS region used to create the STS client. Set this explicitly when STS calls must target a fixed region regardless of the command's target region.":
      "La región de AWS utilizada para crear el cliente de STS. Configúrela de forma explícita cuando las llamadas a STS deban dirigirse a una región fija, independientemente de la región de destino del comando.",
    "The base URL. For a cloud instance, use the default URL as configured. For an OnPrem instance, use your respective domain.":
      "La URL base. Para una instancia en la nube, utilice la URL predeterminada configurada. Para una instancia local (OnPrem), utilice su dominio correspondiente.",
    "The default Kibana space ID to use for es-kibana-* commands. Used to derive the Kibana base URL from the Server URL. If a space_id argument is provided to a command, it overrides this value. See https://www.elastic.co/docs/deploy-manage/manage-spaces for more information.":
      "El ID de espacio de Kibana predeterminado que se usará para los comandos es-kibana-*. Se utiliza para derivar la URL base de Kibana a partir de la URL del servidor. Si se proporciona un argumento space_id a un comando, este reemplaza dicho valor. Consulte https://www.elastic.co/docs/deploy-manage/manage-spaces para obtener más información.",
    "The default TTL for responses in the cache.":
      "El TTL predeterminado de las respuestas en la caché.",
    "The field selected in the \"Issue Field to fetch by\" can't be used in the query.":
      "El campo seleccionado en \"Issue Field to fetch by\" no se puede utilizar en la consulta.",
    "The following are the required managed modules for this integration:":
      "Los siguientes son los módulos administrados necesarios para esta integración:",
    "The following commands require the API access to be configured:":
      "Los siguientes comandos requieren que se configure el acceso a la API:",
    "The following commands require the SSH access to be configured:":
      "Los siguientes comandos requieren que se configure el acceso SSH:",
    "The following scopes are required for the Okta v2 integration to work properly:":
      "Se requieren los siguientes ámbitos para que la integración Okta v2 funcione correctamente:",
    "The incidents are fetched according to a number of different optional log type queries. The log types are:":
      "Los incidentes se recuperan según varias consultas opcionales de tipo de registro. Los tipos de registro son:",
    "The integration supports three types of authorization:":
      "La integración admite tres tipos de autorización:",
    "The integration supports two types of authorization:":
      "La integración admite dos tipos de autorización:",
    "The integration uses the supplied username and password to obtain a bearer token from Elasticsearch via the Get token API. Before using Bearer Authentication, ensure the token service is enabled on your Elasticsearch cluster:":
      "La integración utiliza el nombre de usuario y la contraseña proporcionados para obtener un token de portador de Elasticsearch mediante la API Get token. Antes de usar la autenticación Bearer, asegúrese de que el servicio de tokens esté habilitado en su clúster de Elasticsearch:",
    "The Kibana server used by the es-kibana-* commands and by fetching and mirroring security alerts and cases. Required for on-premises (self-managed) deployments, where Kibana is usually hosted separately from Elasticsearch (for example, https://kibana.example.com:5601). If left empty, the Kibana URL is derived from the Server URL, which is supported only for Elastic Cloud deployments whose hostname contains \".es.\" (the segment is replaced with \".kb.\").":
      "El servidor de Kibana utilizado por los comandos es-kibana-* y por la recuperación y el reflejo de alertas y casos de seguridad. Es obligatorio para implementaciones locales (autoadministradas), donde Kibana suele alojarse por separado de Elasticsearch (por ejemplo, https://kibana.example.com:5601). Si se deja vacío, la URL de Kibana se deriva de la URL del servidor, lo cual solo se admite en implementaciones de Elastic Cloud cuyo nombre de host contenga \".es.\" (el segmento se reemplaza por \".kb.\").",
    "The maximum allowed value is dictated by the Jira property 'jira.search.views.default.max'. If you specify a value that is higher than this number, your search results will be truncated. Default value is 50":
      "El valor máximo permitido lo determina la propiedad de Jira 'jira.search.views.default.max'. Si especifica un valor superior a este número, los resultados de la búsqueda se truncarán. El valor predeterminado es 50.",
    "The maximum number of concurrent calls to allow when running a command on all accounts provided in \"AWS Organization accounts to access\".":
      "El número máximo de llamadas simultáneas permitidas al ejecutar un comando en todas las cuentas proporcionadas en \"AWS Organization accounts to access\".",
    "The maximum number of retry attempts when connection or throttling errors are encountered. Set to 0 to disable retries. The default value is 5 and the limit is 10. Note: Increasing the number of retries will increase the execution time.":
      "El número máximo de reintentos cuando se producen errores de conexión o de limitación. Establezca 0 para deshabilitar los reintentos. El valor predeterminado es 5 y el límite es 10. Nota: aumentar el número de reintentos incrementará el tiempo de ejecución.",
    "The parameter can be saved as 000-000 and added as an argument to each command, but Test button will fail.":
      "El parámetro se puede guardar como 000-000 y agregar como argumento a cada comando, pero el botón Test fallará.",
    "The parameter can be saved as 000-000 and added as an argument to each command.":
      "El parámetro se puede guardar como 000-000 y agregar como argumento a cada comando.",
    "The role name used to access accounts in the organization. This role name must exist in the accounts provided in \"AWS Organization accounts\" and be assumable with the credentials provided.":
      "El nombre del rol utilizado para acceder a las cuentas de la organización. Este nombre de rol debe existir en las cuentas proporcionadas en \"AWS Organization accounts\" y poder asumirse con las credenciales proporcionadas.",
    "The SSL\\TLS version to use in SSL or Start TLS connections types. Default is None. It is recommended to select the TLS_CLIENT option, which auto-negotiate the highest protocol version that both the client and server support, and configure the context client-side connections.":
      "La versión de SSL\\TLS que se utilizará en los tipos de conexión SSL o Start TLS. El valor predeterminado es None. Se recomienda seleccionar la opción TLS_CLIENT, que negocia automáticamente la versión de protocolo más alta admitida tanto por el cliente como por el servidor y configura el contexto de las conexiones del lado del cliente.",
    "The time in seconds till a timeout exception is reached. You can specify just the read timeout (for example 60) or also the connect timeout followed after a comma (for example 60,10). If a connect timeout is not specified, a default of 10 second will be used.":
      "El tiempo en segundos hasta que se produce una excepción de tiempo de espera. Puede especificar solo el tiempo de espera de lectura (por ejemplo, 60) o también el tiempo de espera de conexión, separado por una coma (por ejemplo, 60,10). Si no se especifica un tiempo de espera de conexión, se utilizará el valor predeterminado de 10 segundos.",
    "The time range to consider for the initial data fetch in format: <number> <unit>. This parameter is only relevant when selecting to fetch by created time, or updated time. Default is 3 days. For example: 2 minutes, 2 hours, 2 days, 2 months, 2 years":
      "El intervalo de tiempo que se considerará para la recuperación inicial de datos, en el formato: <number> <unit>. Este parámetro solo es relevante al seleccionar la recuperación por hora de creación o de actualización. El valor predeterminado es 3 días. Por ejemplo: 2 minutes, 2 hours, 2 days, 2 months, 2 years",
    "The TTL for 404 responses in the cache.":
      "El TTL de las respuestas 404 en la caché.",
    "There are three ways to authenticate to the Microsoft Graph Services:":
      "Hay tres formas de autenticarse en los servicios de Microsoft Graph:",
    "There is only one application authentication method available:":
      "Solo hay un método de autenticación de aplicación disponible:",
    "These parameters support the following integration commands:":
      "Estos parámetros admiten los siguientes comandos de integración:",
    "This field is ignored if other required fields are not provided (for example both the access token and the private key).":
      "Este campo se ignora si no se proporcionan otros campos obligatorios (por ejemplo, tanto el token de acceso como la clave privada).",
    "This field is used to configure the Jira Cloud.":
      "Este campo se utiliza para configurar Jira Cloud.",
    "This integration supports sending messages to additional Teams via a workflow. There are 2 methods for this:":
      "Esta integración admite el envío de mensajes a Teams adicionales mediante un flujo de trabajo. Hay 2 métodos para hacerlo:",
    "This integration supports three authentication methods:":
      "Esta integración admite tres métodos de autenticación:",
    "This integration supports two authentication methods:":
      "Esta integración admite dos métodos de autenticación:",
    "This is how the field (e.g, created date) is applied to the query: created >= {created date in last run} ORDER BY created ASC":
      "Así se aplica el campo (p. ej., fecha de creación) a la consulta: created >= {created date in last run} ORDER BY created ASC",
    "This parameter is dismissed if \"id\" is not chosen in \"Issue Field to Fetch by\". This will only fetch Jira issues that are part of the same project as the issue that is configured in this parameter. If this value is 0, then the fetch mechanism will automatically start the fetch from the smallest ID with respect to the fetch query.":
      "Este parámetro se ignora si no se selecciona \"id\" en \"Issue Field to Fetch by\". Solo recuperará las incidencias de Jira que formen parte del mismo proyecto que la incidencia configurada en este parámetro. Si este valor es 0, el mecanismo de recuperación iniciará automáticamente la recuperación desde el ID más pequeño según la consulta de recuperación.",
    "This parameter is dismissed while \"Use created field to fetch incidents\" is checked.":
      "Este parámetro se ignora mientras \"Use created field to fetch incidents\" esté seleccionado.",
    "This section explains how to configure the instance of ANY.RUN TI Lookup in Cortex.":
      "Esta sección explica cómo configurar la instancia de ANY.RUN TI Lookup en Cortex.",
    "This token is used for both OAuth 1.0 and personal access token authentication methods.":
      "Este token se utiliza tanto para OAuth 1.0 como para los métodos de autenticación con token de acceso personal.",
    "This will be in the following format: https://customer-portal.asimily.com.":
      "Tendrá el siguiente formato: https://customer-portal.asimily.com.",
    "TIM customers that upgraded to version 6.2 or above, can have this value pre-configured in their main account so no additional input is needed. To use this feature, upgrade your license so it includes the license key.":
      "Los clientes de TIM que hayan actualizado a la versión 6.2 o posterior pueden tener este valor preconfigurado en su cuenta principal, por lo que no se necesita ninguna entrada adicional. Para usar esta función, actualice su licencia para que incluya la clave de licencia.",
    "Timeout (in seconds) for HTTP requests to Exchange Server":
      "Tiempo de espera (en segundos) de las solicitudes HTTP a Exchange Server",
    "To configure the integration, you’ll need:":
      "Para configurar la integración, necesitará:",
    "To configure the integration:":
      "Para configurar la integración:",
    "To configure this integration, you will need:":
      "Para configurar esta integración, necesitará:",
    "To connect to the Microsoft Defender XDR:":
      "Para conectarse a Microsoft Defender XDR:",
    "To create an API key in Kibana:":
      "Para crear una clave de API en Kibana:",
    "To create an instance of the Microsoft Teams integration in Cortex, complete the following:":
      "Para crear una instancia de la integración de Microsoft Teams en Cortex, complete lo siguiente:",
    "To enable asset fetching:":
      "Para habilitar la recuperación de activos:",
    "To fetch Vectra RUX Events Detections follow the next steps:":
      "Para recuperar Vectra RUX Events Detections, siga estos pasos:",
    "To generate an API key, make a POST request to the firewall’s hostname or IP addresses using the administrative credentials and type=keygen:":
      "Para generar una clave de API, realice una solicitud POST al nombre de host o a las direcciones IP del firewall utilizando las credenciales de administrador y type=keygen:",
    "To generate the files needed for SSL, you will need to create a Kafka client keystore. You can use the script at:":
      "Para generar los archivos necesarios para SSL, deberá crear un almacén de claves de cliente de Kafka. Puede utilizar el script que se encuentra en:",
    "To get your Vectra Client ID and Client Secret Key, follow these steps:":
      "Para obtener su ID de cliente y su clave secreta de cliente de Vectra, siga estos pasos:",
    "To learn more about Zendesk roles refer to:":
      "Para obtener más información sobre los roles de Zendesk, consulte:",
    "To obtain an API key, run the following CURL command and copy the key:":
      "Para obtener una clave de API, ejecute el siguiente comando CURL y copie la clave:",
    "To reduce the number of lookups made to the AbuseIPDB API, this option can be selected to gracefully skip enrichment of any IP addresses allocated for private networks.":
      "Para reducir el número de búsquedas realizadas a la API de AbuseIPDB, se puede seleccionar esta opción para omitir sin problemas el enriquecimiento de las direcciones IP asignadas a redes privadas.",
    "To set up mirroring:":
      "Para configurar el reflejo:",
    "To use OAuth 2.0 authorization follow the next steps:":
      "Para usar la autorización OAuth 2.0, siga estos pasos:",
    "To use OAuth 2.0 authorization perform the following steps:":
      "Para usar la autorización OAuth 2.0, realice los siguientes pasos:",
    "To use Splunk token authentication, enter the text:":
      "Para usar la autenticación con token de Splunk, introduzca el texto:",
    "To use the mattermost integration:":
      "Para usar la integración de mattermost:",
    "Troubleshooting: Override Agent (Advanced)":
      "Solución de problemas: Override Agent (avanzado)",
    "Two application authentication methods are available:":
      "Hay dos métodos de autenticación de aplicación disponibles:",
    "URL of the Hatching service will be either:":
      "La URL del servicio Hatching será una de las siguientes:",
    "Use the \"API Token (Recommended)\" parameter instead.":
      "Utilice en su lugar el parámetro \"API Token (Recommended)\".",
    "Use the Akamai WAF integration to manage common sets of lists used by various Akamai security products and features.":
      "Utilice la integración de Akamai WAF para administrar conjuntos comunes de listas utilizados por diversos productos y funciones de seguridad de Akamai.",
    "Use the following account credentials to get an access token:":
      "Utilice las siguientes credenciales de cuenta para obtener un token de acceso:",
    "Use the SplunkPy v2 integration to:":
      "Utilice la integración SplunkPy v2 para:",
    "Used in the IAM commands.":
      "Se utiliza en los comandos de IAM.",
    "Used to impersonate a Google workspace user, so the spreadsheets is created in the associated Google Drive and is easily accessible from a UI. This parameter is used during the authentication process.":
      "Se utiliza para suplantar a un usuario de Google Workspace, de modo que las hojas de cálculo se creen en el Google Drive asociado y sean fácilmente accesibles desde la interfaz de usuario. Este parámetro se utiliza durante el proceso de autenticación.",
    "Users who wish to enrich or mirror fetched notables and have already used the integration in the past:":
      "Usuarios que desean enriquecer o reflejar notables recuperados y que ya han utilizado la integración anteriormente:",
    "Verify base DN on every command":
      "Verificar el DN base en cada comando",
    "Version id":
      "ID de versión",
    "Version name":
      "Nombre de la versión",
    "Vulnerability description (only human readable)":
      "Descripción de la vulnerabilidad (solo legible por humanos)",
    "Vulnerability discovery date":
      "Fecha de descubrimiento de la vulnerabilidad",
    "Vulnerability keywords":
      "Palabras clave de la vulnerabilidad",
    "Vulnerability published date":
      "Fecha de publicación de la vulnerabilidad",
    "Vulnerability solution (only human readable)":
      "Solución de la vulnerabilidad (solo legible por humanos)",
    "Vulnerability solution date":
      "Fecha de la solución de la vulnerabilidad",
    "Vulnerability title (only human readable)":
      "Título de la vulnerabilidad (solo legible por humanos)",
    "What is the top level object to search in (usually a project or organization in format of organization/XX).":
      "El objeto de nivel superior en el que buscar (normalmente un proyecto u organización con el formato organization/XX).",
    "What you get":
      "Qué obtiene",
    "When enabled, replaces password/card-number values in markdown table output with '***'. Raw values remain in rawJSON for playbook automation. Disable only in non-production debugging contexts.":
      "Si se habilita, reemplaza los valores de contraseña/número de tarjeta en la salida de tablas markdown por '***'. Los valores sin procesar permanecen en rawJSON para la automatización de playbooks. Deshabilite esta opción solo en contextos de depuración que no sean de producción.",
    "Which Darkmon record kinds the integration ingests as XSOAR incidents. Defaults to the high-signal trio. Lower-signal kinds (e.g. Ransomware Mention) are typically better handled via the monitoring playbooks rather than native fetch.":
      "Los tipos de registros de Darkmon que la integración incorpora como incidentes de XSOAR. De forma predeterminada, son los tres de mayor señal. Los tipos de menor señal (p. ej., Ransomware Mention) suelen gestionarse mejor mediante los playbooks de supervisión que mediante la recuperación nativa.",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Critical\".":
      "Veredicto de XSOAR que se establece cuando Analyst1 Risk Score es \"Critical\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"High\".":
      "Veredicto de XSOAR que se establece cuando Analyst1 Risk Score es \"High\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Low\".":
      "Veredicto de XSOAR que se establece cuando Analyst1 Risk Score es \"Low\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Lowest\".":
      "Veredicto de XSOAR que se establece cuando Analyst1 Risk Score es \"Lowest\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Moderate\".":
      "Veredicto de XSOAR que se establece cuando Analyst1 Risk Score es \"Moderate\".",
    "XSOAR Verdict to set when Analyst1 Risk Score is \"Unknown\" or not present.":
      "Veredicto de XSOAR que se establece cuando Analyst1 Risk Score es \"Unknown\" o no está presente.",
    "BaseUrl - API url":
      "BaseUrl - URL de la API",
    "SPLUNK user key":
      "Clave de usuario de Splunk",
    "IP values related to the offense are returned from the API as ID values. Enable this parameter the IDs to IP values.":
      "Los valores de IP relacionados con el delito se devuelven desde la API como valores de ID. Habilite este parámetro para convertir los ID en valores de IP.",

    // --- Batch: Integration docs as joined sentences (06:04 export, Collector 0.2.0 full re-collection) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "(Optional) Add a {0}.":
      "(Opcional) Agregue {0}.",
    "(Optional) If no API token is displayed, click the {0} button to create a new one.":
      "(Opcional) Si no se muestra ningún token de API, haga clic en el botón {0} para crear uno nuevo.",
    "(Optional) Test the created integration instance by running the {0} command.":
      "(Opcional) Pruebe la instancia de integración creada ejecutando el comando {0}.",
    "(Recommended) Enter the ServiceNow account {0} and {1} in the integration instance configuration. The integration will then automatically perform the initial OAuth login on first use and will automatically renew the refresh token when it expires.":
      "(Recomendado) Introduzca {0} y {1} de la cuenta de ServiceNow en la configuración de la instancia de integración. A continuación, la integración realizará automáticamente el inicio de sesión inicial de OAuth en el primer uso y renovará automáticamente el token de actualización cuando caduque.",
    "{0} - Available under PingOne Dashboard → Environment Properties.":
      "{0} - Disponible en PingOne Dashboard → Environment Properties.",
    "{0} - Each Microsoft Graph Security alert is fetched individually.":
      "{0} - Cada alerta de Microsoft Graph Security se recupera individualmente.",
    "{0} - Each Microsoft Graph Security incident is fetched individually, with all associated alerts embedded within it and stored as raw JSON. This provides a single grouped incident containing its underlying alerts, rather than multiple separate alerts.":
      "{0} - Cada incidente de Microsoft Graph Security se recupera individualmente, con todas las alertas asociadas incrustadas en él, y se almacena como JSON sin procesar. Esto proporciona un único incidente agrupado que contiene sus alertas subyacentes, en lugar de varias alertas independientes.",
    "{0} - fully dynamic over every Darkmon data type, future-proof for new feature types added to the platform.":
      "{0} - totalmente dinámica sobre todos los tipos de datos de Darkmon y preparada para los nuevos tipos de funciones que se añadan a la plataforma.",
    "{0} - list protected emails and pull every leak associated with each.":
      "{0} - enumera los correos electrónicos protegidos y obtiene todas las filtraciones asociadas a cada uno.",
    "{0} - OAuth credentials for API access.":
      "{0} - Credenciales de OAuth para el acceso a la API.",
    "{0} - Select your PingOne region (US, EU, or Asia).":
      "{0} - Seleccione su región de PingOne (US, EU o Asia).",
    "{0} — NGFW or WildFire API.":
      "{0} — API de NGFW o WildFire.",
    "{0} — Retrieve a paginated list of all CVEs monitored by ThreatMon.":
      "{0} — Recupera una lista paginada de todos los CVE supervisados por ThreatMon.",
    "{0} — Retrieve CVEs affecting products the company is subscribed to.":
      "{0} — Recupera los CVE que afectan a los productos a los que está suscrita la empresa.",
    "{0} — Submit a Black Market Monitoring data removal request for a specific finding.":
      "{0} — Envía una solicitud de eliminación de datos de Black Market Monitoring para un hallazgo específico.",
    "{0} — Submit a takedown request for an eligible Threatmon finding.":
      "{0} — Envía una solicitud de retirada para un hallazgo de Threatmon elegible.",
    "{0} — the base URL of the Tenzai API (e.g. {1}).":
      "{0} — la URL base de la API de Tenzai (p. ej., {1}).",
    "{0} — the Tenzai partner API key from the step above.":
      "{0} — la clave de API de partner de Tenzai obtenida en el paso anterior.",
    "{0} — Update the status of a specific Threatmon incident using its unique ID.":
      "{0} — Actualiza el estado de un incidente específico de Threatmon mediante su ID único.",
    "{0} — XSOAR TIM API Key.":
      "{0} — Clave de API de XSOAR TIM.",
    "{0} (articles + company-specific mentions).":
      "{0} (artículos y menciones específicas de la empresa).",
    "{0} (CVE feed with CVSS, exploitation status, source identifier).":
      "{0} (feed de CVE con CVSS, estado de explotación e identificador de origen).",
    "{0} (Recommended).":
      "{0} (recomendado).",
    "{0} always uses {1}. If {2} is configured. The integration will authenticate using {3} when the command is called. This should have no effect on other commands.":
      "{0} siempre utiliza {1}. Si {2} está configurado. La integración se autenticará mediante {3} cuando se llame al comando. Esto no debería afectar a otros comandos.",
    "{0} and {1}":
      "{0} y {1}",
    "{0} and {1}.":
      "{0} y {1}.",
    "{0} and follow the instructions to create an OAuth client":
      "{0} y siga las instrucciones para crear un cliente OAuth",
    "{0} and replace the {1} in the URL with {2}.":
      "{0} y reemplace {1} en la URL por {2}.",
    "{0} Choose the {1} for fetching attack paths (Default is 10 mins).":
      "{0} Elija {1} para recuperar las rutas de ataque (el valor predeterminado es 10 min).",
    "{0} discovery (leaked accounts, bank cards, combo lists, public breaches, compromised employee accounts).":
      "Descubrimiento de {0} (cuentas filtradas, tarjetas bancarias, listas combo, filtraciones públicas, cuentas de empleados comprometidas).",
    "{0} Do not enable {1} on the same instance. Configure one instance for the long-running Spotlight fetch, and a separate instance for the regular assets fetch.":
      "{0} No habilite {1} en la misma instancia. Configure una instancia para la recuperación de Spotlight de larga duración y otra instancia independiente para la recuperación de activos normal.",
    "{0} for IPs, domains, URLs, file hashes, and emails, with first-class {1} + {2} outputs.":
      "{0} para IP, dominios, URL, hashes de archivos y correos electrónicos, con salidas {1} + {2} de primer nivel.",
    "{0} For support, please contact the Threatmon team at: {1}":
      "{0} Para obtener soporte, póngase en contacto con el equipo de Threatmon en: {1}",
    "{0} If you are using the integration to rasterize un-trusted URLs or HTML content, such as those obtained via external emails, we recommend following the instructions at the {1} or {2} or {3} under the Block Internal Network Access section.":
      "{0} Si utiliza la integración para rasterizar URL o contenido HTML no confiables, como los obtenidos a través de correos electrónicos externos, le recomendamos seguir las instrucciones de {1}, {2} o {3} en la sección Block Internal Network Access.",
    "{0} ingestion into Cortex Threat Intel Management.":
      "Ingesta de {0} en Cortex Threat Intel Management.",
    "{0} is deprecated. Use the {1}integration instead.":
      "{0} está obsoleto. Utilice en su lugar la integración {1}.",
    "{0} Optionally, you can choose {1} type and use the {2} and {3} fields to enter the API key ID and API key.":
      "{0} Opcionalmente, puede elegir el tipo {1} y usar los campos {2} y {3} para introducir el ID de clave de API y la clave de API.",
    "{0} supports {1} only when retrieving messages from a channel. Retrieving messages from a chat requires {2}.":
      "{0} solo admite {1} al recuperar mensajes de un canal. Para recuperar mensajes de un chat se requiere {2}.",
    "{0} The {1} option is deprecated. No available replacement.":
      "{0} La opción {1} está obsoleta. No hay ningún reemplazo disponible.",
    "{0} The {1} selection is ignored in this mode, and CNAPP Alerts are not collected. To collect CNAPP Alerts, use a separate instance with the regular assets fetch.":
      "{0} En este modo se ignora la selección de {1} y no se recopilan alertas de CNAPP. Para recopilar alertas de CNAPP, utilice una instancia independiente con la recuperación de activos normal.",
    "{0} This is a beta Integration that has been deprecated. The Integration uses an unsupported scraping API. We do not recommend using this integration in production environments. Some commands may not work as expected. Use the {1} Integration instead.":
      "{0} Esta es una integración beta que ha quedado obsoleta. La integración utiliza una API de scraping no compatible. No se recomienda usar esta integración en entornos de producción. Es posible que algunos comandos no funcionen como se espera. Utilice en su lugar la integración {1}.",
    "{0} to the service account - Deprecated. {1} permissions to the Exchange Server. {2} to the {3}.":
      "{0} para la cuenta de servicio - Obsoleto. Permisos de {1} para Exchange Server. {2} para {3}.",
    "{0}, {1}, {2} and {3}":
      "{0}, {1}, {2} y {3}",
    "{0}: a textual name for the integration instance.":
      "{0}: nombre de texto de la instancia de integración.",
    "{0}: Access the Settings page from the top navigation bar.":
      "{0}: acceda a la página de configuración desde la barra de navegación superior.",
    "{0}: Active Prisma SASE account with Strata Cloud Manager access":
      "{0}: cuenta de Prisma SASE activa con acceso a Strata Cloud Manager",
    "{0}: By default, the integration retrieves all event detections across all entity types (Account and Host) and all detection statuses (Open, Acknowledged, Escalated, Paused). This includes both prioritized and non-prioritized detections.":
      "{0}: de forma predeterminada, la integración recupera todas las detecciones de eventos de todos los tipos de entidad (Account y Host) y de todos los estados de detección (Open, Acknowledged, Escalated, Paused). Esto incluye tanto las detecciones priorizadas como las no priorizadas.",
    "{0}: Choose specific indicator types to collect (IP, Domain, URL, File)":
      "{0}: elija los tipos de indicador específicos que desea recopilar (IP, Domain, URL, File)",
    "{0}: Click the {1} button.":
      "{0}: haga clic en el botón {1}.",
    "{0}: Configure the reliability level for feed context (default: A++ - Reputation script)":
      "{0}: configure el nivel de fiabilidad del contexto del feed (predeterminado: A++ - Reputation script)",
    "{0}: Configure the reliability level for threat intelligence context (default: A++ - Reputation script)":
      "{0}: configure el nivel de fiabilidad del contexto de inteligencia de amenazas (predeterminado: A++ - Reputation script)",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Red Teaming API permissions":
      "{0}: cree un cliente OAuth2 en Strata Cloud Manager con permisos de la API de Prisma AIRS AI Red Teaming",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Runtime Security API permissions":
      "{0}: cree un cliente OAuth2 en Strata Cloud Manager con permisos de la API de Prisma AIRS AI Runtime Security",
    "{0}: Create an OAuth2 client in Strata Cloud Manager with Prisma AIRS AI Supply Chain Security API permissions":
      "{0}: cree un cliente OAuth2 en Strata Cloud Manager con permisos de la API de Prisma AIRS AI Supply Chain Security",
    "{0}: Enable “Create Incidents for Escalated Detections” to retrieve all escalated detections, regardless of their priority level.":
      "{0}: habilite “Create Incidents for Escalated Detections” para recuperar todas las detecciones escaladas, independientemente de su nivel de prioridad.",
    "{0}: Enable “Create Incidents for Prioritized Detections” to filter out non-prioritized detections. Incidents will be created only for prioritized event detections.":
      "{0}: habilite “Create Incidents for Prioritized Detections” para filtrar las detecciones no priorizadas. Los incidentes se crearán únicamente para las detecciones de eventos priorizadas.",
    "{0}: Enable automatic creation of indicators from relationships":
      "{0}: habilite la creación automática de indicadores a partir de relaciones",
    "{0}: Enable automatic creation of relationships between indicators and threat objects based on returned associations":
      "{0}: habilite la creación automática de relaciones entre indicadores y objetos de amenaza según las asociaciones devueltas",
    "{0}: Enable both “Create Incidents for Prioritized Detections” and “Create Incidents for Escalated Detections”. This configuration retrieves detections that are either prioritized or escalated.":
      "{0}: habilite tanto “Create Incidents for Prioritized Detections” como “Create Incidents for Escalated Detections”. Esta configuración recupera las detecciones que están priorizadas o escaladas.",
    "{0}: Fill in the {1} and {2} fields. An organization admin can create these from the {3} tab on the {4} page in Doppel Vision. V2 is recommended: new Doppel API capabilities are added to V2 only.":
      "{0}: complete los campos {1} y {2}. Un administrador de la organización puede crearlos desde la pestaña {3} de la página {4} en Doppel Vision. Se recomienda V2: las nuevas capacidades de la API de Doppel se añaden únicamente a V2.",
    "{0}: Generate an {1} through {2} -> {3} -> {4} -> {5}.":
      "{0}: genere {1} mediante {2} -> {3} -> {4} -> {5}.",
    "{0}: In the Settings page, select the {1} tab.":
      "{0}: en la página de configuración, seleccione la pestaña {1}.",
    "{0}: Record your API client secret somewhere safe. For security purposes, it’s only shown when you create or reset the API client. If you lose your secret, you must reset it, which removes access for any integrations that still use the previous secret. 6. Add the {1} and {2} to Cortex. Note: For more information see the {3}":
      "{0}: guarde el secreto de cliente de API en un lugar seguro. Por motivos de seguridad, solo se muestra al crear o restablecer el cliente de API. Si pierde el secreto, deberá restablecerlo, lo que elimina el acceso de las integraciones que sigan usando el secreto anterior. 6. Agregue {1} y {2} a Cortex. Nota: para obtener más información, consulte {3}",
    "{0}: Select {1}.":
      "{0}: seleccione {1}.",
    "{0}: Select which types of objects to fetch (Indicators, Threat Objects, or both)":
      "{0}: seleccione qué tipos de objetos recuperar (indicadores, objetos de amenaza o ambos)",
    "{0}: Since QRadar API v19, The timestamp fields should be provided as milliseconds epoch format instead of seconds.":
      "{0}: a partir de la API v19 de QRadar, los campos de marca de tiempo deben proporcionarse en formato epoch en milisegundos en lugar de segundos.",
    "{0}: the “Test” button is not supported for this integration. To verify that authentication was configured correctly, run the {1} command.":
      "{0}: el botón “Probar” no es compatible con esta integración. Para verificar que la autenticación se configuró correctamente, ejecute el comando {1}.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration.":
      "{0}: la URL del servidor ({1}) es un endpoint global y no requiere configuración regional.",
    "{0}: The Server URL ({1}) is a global endpoint and does not require regional configuration. Only the Scanner API base URL is region-specific.":
      "{0}: la URL del servidor ({1}) es un endpoint global y no requiere configuración regional. Solo la URL base de la API de Scanner es específica de la región.",
    "{0}: these are the actual certificates, not request certificates.":
      "{0}: estos son los certificados reales, no certificados de solicitud.",
    "{0}: These are the actual certificates, not request certificates.":
      "{0}: Estos son los certificados reales, no certificados de solicitud.",
    "{0}: This is different from the OAuth2 Client ID/Secret used for management operations":
      "{0}: Esto es diferente del ID de cliente/secreto de OAuth2 que se utiliza para las operaciones de administración",
    "{0}: This option is relevant only if the integration is running on Azure VM.":
      "{0}: Esta opción solo es relevante si la integración se ejecuta en una VM de Azure.",
    "{0}: To create an API key, you must have the {1} role.":
      "{0}: para crear una clave de API, debe tener el rol {1}.",
    "{0}: Use the same {1} and {2} that you would use to log into FortiGate itself.":
      "{0}: utilice el mismo {1} y {2} que usaría para iniciar sesión en el propio FortiGate.",
    "{0}: When authenticating with the Cortex application, sign in with the same user you want to integrate with. Since this user must grant consent for the app’s permissions, they must be an {1}. To let a non-admin user use the app instead, after an admin has consented to the application once, go to the {2} > {3}, find the app, and set {4} to {5}. This way, other users can obtain the Cortex application credentials without needing to sign in or consent themselves. Alternatively, you can use a {6}.":
      "{0}: al autenticarse con la aplicación Cortex, inicie sesión con el mismo usuario con el que desea realizar la integración. Dado que este usuario debe otorgar consentimiento para los permisos de la aplicación, debe ser {1}. Para permitir que un usuario sin privilegios de administrador use la aplicación, una vez que un administrador haya dado su consentimiento a la aplicación, vaya a {2} > {3}, busque la aplicación y establezca {4} en {5}. De este modo, otros usuarios pueden obtener las credenciales de la aplicación Cortex sin necesidad de iniciar sesión ni dar su consentimiento. También puede usar {6}.",
    "{0}: When enabled, the integration will only use read-only tools, preventing any write operations to GitHub.":
      "{0}: cuando está habilitada, la integración solo utilizará herramientas de solo lectura, lo que impide cualquier operación de escritura en GitHub.",
    "{0}: When pooling is enabled, the number of active open database connections will equal the number of active running {1} Docker containers.":
      "{0}: cuando la agrupación está habilitada, el número de conexiones de base de datos abiertas activas será igual al número de contenedores Docker {1} en ejecución activos.",
    "{0}: When using the Authorization Code flow, make sure the user you authenticate with has the required role permissions. See {1} as an example.":
      "{0}: Al usar el flujo Authorization Code, asegúrese de que el usuario con el que se autentica tenga los permisos de rol necesarios. Consulte {1} como ejemplo.",
    "{0}: Within a few seconds, a new API key will appear in the table. Click the {1} button next to the key to copy it securely.":
      "{0}: En unos segundos, aparecerá una nueva clave de API en la tabla. Haga clic en el botón {1} situado junto a la clave para copiarla de forma segura.",
    "{0}: Your Prisma SASE TSG ID (found in Strata Cloud Manager settings)":
      "{0}: Su ID de TSG de Prisma SASE (se encuentra en la configuración de Strata Cloud Manager)",
    "Access the {0}.":
      "Acceda a {0}.",
    "Active subscription at {0}":
      "Suscripción activa en {0}",
    "Add a string of JSON to the integration parameter denoted {0}":
      "Agregue una cadena JSON al parámetro de integración indicado como {0}",
    "AdvancedHunting.Read.All - Application - See section 4 in {0}":
      "AdvancedHunting.Read.All - Aplicación - Consulte la sección 4 en {0}",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘call {0}’ with your procedure name.":
      "Después de crear el procedimiento, introduzca en ‘Fetch events query’ el valor ‘call {0}’ con el nombre de su procedimiento.",
    "After creating the procedure, fill in ‘Fetch events query’ the value: ‘EXEC {0}’ with your procedure name.":
      "Después de crear el procedimiento, introduzca en ‘Fetch events query’ el valor ‘EXEC {0}’ con el nombre de su procedimiento.",
    "After providing the mandatory details, click {0} to test the configuration.":
      "Después de proporcionar los datos obligatorios, haga clic en {0} para probar la configuración.",
    "All API plans are subject to a rate limit of 1 request per second - {0}":
      "Todos los planes de API están sujetos a un límite de velocidad de 1 solicitud por segundo - {0}",
    "All ZIA API calls use {0}.":
      "Todas las llamadas a la API de ZIA utilizan {0}.",
    "Alternatively, create an API key via the {0}.":
      "Como alternativa, cree una clave de API mediante {0}.",
    "API reference: {0}":
      "Referencia de la API: {0}",
    "Append the email ID of the service account created and click {0} to save.":
      "Agregue el ID de correo electrónico de la cuenta de servicio creada y haga clic en {0} para guardar.",
    "Attach the .cer file to your Azure App. See the following {0} for an example.":
      "Adjunte el archivo .cer a su aplicación de Azure. Consulte {0} a continuación como ejemplo.",
    "By default, secrets such as passwords and card numbers are redacted from War Room markdown output. Raw values remain available to playbooks via context for automation. Disable {0} only when troubleshooting in non-production environments.":
      "De forma predeterminada, los secretos, como contraseñas y números de tarjeta, se ocultan en la salida markdown de War Room. Los valores sin procesar siguen estando disponibles para los Playbooks a través del contexto para la automatización. Deshabilite {0} únicamente al solucionar problemas en entornos que no sean de producción.",
    "Choose one of the API versions listed under {0} column in the line corresponding to your QRadar version.":
      "Elija una de las versiones de API que aparecen en la columna {0} en la fila correspondiente a su versión de QRadar.",
    "Choose the {0} tab, and click the {1} checkbox.":
      "Seleccione la pestaña {0} y haga clic en la casilla {1}.",
    "Choose the {0} type from the {1} dropdown list.":
      "Elija el tipo {0} en la lista desplegable {1}.",
    "Click the button in the top-right corner and select {0}.":
      "Haga clic en el botón de la esquina superior derecha y seleccione {0}.",
    "Click your {0} in the top navigation bar.":
      "Haga clic en su {0} en la barra de navegación superior.",
    "Click your username, and select {0}.":
      "Haga clic en su nombre de usuario y seleccione {0}.",
    "Comma-separated list of URL categories to treat as suspicious. Default: {0}.":
      "Lista de categorías de URL, separadas por comas, que se tratarán como sospechosas. Valor predeterminado: {0}.",
    "Confirm that {0} is set to {1} in your Elasticsearch configuration (this is the default when TLS is enabled).":
      "Confirme que {0} está establecido en {1} en la configuración de Elasticsearch (este es el valor predeterminado cuando TLS está habilitado).",
    "Connect Cortex to {0} for real-time intelligence from the Clear, Deep, and Dark Web - tailored to your assets.":
      "Conecte Cortex a {0} para obtener inteligencia en tiempo real de la Clear, Deep y Dark Web, adaptada a sus activos.",
    "Copy the Client ID and Client Secret into the {0} and {1} integration parameter fields.":
      "Copie el Client ID y el Client Secret en los campos de parámetros de integración {0} y {1}.",
    "Copy the generated {0} into the integration instance and save.":
      "Copie el {0} generado en la instancia de la integración y guarde.",
    "Copy the key when it is shown — it is displayed only once. You paste it into the {0} field of this integration instance, where it is stored encrypted.":
      "Copie la clave cuando se muestre; solo se muestra una vez. Péguela en el campo {0} de esta instancia de integración, donde se almacena cifrada.",
    "Create a Personal Access Token for the new account ({0})":
      "Cree un Personal Access Token para la nueva cuenta ({0})",
    "Create API credentials such as Client ID and Client Secret. For more information, see the {0}.":
      "Cree credenciales de API, como Client ID y Client Secret. Para obtener más información, consulte {0}.",
    "Doppel Tenant URL that you can use for calling the {0}. e.g. ,{1}":
      "URL del tenant de Doppel que puede utilizar para llamar a {0}. p. ej.: {1}",
    "Duplicate the {0} mapper and/or the {1} mapper.":
      "Duplique el mapeador {0} y/o el mapeador {1}.",
    "Enter a {0}.":
      "Introduzca {0}.",
    "Enter a descriptive name for the token and click {0}.":
      "Introduzca un nombre descriptivo para el token y haga clic en {0}.",
    "Enter the desired name for the created app (e.g., “Cortex”), and click {0}.":
      "Introduzca el nombre que desee para la aplicación creada (p. ej., “Cortex”) y haga clic en {0}.",
    "Enter your {0} URL (e.g., {1}).":
      "Introduzca la URL de su {0} (p. ej., {1}).",
    "Example: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”":
      "Ejemplo: “CREATE PROCEDURE {0} @timestamp DATETIME AS SELECT * FROM TABLE_NAME WHERE timestamp >= @timestamp order by timestamp”",
    "Example: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”":
      "Ejemplo: “CREATE PROCEDURE {0}(IN ts DATETIME, IN l INT) BEGIN SELECT * FROM TABLE_NAME WHERE timestamp >= ts order by timestamp asc limit l; END”",
    "Finally, you need to extract the CA certificate: {0}":
      "Por último, debe extraer el certificado de CA: {0}",
    "First, navigate to your {0}.":
      "Primero, vaya a su {0}.",
    "Follow the instructions in this {0} to create your own client_id, client_secret, tsg_id.":
      "Siga las instrucciones de este {0} para crear sus propios client_id, client_secret y tsg_id.",
    "Follow these steps for {0} configuration:":
      "Siga estos pasos para la configuración de {0}:",
    "Follow this guide to generate access keys: {0}. For the URL argument, take a look here: {1} For a list of possible values for the {2} parameter, refer to the {3} column in this {4} article.":
      "Siga esta guía para generar claves de acceso: {0}. Para el argumento URL, consulte aquí: {1} Para obtener una lista de valores posibles del parámetro {2}, consulte la columna {3} (en este artículo de {4}).",
    "For {0} {1} enter: {2}":
      "Para {0} {1}, introduzca: {2}",
    "For information about Google’s API Key requirements and pricing, see {0}.":
      "Para obtener información sobre los requisitos y precios de la clave de API de Google, consulte {0}.",
    "For more information about creating an JWT app click {0}.":
      "Para obtener más información sobre cómo crear una aplicación JWT, haga clic en {0}.",
    "For more information about registering a calling bot see the {0}.":
      "Para obtener más información sobre el registro de un bot de llamadas, consulte {0}.",
    "For more information about this integration, visit {0}.":
      "Para obtener más información sobre esta integración, visite {0}.",
    "For more information about Threatmon, visit: {0}":
      "Para obtener más información sobre Threatmon, visite: {0}",
    "For more information about Zendesk V2 integration, see the {0}":
      "Para obtener más información sobre la integración de Zendesk V2, consulte {0}",
    "For more information on getting your Slack access token, see the {0}":
      "Para obtener información sobre cómo obtener su token de acceso de Slack, consulte {0}",
    "For more information on how to create the above credentials, see {0}.":
      "Para obtener más información sobre cómo crear las credenciales anteriores, consulte {0}.",
    "For more information, see the ‘{0}’ official documentation article.":
      "Para obtener más información, consulte el artículo de documentación oficial ‘{0}’.",
    "For more information, visit the {0}.":
      "Para obtener más información, visite {0}.",
    "For on-premise WildFire appliances, use the appliance IP or hostname with the {0} path (e.g., {1}).":
      "En el caso de los dispositivos WildFire locales, utilice la IP o el nombre de host del dispositivo con la ruta {0} (p. ej., {1}).",
    "For testing completion of authorization process run the {0} command.":
      "Para comprobar que se ha completado el proceso de autorización, ejecute el comando {0}.",
    "For the {0} field refer to the {1} on how to retrieve it":
      "Para el campo {0}, consulte {1} para saber cómo obtenerlo",
    "For the {0} parameter use your Sysdig SaaS url, refer to the {1} for a list of them based on the region.":
      "Para el parámetro {0}, utilice la URL de su Sysdig SaaS; consulte {1} para ver una lista de ellas según la región.",
    "For using OAuth 2.0 see the instructions above. The OTP code should be appended to the password parameter in the {0} command.":
      "Para usar OAuth 2.0, consulte las instrucciones anteriores. El código OTP debe añadirse al parámetro password del comando {0}.",
    "From the left sidebar, navigate to {0}.":
      "En la barra lateral izquierda, vaya a {0}.",
    "Generate a {0} in ZIdentity when creating the API client.":
      "Genere {0} en ZIdentity al crear el cliente de API.",
    "Generate a key of type {0}.":
      "Genere una clave de tipo {0}.",
    "Go to the {0} -> {1}":
      "Vaya a {0} -> {1}",
    "Go to the {0} and follow the procedure in the Creating a Service Account section. After you create a service account, a Service Account Private Key file is downloaded. You will need this file when configuring an instance of the integration.":
      "Vaya a {0} y siga el procedimiento de la sección Creating a Service Account. Después de crear una cuenta de servicio, se descarga un archivo de clave privada de la cuenta de servicio. Necesitará este archivo al configurar una instancia de la integración.",
    "Go to the {0} tab, and click {1} on the authorization with type of OAuth 2.0 (3LO).":
      "Vaya a la pestaña {0} y haga clic en {1} en la autorización de tipo OAuth 2.0 (3LO).",
    "Go to the {0} tab.":
      "Vaya a la pestaña {0}.",
    "Go to your {0}.":
      "Vaya a su {0}.",
    "Go to your Carbon Black console. This should be the URL in {0}.":
      "Vaya a su consola de Carbon Black. Debe ser la URL que figura en {0}.",
    "If enabled, the integration will automatically activate configuration changes after each write command. If disabled, use the {0} command manually.":
      "Si está habilitado, la integración activará automáticamente los cambios de configuración después de cada comando de escritura. Si está deshabilitado, utilice el comando {0} manualmente.",
    "If the {0} and {1} fields are configured, the integration will automatically perform the initial login and renew the refresh token when it expires. Otherwise, you have to run the {2} command for the initial login and again each time the refresh token expires.":
      "Si los campos {0} y {1} están configurados, la integración realizará automáticamente el inicio de sesión inicial y renovará el token de actualización cuando caduque. De lo contrario, deberá ejecutar el comando {2} para el inicio de sesión inicial y de nuevo cada vez que caduque el token de actualización.",
    "If there is no API token displayed, click the {0} button to create a new one.":
      "Si no se muestra ningún token de API, haga clic en el botón {0} para crear uno nuevo.",
    "If you use {0} to separate your data, set the {1} parameter in the instance configuration. All {2} commands will then operate within that space by default. You can also override the space per-command using the {3} argument.":
      "Si utiliza {0} para separar sus datos, establezca el parámetro {1} en la configuración de la instancia. Todos los comandos {2} funcionarán entonces de forma predeterminada dentro de ese espacio. También puede anular el espacio por comando mediante el argumento {3}.",
    "Import Living off the land binaries from {0} into the Threat Intelligence Management(TIM) module for security investigations and threat hunting activities.":
      "Importe los Living off the land binaries de {0} al módulo Threat Intelligence Management (TIM) para investigaciones de seguridad y actividades de búsqueda de amenazas.",
    "In addition, provide a pre-defined risk plan (for example, {0}).":
      "Además, proporcione un plan de riesgo predefinido (p. ej., {0}).",
    "In both options below, the {0} is used.":
      "En ambas opciones siguientes se utiliza {0}.",
    "In GitHub, click your {0} (upper-right), then {1}.":
      "En GitHub, haga clic en su {0} (parte superior derecha) y, a continuación, en {1}.",
    "In order to connect to Microsoft Risky User using either {0} or the {1}:":
      "Para conectarse a Microsoft Risky User mediante {0} o {1}:",
    "In order to use the following commands, you must use the {0}:":
      "Para usar los siguientes comandos, debe utilizar {0}:",
    "In order to use this integration, you need to enter your Okta API token in the {0} integration instance parameter. For information on getting your Okta API token, see the {1}.":
      "Para usar esta integración, debe introducir su token de API de Okta en el parámetro de instancia de integración {0}. Para obtener información sobre cómo obtener su token de API de Okta, consulte {1}.",
    "In the {0} dialog box, click {1}. Make sure to copy the generated private key (in PEM format) to somewhere safe, and click {2}.":
      "En el cuadro de diálogo {0}, haga clic en {1}. Asegúrese de copiar la clave privada generada (en formato PEM) en un lugar seguro y haga clic en {2}.",
    "In the {0} drop-down menu, select a permission to apply for the credential tokens. Define the desired permissions. To use the API credential to grant read-only access on individual {1} resources, select either the User or Editor permission on {2}.":
      "En el menú desplegable {0}, seleccione un permiso para aplicarlo a los tokens de credenciales. Defina los permisos deseados. Para usar la credencial de API para conceder acceso de solo lectura a recursos individuales de {1}, seleccione el permiso User o Editor en {2}.",
    "In the {0} field, enter the application (client) ID.":
      "En el campo {0}, introduzca el ID de la aplicación (cliente).",
    "In the {0} field, enter the application redirect URI.":
      "En el campo {0}, introduzca el URI de redireccionamiento de la aplicación.",
    "In the {0} field, enter the client secret.":
      "En el campo {0}, introduzca el secreto de cliente.",
    "In the {0} field, enter the directory (tenant) ID.":
      "En el campo {0}, introduzca el ID del directorio (tenant).",
    "In the {0} field, select the {1} option.":
      "En el campo {0}, seleccione la opción {1}.",
    "In the {0} field, type {1}.":
      "En el campo {0}, escriba {1}.",
    "In the {0} field, type your API token.":
      "En el campo {0}, escriba su token de API.",
    "In the Admin Console, go to {0} > {1}.":
      "En Admin Console, vaya a {0} > {1}.",
    "In the Admin Console, select {0} > {1} from the menu, and then select the {2} tab.":
      "En Admin Console, seleccione {0} > {1} en el menú y, a continuación, seleccione la pestaña {2}.",
    "In the app configuration page, under the {0} tab and the {1} section, select {2} for the {3} option.":
      "En la página de configuración de la aplicación, en la pestaña {0} y la sección {1}, seleccione {2} para la opción {3}.",
    "In the console, go to {0} > {1} .":
      "En la consola, vaya a {0} > {1}.",
    "In the dropdown list under “Role”, select {0}.":
      "En la lista desplegable de «Role», seleccione {0}.",
    "In the instance configuration, under the {0} field select the {1} option.":
      "En la configuración de la instancia, en el campo {0}, seleccione la opción {1}.",
    "In the integration settings pane in your tenant, check the {0} checkbox.":
      "En el panel de configuración de la integración de su tenant, marque la casilla {0}.",
    "In the left sidebar, click {0}.":
      "En la barra lateral izquierda, haga clic en {0}.",
    "In the management interface, create a role of type API. Select the APIs under {0} for the role and assign an administrator that role.":
      "En la interfaz de administración, cree un rol de tipo API. Seleccione las API en {0} para el rol y asigne ese rol a un administrador.",
    "In this method, the {0} is used.":
      "En este método se utiliza {0}.",
    "In XSOAR, create the custom indicator and incident field, for example, {0}.":
      "En XSOAR, cree los campos personalizados de indicador e incidente, p. ej., {0}.",
    "In your ServiceNow instance, navigate to {0} and ensure an MCP server is configured (or use the preconfigured {1}).":
      "En su instancia de ServiceNow, vaya a {0} y asegúrese de que haya un servidor MCP configurado (o utilice el {1} preconfigurado).",
    "Incident.Read.All - Application - See section 4 in {0}":
      "Incident.Read.All - Application - Consulte la sección 4 en {0}",
    "Incident.ReadWrite.All - Application - See section 4 in {0}":
      "Incident.ReadWrite.All - Application - Consulte la sección 4 en {0}",
    "Insert a {0}.":
      "Inserte {0}.",
    "Log in to the {0} with an account that has {1}.":
      "Inicie sesión en {0} con una cuenta que tenga {1}.",
    "Log in to your {0} account.":
      "Inicie sesión en su cuenta de {0}.",
    "Log in to your ServiceNow instance and create an endpoint for Cortex to access your instance. (See {0} for more information).":
      "Inicie sesión en su instancia de ServiceNow y cree un endpoint para que Cortex acceda a ella. (Consulte {0} para obtener más información).",
    "Make a note of the {0} and {1}. These will be used to configure the integration.":
      "Anote {0} y {1}. Se utilizarán para configurar la integración.",
    "Make sure you have your SecneurX API-Key. You can obtain the API-Key by sending an email to {0}.":
      "Asegúrese de tener su clave de API de SecneurX. Puede obtenerla enviando un correo electrónico a {0}.",
    "McAfee ePO has a highly flexible and powerful permissions system. The permissions required for the user that uses this integration depend on which operations they need to perform. The API user should have the same permissions a regular user would have in order to access the data via the UI. It is possible to view the exact permissions needed for a specific command by running the {0} command. The {1} command’s output will include help information for the specific command including required permissions. More info about McAfee ePO’s permissions model is available {2}.":
      "McAfee ePO tiene un sistema de permisos muy flexible y potente. Los permisos necesarios para el usuario que utiliza esta integración dependen de las operaciones que necesite realizar. El usuario de API debe tener los mismos permisos que tendría un usuario normal para acceder a los datos a través de la interfaz de usuario. Es posible ver los permisos exactos necesarios para un comando específico ejecutando el comando {0}. La salida del comando {1} incluirá información de ayuda sobre el comando específico, incluidos los permisos necesarios. Encontrará más información sobre el modelo de permisos de McAfee ePO {2}.",
    "Microsoft 365 Germany Endpoint: {0}":
      "Endpoint de Microsoft 365 Germany: {0}",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the {0}.":
      "Las integraciones de Microsoft (Graph y Azure) en Cortex utilizan aplicaciones de Entra ID para autenticarse con las API de Microsoft. Estas integraciones utilizan servicios de autenticación compatibles con los estándares OAuth 2.0 y OpenID Connect, que usan una aplicación para iniciar sesión o delegar la autenticación. Para obtener más información, consulte {0}.",
    "Microsoft Operated by 21Vianet Endpoint: {0}":
      "Endpoint de Microsoft Operated by 21Vianet: {0}",
    "More information can be found on {0}.":
      "Puede encontrar más información en {0}.",
    "Name your token and click {0}.":
      "Asigne un nombre al token y haga clic en {0}.",
    "Navigate to the {0} or {1} section (refer to your Magnet Automate version documentation for the exact location).":
      "Vaya a la sección {0} o {1} (consulte la documentación de su versión de Magnet Automate para conocer la ubicación exacta).",
    "Navigate to your {0}.":
      "Vaya a su {0}.",
    "Next to the {0} label, make sure the {1} option is selected, and that the {2} option is not selected.":
      "Junto a la etiqueta {0}, asegúrese de que la opción {1} esté seleccionada y de que la opción {2} no lo esté.",
    "Next to the {0} label, uncheck the {1} option if it’s selected.":
      "Junto a la etiqueta {0}, desmarque la opción {1} si está seleccionada.",
    "Next, log in to your {0} account.":
      "A continuación, inicie sesión en su cuenta de {0}.",
    "Note your {0} (e.g., {1} if your login URL is {2}).":
      "Anote su {0} (p. ej., {1}, si su URL de inicio de sesión es {2}).",
    "Note: If you’re uncertain which API version to use, it is recommended to use the latest API version listed in the {0} column in the line corresponding to your QRadar version.":
      "Nota: Si no está seguro de qué versión de API utilizar, se recomienda usar la versión de API más reciente indicada en la columna {0} de la fila correspondiente a su versión de QRadar.",
    "Note: SaaS Security API currently allows you to mirror out only closed incidents, and only their {0} and {1} fields.":
      "Nota: SaaS Security API actualmente solo permite reflejar hacia el exterior los incidentes cerrados y únicamente sus campos {0} y {1}.",
    "Notice: Submitting indicators using the {0} command of this integration might make the indicator data publicly available. See the vendor’s documentation for more details":
      "Aviso: el envío de indicadores mediante el comando {0} de esta integración podría hacer que los datos del indicador estén disponibles públicamente. Consulte la documentación del proveedor para obtener más información",
    "On large tenants a full Spotlight collection can take many hours - longer than the maximum execution time allowed for a single assets fetch. In such cases, the fetch is terminated before it completes. Enable the {0} parameter (under the {1} section, {2}) to run the Spotlight fetch in a long-running container instead, which is not bound by that execution time limit and lets a cycle run to completion. A new cycle starts every 24 hours, or immediately after the previous one ends if it ran longer.":
      "En tenants grandes, una recopilación completa de Spotlight puede tardar muchas horas, más que el tiempo máximo de ejecución permitido para una única recuperación de activos. En tales casos, la recuperación se termina antes de completarse. Habilite el parámetro {0} (en la sección {1}, {2}) para ejecutar la recuperación de Spotlight en un contenedor de ejecución prolongada, que no está sujeto a ese límite de tiempo de ejecución y permite que un ciclo se ejecute hasta completarse. Un nuevo ciclo se inicia cada 24 horas, o inmediatamente después de que finalice el anterior si duró más.",
    "On premise administrators: Edit the {0} file and set the following key to true: com.proofpoint.admin.apigui.enable=t":
      "Administradores locales: edite el archivo {0} y establezca la siguiente clave en true: com.proofpoint.admin.apigui.enable=t",
    "On the opened page, click {0}.":
      "En la página que se abre, haga clic en {0}.",
    "Open the {0}.":
      "Abra {0}.",
    "Open the main menu and go to {0} > {1}.":
      "Abra el menú principal y vaya a {0} > {1}.",
    "Open your Google Admin console (at {0}).":
      "Abra su consola de Google Admin (en {0}).",
    "Optional: To revoke all currently valid API keys, follow this {0}":
      "Opcional: para revocar todas las claves de API actualmente válidas, siga este {0}",
    "Optionally set the {0} (must match your deployment profile region) and {1}":
      "Opcionalmente, establezca {0} (debe coincidir con la región de su perfil de implementación) y {1}",
    "Please note the default timeout for queries is 30 seconds. To increase the timeout set the following parameter in the {0} field: {1} (notice the space in the name of the parameter) with the desired timeout in seconds. For example to set a timeout of 120 seconds use: {2}.":
      "Tenga en cuenta que el tiempo de espera predeterminado para las consultas es de 30 segundos. Para aumentarlo, establezca el siguiente parámetro en el campo {0}: {1} (observe el espacio en el nombre del parámetro) con el tiempo de espera deseado en segundos. Por ejemplo, para establecer un tiempo de espera de 120 segundos, utilice: {2}.",
    "Preconfigured template attachments can be supported by using {0}":
      "Los archivos adjuntos de plantilla preconfigurados se pueden admitir mediante {0}",
    "Provide your {0} (TSG ID)":
      "Proporcione su {0} (TSG ID)",
    "Providing additional filters should be done in the following format: {0}. For example: {1}.":
      "Los filtros adicionales deben proporcionarse con el siguiente formato: {0}. Por ejemplo: {1}.",
    "Rasterize Mode: It is possible to rasterize either via Chrome WebDriver or Chrome Headless CLI. WebDriver supports more options than Headless CLI. Such as support for the {0} option in the {1} command. There are some urls that do not rasterize well with WebDriver and may succeed with Headless CLI. Thus, it is recommended to use the {2} mode, which will use WebDriver as a start and fallback to Headless CLI if it fails.":
      "Modo de rasterización: es posible rasterizar mediante Chrome WebDriver o Chrome Headless CLI. WebDriver admite más opciones que Headless CLI, como la compatibilidad con la opción {0} en el comando {1}. Hay algunas URL que no se rasterizan bien con WebDriver y que pueden funcionar con Headless CLI. Por ello, se recomienda utilizar el modo {2}, que usará WebDriver al principio y recurrirá a Headless CLI si falla.",
    "Review the requested permissions on GitLab, and click {0}.":
      "Revise los permisos solicitados en GitLab y haga clic en {0}.",
    "Save the integration and note the {0} and {1}.":
      "Guarde la integración y anote {0} y {1}.",
    "See {0} for more information.":
      "Consulte {0} para obtener más información.",
    "See {0} regarding this requirement.":
      "Consulte {0} en relación con este requisito.",
    "Select a {0}.":
      "Seleccione {0}.",
    "Select an {0} for the token.":
      "Seleccione {0} para el token.",
    "Select an {0}, then fill in only that version’s fields. Fields labeled with the other version are ignored.":
      "Seleccione {0} y, a continuación, rellene únicamente los campos de esa versión. Los campos etiquetados con la otra versión se ignoran.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> put it in the {0} filed in the instance configuration.":
      "Seleccione su User Assigned Managed Identity -> copie el Client ID -> péguelo en el campo {0} de la configuración de la instancia.",
    "Sends a POST request to {0} with {1}, {2}, and {3}.":
      "Envía una solicitud POST a {0} con {1}, {2} y {3}.",
    "Set up ZIdentity, link your service tenants, and create API Clients with the right roles and resources — {0}.":
      "Configure ZIdentity, vincule sus tenants de servicio y cree clientes de API con los roles y recursos adecuados — {0}.",
    "Sign in to your Darkmon tenant, go to {0}, and create a key with the scopes your XSOAR instance needs. Paste it into the {1} field below.":
      "Inicie sesión en su tenant de Darkmon, vaya a {0} y cree una clave con los ámbitos que necesita su instancia de XSOAR. Péguela en el campo {1} que aparece a continuación.",
    "Sign in to your Okta organization as a user {0}.":
      "Inicie sesión en su organización de Okta como usuario {0}.",
    "The {0} advanced parameter is available for cases where the automatic agent detection fails (e.g., API requests return errors or the {1} button fails due to an incorrect agent header). By default, the integration auto-detects the correct agent based on the platform. Only change this setting if instructed to do so by support or if auto-detection is not working correctly.":
      "El parámetro avanzado {0} está disponible para los casos en que falla la detección automática del agente (p. ej., las solicitudes de API devuelven errores o el botón {1} falla debido a un encabezado de agente incorrecto). De forma predeterminada, la integración detecta automáticamente el agente correcto según la plataforma. Cambie este ajuste solo si el soporte se lo indica o si la detección automática no funciona correctamente.",
    "The {0} and {1} commands are only supported when using the {2} with {3} permission type.":
      "Los comandos {0} y {1} solo se admiten cuando se usa {2} con el tipo de permiso {3}.",
    "The {0} and the {1} integration parameters should be left blank.":
      "Los parámetros de integración {0} y {1} deben dejarse en blanco.",
    "The {0} command requires some JSON format arguments. Please make sure the inputed JSONs have uniqe characters (such as {1}) escaped before entering them (e.g. {2}).":
      "El comando {0} requiere algunos argumentos en formato JSON. Asegúrese de que los JSON introducidos tengan los caracteres especiales (como {1}) escapados antes de introducirlos (p. ej., {2}).",
    "The {0} corresponds to the {1} in the integration credentials field.":
      "{0} corresponde a {1} en el campo de credenciales de la integración.",
    "The {0} integration parameter should be set according to the requested OAuth2 permissions types to grant access to in Microsoft identity platform, for more details see the {1}.":
      "El parámetro de integración {0} debe establecerse según los tipos de permisos de OAuth2 solicitados a los que se concederá acceso en Microsoft identity platform. Para obtener más información, consulte {1}.",
    "The {0} integration parameter should be set to {1} (the Cortex Azure app ID).":
      "El parámetro de integración {0} debe establecerse en {1} (el ID de la aplicación Azure de Cortex).",
    "The {0} parameter is required by both.":
      "Ambos requieren el parámetro {0}.",
    "The {0} parameter specifies if a new user should be created when the User Profile passed was not found in the 3rd-party integration.":
      "El parámetro {0} especifica si se debe crear un usuario nuevo cuando el perfil de usuario proporcionado no se encontró en la integración de terceros.",
    "The API connection requires the {0} and {1} parameters as well as a {2} or {3}.":
      "La conexión de API requiere los parámetros {0} y {1}, así como {2} o {3}.",
    "The default language used for OCR is English. To configure additional languages, in the {0} parameter specify a CSV list of language codes. For example, to set the integration for English and French, set this value: {1}. To see all supported language codes,run the following command:":
      "El idioma predeterminado utilizado para OCR es el inglés. Para configurar idiomas adicionales, especifique en el parámetro {0} una lista CSV de códigos de idioma. Por ejemplo, para configurar la integración para inglés y francés, establezca este valor: {1}. Para ver todos los códigos de idioma compatibles, ejecute el siguiente comando:",
    "The integration uses the OAuth 2.0 {0} grant type:":
      "La integración utiliza el tipo de concesión {0} de OAuth 2.0:",
    "The legacy content search solution is {0}. Content searches are now performed within the context of an eDiscovery case.":
      "La solución heredada de búsqueda de contenido está {0}. Las búsquedas de contenido ahora se realizan en el contexto de un caso de eDiscovery.",
    "The pack ships pointing at the production endpoint. To target your dev or staging environment, set {0} to your dev URL on this instance only.":
      "El paquete se entrega apuntando al endpoint de producción. Para apuntar a su entorno de desarrollo o de preparación, establezca {0} en su URL de desarrollo solo en esta instancia.",
    "The Server URL assigned to your organization. For example, {0}.":
      "La URL del servidor asignada a su organización. Por ejemplo, {0}.",
    "The SSH connection requires the {0}, {1} and {2} are provided.":
      "La conexión SSH requiere que se proporcionen {0}, {1} y {2}.",
    "The vsys is located in the Firewall URL; e.g, {0}":
      "El vsys se encuentra en la URL del firewall; p. ej., {0}",
    "There are 3 different authentication {0}":
      "Existen 3 {0} de autenticación diferentes",
    "There are 3 different authentication {0}.":
      "Existen 3 {0} de autenticación diferentes.",
    "There are two different authentication methods for {0}:":
      "Existen dos métodos de autenticación diferentes para {0}:",
    "This API enables you to use the Google Admin API. In order to enable the API, you need to create an account service private key JSON file and copy its content as the value for the {0} parameter field.":
      "Esta API le permite utilizar la API de Google Admin. Para habilitar la API, debe crear un archivo JSON con la clave privada de la cuenta de servicio y copiar su contenido como valor del campo de parámetro {0}.",
    "This integration connects to the Zscaler Internet Access (ZIA) API using {0} authentication via ZIdentity, replacing the legacy session-based authentication.":
      "Esta integración se conecta a la API de Zscaler Internet Access (ZIA) mediante la autenticación {0} a través de ZIdentity, en sustitución de la autenticación heredada basada en sesión.",
    "This integration is deprecated. Use the Microsoft Graph Security integration for supported replacement functionality. For a list of command replacements, see the {0}.":
      "Esta integración está obsoleta. Utilice la integración Microsoft Graph Security para obtener la funcionalidad de reemplazo compatible. Para ver una lista de los reemplazos de comandos, consulte {0}.",
    "This integration uses the {0} mechanism to periodically collect assets and vulnerabilities from Rapid7 InsightVM.":
      "Esta integración utiliza el mecanismo {0} para recopilar periódicamente activos y vulnerabilidades de Rapid7 InsightVM.",
    "This is a long-running integration. For more information about long-running integrations, check out the {0} article.":
      "Esta es una integración de ejecución prolongada. Para obtener más información sobre las integraciones de ejecución prolongada, consulte el artículo {0}.",
    "To access the {0} by instance name, set up the {1} and {2} values in the {3} page ({4} > {5} > {6} > {7}).":
      "Para acceder a {0} por nombre de instancia, configure los valores {1} y {2} en la página {3} ({4} > {5} > {6} > {7}).",
    "To add mirroring in both environments, in the Incident Mirroring Direction field, select {0}. Outgoing mirroring is recommended for Cortex version 6.2 and above. If you enable mirroring, you need to add the timezone of the Splunk server (in minutes). For example, if using GMT and the timezone is GMT {1}180. For UTC, set the timezone to 0. Set this only if the Splunk server is different than the Cortex server. This is relevant only for fetching notable events.":
      "Para agregar el reflejo en ambos entornos, en el campo Dirección de reflejo de incidentes, seleccione {0}. Se recomienda el reflejo saliente para Cortex versión 6.2 y posteriores. Si habilita el reflejo, debe agregar la zona horaria del servidor de Splunk (en minutos). Por ejemplo, si utiliza GMT y la zona horaria es GMT {1}180. Para UTC, establezca la zona horaria en 0. Configure esto solo si el servidor de Splunk es diferente del servidor de Cortex. Esto solo es relevante para recuperar eventos notable.",
    "To allow access to Microsoft Defender Advanced Threat Protection, an admin has to approve our app using an admin consent flow, by clicking on the following {0}. After authorizing the Cortex app, you will get an {1}, {2}, and {3}, which you then need to insert in the integration instance settings corresponding fields.":
      "Para permitir el acceso a Microsoft Defender Advanced Threat Protection, un administrador debe aprobar nuestra aplicación mediante un flujo de consentimiento de administrador, haciendo clic en el siguiente {0}. Después de autorizar la aplicación de Cortex, obtendrá los siguientes valores: {1}, {2} y {3}, que deberá introducir en los campos correspondientes de la configuración de la instancia de la integración.",
    "To configure this integration, you need an {0} and a {1} from the iZOOlogic platform.":
      "Para configurar esta integración, necesita {0} y {1} de la plataforma iZOOlogic.",
    "To connect the McAfee TIE using the DXL TIE client, you need to create certificates and configure DXL. For more information, see the {0}. After you complete this configuration, you will have the following files.":
      "Para conectar McAfee TIE mediante el cliente DXL TIE, debe crear certificados y configurar DXL. Para obtener más información, consulte {0}. Una vez completada esta configuración, tendrá los siguientes archivos.",
    "To create, modify, and delete Safe Links policies, you need to be a member of the {0} or {1} role groups.":
      "Para crear, modificar y eliminar directivas de Safe Links, debe ser miembro de los grupos de roles {0} o {1}.",
    "To enable the Shodan integration you need to have an API key, which you can get for free by creating a Shodan account {0} Once you have an API key you insert it into the {1} field and click the {2} button.":
      "Para habilitar la integración de Shodan necesita una clave de API, que puede obtener gratis creando una cuenta de Shodan ({0}). Una vez que tenga una clave de API, introdúzcala en el campo {1} y haga clic en el botón {2}.",
    "To execute the command either provide the value of the Admin email in the integration configuration or provide the value of the {0} argument for the command or provide the admin role to the created service account’s email by performing the following steps:":
      "Para ejecutar el comando, indique el valor del correo electrónico del administrador en la configuración de la integración, indique el valor del argumento {0} del comando o asigne el rol de administrador al correo electrónico de la cuenta de servicio creada siguiendo estos pasos:",
    "To generate an API key, login to Netcraft and go to the {0}":
      "Para generar una clave de API, inicie sesión en Netcraft y vaya a {0}",
    "To generate tokens, browse to {0} and follow the instructions":
      "Para generar tokens, vaya a {0} y siga las instrucciones",
    "To get an API client ID and secret, contact {0}.":
      "Para obtener un ID de cliente y un secreto de API, póngase en contacto con {0}.",
    "To get the {0}, {1}, {2} and {3} parameters, in the Azure Portal, go to {4} and click the {5} tab.":
      "Para obtener los parámetros {0}, {1}, {2} y {3}, en Azure Portal, vaya a {4} y haga clic en la pestaña {5}.",
    "To get your API key, here is a {0} to Tavily UI.":
      "Para obtener su clave de API, utilice este {0} a la interfaz de usuario de Tavily.",
    "To manage permissions in the Microsoft Defender XDR portal, go to {0} or https://security.microsoft.com/securitypermissions. You need to be a global administrator or a member of the Organization Management role group in the Microsoft Defender XDR portal. Specifically, the Role Management role allows users to view, create, and modify role groups in the Microsoft Defender XDR portal, and by default, that role is assigned only to the Organization Management role group.":
      "Para administrar los permisos en el portal de Microsoft Defender XDR, vaya a {0} o a https://security.microsoft.com/securitypermissions. Debe ser administrador global o miembro del grupo de roles Organization Management en el portal de Microsoft Defender XDR. En concreto, el rol Role Management permite a los usuarios ver, crear y modificar grupos de roles en el portal de Microsoft Defender XDR y, de forma predeterminada, ese rol solo se asigna al grupo de roles Organization Management.",
    "To mirror offenses with events, enable the {0} parameter and set {1} to {2}.":
      "Para reflejar ofensas con eventos, habilite el parámetro {0} y establezca {1} en {2}.",
    "To obtain an API Key, run the following REST command and copy the key: {0}":
      "Para obtener una clave de API, ejecute el siguiente comando REST y copie la clave: {0}",
    "To reset fetch incidents, run {0} - this will reset the fetch to its initial state (will try to fetch first available offense).":
      "Para restablecer la recuperación de incidentes, ejecute {0}; esto restablecerá la recuperación a su estado inicial (intentará recuperar la primera ofensa disponible).",
    "To reset fetch incidents, run the {0} command - This will reset the fetch to its initial state. (Will try to fetch the first available offense).":
      "Para restablecer la recuperación de incidentes, ejecute el comando {0}; esto restablecerá la recuperación a su estado inicial. (Intentará recuperar la primera ofensa disponible).",
    "To retrieve the Egress API key from Panorama - Click “Generate API Key” under {0}":
      "Para recuperar la clave de API de Egress de Panorama, haga clic en “Generate API Key” en {0}",
    "To start fetching incidents, enable the parameter {0} - this will start a long running process that’ll fetch incidents periodically. Depending on the system load, {1}.":
      "Para comenzar a recuperar incidentes, habilite el parámetro {0}; esto iniciará un proceso de larga ejecución que recuperará incidentes periódicamente. Según la carga del sistema, {1}.",
    "To use {0}:":
      "Para usar {0}:",
    "To use a {0} , you need to add a {1}.":
      "Para usar {0}, debe agregar {1}.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. For more details, follow {0}.":
      "Para usar una aplicación de Azure configurada por usted mismo, debe agregar un nuevo Azure App Registration en Azure Portal. Para obtener más detalles, siga {0}.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add an app registration, refer to steps 1-6 under the {0} section of the integration documentation {1}.":
      "Para usar una aplicación de Azure configurada por usted mismo, debe agregar un nuevo Azure App Registration en Azure Portal. Para agregar un registro de aplicación, consulte los pasos 1 a 6 de la sección {0} de la documentación de la integración {1}.",
    "To use ServiceNow in XSOAR, ensure your user account has the {0}, {1} roles or any other role required to permit working with the {2} table. These roles are required in order to make API calls. However, they may not suffice for viewing records in some tables.":
      "Para usar ServiceNow en XSOAR, asegúrese de que su cuenta de usuario tenga los roles {0}, {1} o cualquier otro rol necesario para permitir el trabajo con la tabla {2}. Estos roles son necesarios para realizar llamadas a la API. Sin embargo, es posible que no sean suficientes para ver los registros de algunas tablas.",
    "To use the {0} command, ensure the {1} has one of the following roles assigned:":
      "Para usar el comando {0}, asegúrese de que {1} tenga asignado uno de los siguientes roles:",
    "To use the {0} command, you need to authorize the client (Cortex) to run the command. Follow the {1} to do so. In step 4, instead of selecting {2}, select {3}.":
      "Para usar el comando {0}, debe autorizar al cliente (Cortex) a ejecutar el comando. Siga {1} para hacerlo. En el paso 4, en lugar de seleccionar {2}, seleccione {3}.",
    "To use the {0} command, you need to authorize the client (Demisto) to run the command. Follow the instructions in the {1}. In step #4, instead of selecting {2}, select {3}.":
      "Para usar el comando {0}, debe autorizar al cliente (Demisto) a ejecutar el comando. Siga las instrucciones de {1}. En el paso 4, en lugar de seleccionar {2}, seleccione {3}.",
    "To use the full capabilities of this integration, make sure your user has the following permissions: {0}, {1}, {2}.":
      "Para usar todas las funciones de esta integración, asegúrese de que su usuario tenga los siguientes permisos: {0}, {1}, {2}.",
    "To use the integration commands, ensure the {0} has one of the following roles assigned:":
      "Para usar los comandos de la integración, asegúrese de que {0} tenga asignado uno de los siguientes roles:",
    "To use the integration with an API token, you first need to change the {0} field to {1}. Following this step, you can now enter the API Token into the {2} field - this value will be used as an API key.":
      "Para usar la integración con un token de API, primero debe cambiar el campo {0} a {1}. Después de este paso, ya puede introducir el token de API en el campo {2}; este valor se utilizará como clave de API.",
    "To view and run Office 365 unified audit log searches, admins or users must be assigned the {0} or {1} role in {2}.":
      "Para ver y ejecutar búsquedas en el registro de auditoría unificado de Office 365, los administradores o usuarios deben tener asignado el rol {0} o {1} en {2}.",
    "To view logs concerning the creation of the indicator list and its current status add the {0} suffix to the list URL.":
      "Para ver los registros relacionados con la creación de la lista de indicadores y su estado actual, agregue el sufijo {0} a la URL de la lista.",
    "Under {0}, click {1}.":
      "En {0}, haga clic en {1}.",
    "Under {0}, select the necessary permissions. Choose minimal permissions.":
      "En {0}, seleccione los permisos necesarios. Elija los permisos mínimos.",
    "Under {0}, select which repositories the token can access. Choose minimal access.":
      "En {0}, seleccione a qué repositorios puede acceder el token. Elija el acceso mínimo.",
    "Under the {0} tab, grant the required scopes mentioned above for the app.":
      "En la pestaña {0}, conceda los ámbitos necesarios mencionados anteriormente para la aplicación.",
    "Under the newly added {0} section, click {1}.":
      "En la sección {0} recién agregada, haga clic en {1}.",
    "US Government Department of Defence (DoD) Endpoint: {0}":
      "Endpoint del Departamento de Defensa (DoD) del Gobierno de EE. UU.: {0}",
    "US Government GCC-High Endpoint: {0}":
      "Endpoint GCC-High del Gobierno de EE. UU.: {0}",
    "Use {0} to check acceptance, {1} to review it, and {2} to accept.":
      "Utilice {0} para comprobar la aceptación, {1} para revisarla y {2} para aceptarla.",
    "Use Cortex’s credentials store with a {0} and {1} as the {2} and {3} in case you are using Enterprise DLP through a SASE platform.":
      "Si utiliza Enterprise DLP a través de una plataforma SASE, utilice el almacén de credenciales de Cortex con {0} y {1} como {2} y {3}.",
    "Use the {0} integration to enrich indicators with threat intelligence context from Palo Alto Networks Unit 42’s research team.":
      "Utilice la integración {0} para enriquecer indicadores con el contexto de inteligencia de amenazas del equipo de investigación Unit 42 de Palo Alto Networks.",
    "Use the {0} integration to fetch indicators and threat objects from Palo Alto Networks Unit 42’s comprehensive threat feed. This integration provides continuous access to high-quality indicators of compromise (IOCs) and contextual threat intelligence.":
      "Utilice la integración {0} para recuperar indicadores y objetos de amenaza del completo feed de amenazas de Unit 42 de Palo Alto Networks. Esta integración proporciona acceso continuo a indicadores de compromiso (IOC) de alta calidad e inteligencia de amenazas contextual.",
    "Use the {0} parameter to control what this integration ingests. You can select {1}, {2}, or both:":
      "Utilice el parámetro {0} para controlar lo que ingiere esta integración. Puede seleccionar {1}, {2} o ambos:",
    "Use the {0} parameter to filter cases by the required severity and the {1} parameter to filter cases by the required status.":
      "Utilice el parámetro {0} para filtrar los casos por la gravedad requerida y el parámetro {1} para filtrarlos por el estado requerido.",
    "Use the {0} to link Microsoft Defender XDR with Cortex.":
      "Utilice {0} para vincular Microsoft Defender XDR con Cortex.",
    "Use the {0} to link Microsoft Graph Services with Cortex.":
      "Utilice {0} para vincular Microsoft Graph Services con Cortex.",
    "Use the appropriate server URL in the {0} parameter based on your region or cloud environment:":
      "Utilice la URL de servidor adecuada en el parámetro {0} según su región o entorno de nube:",
    "Use this {0} to log in to the Joe Security platform.":
      "Utilice este {0} para iniciar sesión en la plataforma Joe Security.",
    "Using a national cloud endpoint is supported by setting the {0} parameter to one of the following options:":
      "Se admite el uso de un endpoint de nube nacional configurando el parámetro {0} con una de las siguientes opciones:",
    "Visit {0} for a list of all possible fields to be used in the filter.":
      "Consulte {0} para ver una lista de todos los campos que se pueden usar en el filtro.",
    "Visit {0} for explanation about filter syntax.":
      "Consulte {0} para obtener una explicación sobre la sintaxis de los filtros.",
    "Visit the {0} for a full list of available API versions according to the QRadar version.":
      "Consulte {0} para ver la lista completa de versiones de API disponibles según la versión de QRadar.",
    "When encountering connectivity or authorization errors, it is necessary to include the IP addresses corresponding to the relevant region in the CrowdStrike Falcon allow list. These IP addresses can be found in the {0} by searching for {1}.":
      "Cuando se produzcan errores de conectividad o autorización, es necesario incluir las direcciones IP correspondientes a la región pertinente en la lista de permitidos de CrowdStrike Falcon. Estas direcciones IP se pueden encontrar en {0} buscando {1}.",
    "When encountering HTTP 429 response error code from CrowdStrike Falcon, use an engine as explained in this {0}.":
      "Cuando reciba el código de error de respuesta HTTP 429 de CrowdStrike Falcon, utilice un motor como se explica en este {0}.",
    "When mirroring offenses with events it is advised to set the {0} to a small value.":
      "Al reflejar ofensas con eventos, se recomienda establecer {0} en un valor pequeño.",
    "When switching from the {0} to the {1} do as follow: Save the instance, run the {2} command and follow the instructions mentioned there. Once done, test the validity of your instance by running the {3} command. When switching from the {4} to the {5}, test the validity of the instance by clicking the ‘Test’ button.":
      "Al cambiar de {0} a {1}, haga lo siguiente: guarde la instancia, ejecute el comando {2} y siga las instrucciones que se indican allí. Una vez hecho esto, pruebe la validez de su instancia ejecutando el comando {3}. Al cambiar de {4} a {5}, pruebe la validez de la instancia haciendo clic en el botón ‘Probar’.",
    "When using {0}, the connection should be tested using the {1} command.":
      "Al usar {0}, la conexión debe probarse con el comando {1}.",
    "When using the {0} for this integration, you should log in as an administrator or a user with administrative privileges ({1} or {2}) after running the {3} command and the login window appears. For more information, see {4}.":
      "Al usar {0} para esta integración, debe iniciar sesión como administrador o como usuario con privilegios administrativos ({1} o {2}) después de ejecutar el comando {3} y de que aparezca la ventana de inicio de sesión. Para obtener más información, consulte {4}.",
    "When using the {0}, make sure the user you authenticate with has the relevant roles in Azure AD in order to execute the operation. To verify that authentication was configured correctly, run the {1} command.":
      "Al usar {0}, asegúrese de que el usuario con el que se autentica tenga los roles pertinentes en Azure AD para ejecutar la operación. Para comprobar que la autenticación se configuró correctamente, ejecute el comando {1}.",
    "Whether to output {0} formats as textual web pages.":
      "Indica si se deben mostrar los formatos {0} como páginas web de texto.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax, see the {1} and {2}.":
      "Puede aplicar filtros adicionales (opcionales) a la consulta de recuperación de incidentes mediante el parámetro de integración {0}. Para obtener más información sobre cómo usar la sintaxis de filtros, consulte {1} y {2}.",
    "You can apply additional (optional) filters for the fetch-incident query using the {0} integration parameter. For more information on how to use the filter syntax:":
      "Puede aplicar filtros adicionales (opcionales) a la consulta de recuperación de incidentes mediante el parámetro de integración {0}. Para obtener más información sobre cómo usar la sintaxis de filtros:",
    "You can narrow what is fetched using the {0} and {1} parameters. These accept an OData {2} expression, for example {3}. For the supported syntax and operators, see {4}.":
      "Puede acotar lo que se recupera mediante los parámetros {0} y {1}. Estos aceptan una expresión OData {2}, por ejemplo {3}. Para conocer la sintaxis y los operadores admitidos, consulte {4}.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the HCP Terraform organization and workspaces to integrate.":
      "Puede usar un token de usuario o de equipo de Terraform existente, o crear uno nuevo (no se admiten los tokens de organización). Asegúrese de que el usuario o el equipo tenga los permisos {0} y {1} para la organización y los espacios de trabajo de HCP Terraform que se van a integrar.",
    "You can use an existing Terraform user or team token, or create a new one (organization tokens are not supported). Ensure the user or team has {0} and {1} permissions for the Terraform Enterprise organization and workspaces to integrate.":
      "Puede usar un token de usuario o de equipo de Terraform existente, o crear uno nuevo (no se admiten los tokens de organización). Asegúrese de que el usuario o el equipo tenga los permisos {0} y {1} para la organización y los espacios de trabajo de Terraform Enterprise que se van a integrar.",
    "You find more information about SIGNL4 at {0}.":
      "Encontrará más información sobre SIGNL4 en {0}.",
    "You must have the {0} configured in the ZIA Admin Portal.":
      "Debe haber configurado {0} en ZIA Admin Portal.",

    // --- Batch: Missed items reported by user (tooltips and standalone Deprecated.) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "This value will only be used when no arguments were given to the ad-get-user command.":
      "Este valor solo se utilizará cuando no se hayan proporcionado argumentos al comando ad-get-user.",
    "if no offenses are found within the range of first fetch, will be set to fetch the earliest offense.":
      "Si no se encuentran delitos dentro del intervalo de la primera recuperación, se establecerá para recuperar el delito más antiguo.",
    "Source of WildFire API Key - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = XSOAR TIM API Key":
      "Origen de la clave de API de WildFire - other = NGFW, WildFire API - pcc = Prisma Cloud Compute - prismaaccessapi = Prisma Access - xsoartim = clave de API de XSOAR TIM",
    "Deprecated.":
      "Obsoleto.",

    // --- Batch: Login page strings (08:49 export) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "By signing in, you agree to our Terms and acknowledge our Privacy Statement.":
      "Al iniciar sesión, acepta nuestros Términos y reconoce nuestra Declaración de privacidad.",
    "Sign-in with CSP":
      "Iniciar sesión con CSP",
    "Sign-in with SSO":
      "Iniciar sesión con SSO",
    "Welcome to Cortex":
      "Bienvenido a Cortex",
    "You’re backed by the world’s most trusted security platform.":
      "Cuenta con el respaldo de la plataforma de seguridad más confiable del mundo.",

    // --- Batch: Slack access token sentence (single and two-sentence block variants) ---
    // Generic connector fragments are intentionally NOT registered; fragments with a known neighbouring structure are registered as sets.
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter.":
      "Para usar esta integración, debe introducir su token de acceso de Slack en el parámetro de instancia de integración {0}.",
    "In order to use this integration, you need to enter your Slack access token in the {0} integration instance parameter. The simplest way to acquire this token is for an Org Owner to create a new Slack app, add the admin OAuth scope, install the app, and use the generated token.":
      "Para usar esta integración, debe introducir su token de acceso de Slack en el parámetro de instancia de integración {0}. La forma más sencilla de obtener este token es que un Org Owner cree una nueva aplicación de Slack, agregue el ámbito OAuth admin, instale la aplicación y utilice el token generado.",
    "Set the":
      "Establezca el parámetro",
    "Cisco Umbrella Investigate enables you to research domains, IPs, and URLs observed by the Umbrella resolvers.":
      "Cisco Umbrella Investigate le permite investigar dominios, IP y URL observados por los resolvedores de Umbrella.",
    "command in the War Room and follow the instruction.":
      "comando en la War Room y siga las instrucciones.",
    "command to test the connection and the authorization process.":
      "comando para probar la conexión y el proceso de autorización.",
    "Default Workspace ID (the UUID of the workspace, e.g. 123e4567-e89b-12d3-a456-426614174000)":
      "ID de espacio de trabajo predeterminado (el UUID del espacio de trabajo, p. ej., 123e4567-e89b-12d3-a456-426614174000)",
    "Default Workspace Name":
      "Nombre del espacio de trabajo predeterminado",
    "Deprecated. Use Cisco Secure Malware Analytics (Threat Grid) v2 instead.":
      "Obsoleto. Utilice en su lugar Cisco Secure Malware Analytics (Threat Grid) v2.",
    "Enter your Client ID in the":
      "Introduzca su Client ID en el campo",
    "Enter your redirect URI in the":
      "Introduzca su URI de redirección en el campo",
    "Follow these steps for client-credentials configuration.":
      "Siga estos pasos para la configuración de credenciales de cliente.",
    "For more details about the authentication used in this integration, see":
      "Para obtener más información sobre la autenticación utilizada en esta integración, consulte",
    "Full documentation for this integration is available in the":
      "La documentación completa de esta integración está disponible en",
    "Get the Additional Instance Parameters":
      "Obtener los parámetros adicionales de la instancia",
    "IAM integration for Clarizen. Handles user account auto-provisioning to Clarizen.":
      "Integración de IAM para Clarizen. Gestiona el aprovisionamiento automático de cuentas de usuario en Clarizen.",
    "ID / Client ID":
      "ID / ID de cliente",
    "Key / Client Secret":
      "Clave / Secreto de cliente",
    "Token / Tenant ID":
      "Token / ID de tenant",
    "In the instance configuration, select the":
      "En la configuración de la instancia, seleccione la opción",
    "In the self-deployed mode, you can authenticate by using one of the following flows:":
      "En el modo autoimplementado, puede autenticarse mediante uno de los siguientes flujos:",
    "Locking mechanism that prevents concurrent execution of different tasks":
      "Mecanismo de bloqueo que impide la ejecución simultánea de distintas tareas",
    "Microsoft Integrations - Authentication":
      "Integraciones de Microsoft: autenticación",
    "page of the app.":
      "de la aplicación.",
    "Redirect URI":
      "URI de redirección",
    "reference docs":
      "documentación de referencia",
    "Save the integration settings.":
      "Guarde la configuración de la integración.",
    "Self-Deployed Application Authentication guide":
      "guía de autenticación de aplicaciones autoimplementadas",
    "Server URL (e.g., https://management.azure.com)":
      "URL del servidor (p. ej., https://management.azure.com)",
    "Subscription ID":
      "Subscription ID",
    "The Certificate Thumbprint is used for certificate authentication as it appears on the":
      "La huella digital del certificado se utiliza para la autenticación con certificado, tal como aparece en la página",
    "The private key of the registered certificate, used for certificate authentication.":
      "La clave privada del certificado registrado, que se utiliza para la autenticación con certificado.",
    "Used for certificate authentication. The private key of the registered certificate.":
      "Se utiliza para la autenticación con certificado. La clave privada del certificado registrado.",
    "There are two authentication methods available:":
      "Hay dos métodos de autenticación disponibles:",
    "to configure and enable authentication.":
      "para configurar y habilitar la autenticación.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, go to the":
      "Para usar una aplicación de Azure configurada por usted, debe agregar un nuevo registro de aplicación de Azure en Azure Portal. Para agregar el registro, vaya a",
    "Use a self-deployed Azure application - Authorization Code flow":
      "Usar una aplicación de Azure autoimplementada: flujo de código de autorización",
    "Use a self-deployed Azure application - Client Credentials Authorization Flow":
      "Usar una aplicación de Azure autoimplementada: flujo de autorización de credenciales de cliente",
    "Use a self-deployed Azure application - Client Credentials Flow":
      "Usar una aplicación de Azure autoimplementada: flujo de credenciales de cliente",
    "Use Core REST APIs.":
      "Utilice las API REST de Core.",
    "Use Gov Account Settings":
      "Usar la configuración de cuenta gubernamental",
    "Use the Code42 integration to identify potential data exfiltration from insider threats while speeding investigation and response by providing fast access to file events and metadata across physical and cloud environments.":
      "Utilice la integración de Code42 para identificar posibles filtraciones de datos por amenazas internas y agilizar la investigación y la respuesta, al ofrecer acceso rápido a los eventos y metadatos de archivos en entornos físicos y en la nube.",
    "Workspace ID":
      "ID del espacio de trabajo",
    "Workspace Name":
      "Nombre del espacio de trabajo",
    "Workspace Settings":
      "Configuración del espacio de trabajo",

    // --- Batch: strings from the Collector export #3 (Azure Key Vault / Azure Compute / Azure Risky Users docs, Azure Event Hub & Azure DevOps wizards) ---
    // Fragments such as "and", "or", "The", "Set", "In the", "Run the", "Go to the", "Select the" are intentionally NOT registered.
    ": In Azure, go to Organization Settings → Security → Policies → toggle \"Third-party application access via OAuth\" ON. (":
      ": En Azure, vaya a Organization Settings → Security → Policies → active \"Third-party application access via OAuth\". (",
    "(Client ID)":
      "(ID de cliente)",
    "(Client Secret (for Client Credentials mode))":
      "(Secreto de cliente (para el modo de credenciales de cliente))",
    "Add consumer group":
      "Agregar grupo de consumidores",
    "After authorizing the Demisto app, you will receive an ID, Token, and Key, which needs to be added to the integration instance configuration’s corresponding fields. After giving consent, the application must have a role assigned, so it can access the relevant resources per subscription.":
      "Tras autorizar la aplicación Demisto, recibirá un ID, un token y una clave que deben agregarse a los campos correspondientes de la configuración de la instancia de integración. Tras otorgar el consentimiento, es necesario asignar un rol a la aplicación para que pueda acceder a los recursos pertinentes de cada suscripción.",
    "After saving the client secret, the value of the client secret is displayed.":
      "Después de guardar el secreto de cliente, se muestra su valor.",
    "After the Azure Key Vault integration instance is created, the credentials will be fetched":
      "Una vez creada la instancia de integración de Azure Key Vault, las credenciales se recuperarán y se guardarán",
    "to the Cortex credentials store in the following format:":
      "en el almacén de credenciales de Cortex con el siguiente formato:",
    "At the end of the process you’ll see a message that you’ve logged in successfully.":
      "Al final del proceso, verá un mensaje que indica que ha iniciado sesión correctamente.",
    "Authenticate with your personal Microsoft account. Simple setup via OAuth redirect.":
      "Autentíquese con su cuenta personal de Microsoft. Configuración sencilla mediante redirección de OAuth.",
    "Authentication Type":
      "Tipo de autenticación",
    "Authentication Type.":
      "Tipo de autenticación.",
    "Authentication Using the Client Credentials Flow (recommended)":
      "Autenticación mediante el flujo de credenciales de cliente (recomendado)",
    "Authentication Using the Device Flow":
      "Autenticación mediante el flujo de dispositivo",
    "Authorization":
      "Autorización",
    "Authorize":
      "Autorizar",
    "Authorize Cortex for Azure Key Vault":
      "Autorizar Cortex para Azure Key Vault",
    "Application ID":
      "ID de aplicación",
    "Azure app registration article":
      "artículo sobre el registro de aplicaciones de Azure",
    "Azure Cloud":
      "Nube de Azure",
    "Azure DevOps auth with Entra ID Prerequisites:":
      "Requisitos previos de la autenticación de Azure DevOps con Entra ID:",
    "Azure Key Vault - permission user_impersonation of type Delegated":
      "Azure Key Vault: permiso user_impersonation de tipo Delegated",
    "Azure Managed Identities":
      "Identidades administradas de Azure",
    "Azure Managed Identities Authentication":
      "Autenticación con identidades administradas de Azure",
    "Azure Managed Identities client ID":
      "ID de cliente de las identidades administradas de Azure",
    "Azure Managed Identities Client ID":
      "ID de cliente de las identidades administradas de Azure",
    "Azure Portal":
      "Azure Portal",
    "Azure Service Management - permission user_impersonation of type Delegated":
      "Azure Service Management: permiso user_impersonation de tipo Delegated",
    "Check Fetches credentials parameter.":
      "Marque el parámetro «Recuperar credenciales».",
    "Choose Authentication Method":
      "Elegir método de autenticación",
    "Client Secret (for Client Credentials mode)":
      "Secreto de cliente (para el modo de credenciales de cliente)",
    "command - a ‘Success’ message should be printed to the war-room.":
      "comando: se debe imprimir un mensaje «Success» en la war-room.",
    "Configure Account":
      "Configurar cuenta",
    "Configure Azure Risky Users on Cortex Navigate to":
      "Configure Azure Risky Users en Cortex. Vaya a",
    "Confirm your Azure DevOps organization is connected to Microsoft Entra ID. (":
      "Confirme que su organización de Azure DevOps esté conectada a Microsoft Entra ID. (",
    "consumer group":
      "grupo de consumidores",
    "Copy the Application ID and store it in the Client ID parameter.":
      "Copie el ID de aplicación y guárdelo en el parámetro Client ID.",
    "Copy the Directory (tenant) ID and enter it in the Tenant ID parameter.":
      "Copie el Directory (tenant) ID e introdúzcalo en el parámetro Tenant ID.",
    "Copy the Subscription ID and enter it in the Subscription ID parameter.":
      "Copie el Subscription ID e introdúzcalo en el parámetro Subscription ID.",
    "Copy this value and enter it in the Client Secret parameter.":
      "Copie este valor e introdúzcalo en el parámetro Client Secret.",
    "Copy your resource group name and enter it in the Resource Group Name parameter.":
      "Copie el nombre de su grupo de recursos e introdúzcalo en el parámetro Resource Group Name.",
    "Cortex App":
      "Aplicación de Cortex",
    "Cortex Azure App":
      "Aplicación de Azure de Cortex",
    "Cortex XSOAR Application":
      "aplicación de Cortex XSOAR",
    "Credential Name: KEY_VAULT_NAME/SECRET_NAME":
      "Nombre de la credencial: KEY_VAULT_NAME/SECRET_NAME",
    "Credentials Fetch Mode":
      "Modo de recuperación de credenciales",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production.":
      "Se recomienda usar el registro de depuración/detallado solo durante la solución de problemas. El registro puede afectar al rendimiento de la integración. Lo recomendable es activarlo durante la configuración y la solución de problemas, y desactivarlo en producción.",
    "Debug/Verbose logging is recommended only during troubleshooting. Logging can affect the performance of the integration. Recommended usage is to turn logging on during setup and troubleshooting, and then turn it off in production. These settings only affect the integration log. The server log is not affected.":
      "Se recomienda usar el registro de depuración/detallado solo durante la solución de problemas. El registro puede afectar al rendimiento de la integración. Lo recomendable es activarlo durante la configuración y la solución de problemas, y desactivarlo en producción. Esta configuración solo afecta al registro de la integración. El registro del servidor no se ve afectado.",
    "These settings only affect the integration log. The server log is not affected.":
      "Esta configuración solo afecta al registro de la integración. El registro del servidor no se ve afectado.",
    "Default Resource Group Name":
      "Nombre del grupo de recursos predeterminado",
    "Default Subscription ID":
      "ID de suscripción predeterminado",
    "Depending on the authentication method that you use, the integration parameters might change.":
      "Según el método de autenticación que utilice, los parámetros de la integración pueden cambiar.",
    "device authorization grant flow":
      "flujo de concesión de autorización de dispositivo",
    "Device authorization grant flow":
      "Flujo de concesión de autorización de dispositivo",
    "Device Code":
      "Código de dispositivo",
    "Enable Azure Event Hub Log Collection":
      "Habilitar la recopilación de registros de Azure Event Hub",
    "Enter account connection string":
      "Introduzca la cadena de conexión de la cuenta",
    "Enter event hub connection string":
      "Introduzca la cadena de conexión del centro de eventos",
    "Enter Product":
      "Introduzca el producto",
    "Enter Vendor":
      "Introduzca el proveedor",
    "Enter your Client Secret in the":
      "Introduzca su secreto de cliente en el campo",
    "Enter your Client/Application ID in the":
      "Introduzca su ID de cliente/aplicación en el campo",
    "Enter your Tenant ID in the":
      "Introduzca su ID de tenant en el campo",
    "field in the instance configuration.":
      "de la configuración de la instancia.",
    "field in the instance settings.":
      "de la configuración de la instancia.",
    "Entra ID — Choose Identity Type":
      "Entra ID: elegir tipo de identidad",
    "event hub connection string":
      "cadena de conexión del centro de eventos",
    "External Credentials Vault (on-demand)":
      "Almacén de credenciales externo (a petición)",
    "Fetch credentials from Azure Key Vault":
      "Recuperar credenciales de Azure Key Vault",
    "Fetches credentials":
      "Recuperar credenciales",
    "Fill in the required parameters.":
      "Rellene los parámetros obligatorios.",
    "Fill Key Vault names to fetch secrets from.":
      "Introduzca los nombres de los Key Vault de los que recuperar secretos.",
    "Fill secret names to fetch.":
      "Introduzca los nombres de los secretos que desea recuperar.",
    "Follow one of these steps for authentication based on Azure Managed Identities:":
      "Siga uno de estos pasos para la autenticación basada en identidades administradas de Azure:",
    "Follow the instructions that appear.":
      "Siga las instrucciones que aparecen.",
    "Follow these steps for a":
      "Siga estos pasos para una",
    "Follow these steps for a self-deployed configuration:":
      "Siga estos pasos para una configuración autoimplementada:",
    "self-deployed configuration":
      "configuración autoimplementada",
    "For information about Azure Managed Identities see":
      "Para obtener información sobre las identidades administradas de Azure, consulte",
    "For more information, see the integration documentation.":
      "Para obtener más información, consulte la documentación de la integración.",
    "From App registrations in Azure AD, select your application.":
      "En App registrations de Azure AD, seleccione su aplicación.",
    "Get client ID and tenant ID values":
      "Obtener los valores de ID de cliente e ID de tenant",
    "Get client secret value":
      "Obtener el valor del secreto de cliente",
    "Get Subscription ID and the Resource Group values":
      "Obtener los valores de Subscription ID y del grupo de recursos",
    "Host URL (e.g. https://management.azure.com)":
      "URL del host (p. ej., https://management.azure.com)",
    "if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations will list the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command actually executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only. Nothing is persisted in Cortex.":
      "si su política de seguridad no permite almacenar secretos en el almacén de credenciales de Cortex. En este modo, el selector de credenciales de otras integraciones muestra los secretos configurados por nombre (KEY_VAULT_NAME/SECRET_NAME), pero no se extraen valores secretos de Azure Key Vault. Cuando un playbook o comando ejecuta realmente una integración que usa una de esas credenciales, el valor del secreto se recupera en directo de Azure Key Vault y se pasa únicamente en memoria. No se conserva nada en Cortex.",
    "In order to fetch credentials to the Cortex credentials store,you should follow the next steps:":
      "Para recuperar credenciales en el almacén de credenciales de Cortex, siga estos pasos:",
    "In order to use the Cortex Azure application,":
      "Para usar la aplicación de Azure de Cortex,",
    "In the Azure portal, select Entra ID.":
      "En el portal de Azure, seleccione Entra ID.",
    "In the Azure portal, select Resource groups.":
      "En el portal de Azure, seleccione Resource groups.",
    "The default mode":
      "El modo predeterminado",
    "keeps the existing behavior: The secret values are fetched and stored in the Cortex credentials store.":
      "mantiene el comportamiento existente: los valores de los secretos se recuperan y se almacenan en el almacén de credenciales de Cortex.",
    "Key Vault names - a comma separated list of Key Vaults to fetch secrets from.":
      "Nombres de Key Vault: lista separada por comas de los Key Vault de los que se recuperarán secretos.",
    "Learn how":
      "Más información",
    "link new tab icon":
      "Icono de enlace a nueva pestaña",
    "Make sure the following permissions are granted for the app registration:":
      "Asegúrese de que se concedan los siguientes permisos para el registro de la aplicación:",
    "Make sure to provide the following permissions for the app to work with Azure Risky Users:":
      "Asegúrese de conceder los siguientes permisos para que la aplicación funcione con Azure Risky Users:",
    "Manage policies":
      "Administrar políticas",
    "Managed Identities":
      "Identidades administradas",
    "Managed identities for Azure resources":
      "Identidades administradas para recursos de Azure",
    "Microsoft article":
      "artículo de Microsoft",
    "Microsoft Entra ID authentication":
      "Autenticación de Microsoft Entra ID",
    "Microsoft integrations (Graph and Azure) in Cortex use Entra ID applications to authenticate with Microsoft APIs. These integrations use OAuth 2.0 and OpenID Connect standard-compliant authentication services, which use an Application to sign-in or delegate authentication. For more information, see the Microsoft identity platform overview.":
      "Las integraciones de Microsoft (Graph y Azure) de Cortex usan aplicaciones de Entra ID para autenticarse con las API de Microsoft. Estas integraciones utilizan servicios de autenticación compatibles con los estándares OAuth 2.0 y OpenID Connect, que emplean una aplicación para iniciar sesión o delegar la autenticación. Para obtener más información, consulte la información general de la plataforma de identidad de Microsoft.",
    "Note: This option is relevant only if the integration is running on Azure VM.":
      "Nota: esta opción solo es relevante si la integración se ejecuta en una máquina virtual de Azure.",
    "Only necessary in case a Samples Feed is fetched.":
      "Solo es necesario cuando se recupera un feed de muestras.",
    "Password: SECRET_VALUE":
      "Contraseña: SECRET_VALUE",
    "Username: SECRET_NAME":
      "Nombre de usuario: SECRET_NAME",
    "Provide a description of the secret, and a duration. When done, select Add.":
      "Proporcione una descripción del secreto y una duración. Cuando termine, seleccione Add.",
    "Relevant only for sample feeds. JSON styled AutoFocus query, an example can be found in the description (?) section. mandatory for Samples Feed.":
      "Solo es relevante para feeds de muestras. Consulta de AutoFocus con formato JSON; puede encontrar un ejemplo en la sección de descripción (?). Obligatorio para el feed de muestras.",
    "Required Permissions":
      "Permisos necesarios",
    "Save the instance.":
      "Guarde la instancia.",
    "Search for AzureRiskyUsers.":
      "Busque AzureRiskyUsers.",
    "Secret names - a comma separated list of secrets to fetch.":
      "Nombres de secretos: lista separada por comas de los secretos que se recuperarán.",
    "See documentation":
      "Ver documentación",
    "Select Certificates & secrets.":
      "Seleccione Certificates & secrets.",
    "Select Client secrets -> New client secret.":
      "Seleccione Client secrets -> New client secret.",
    "Select Repositories":
      "Seleccionar repositorios",
    "Select this checkbox if you are using a self-deployed Azure application.":
      "Marque esta casilla si utiliza una aplicación de Azure autoimplementada.",
    "Select your resource group name.":
      "Seleccione el nombre de su grupo de recursos.",
    "Select your User Assigned Managed Identity -> copy the Client ID -> paste it in the":
      "Seleccione su identidad administrada asignada por el usuario -> copie el Client ID -> péguelo en el campo",
    "Self-Deployed App":
      "Aplicación autoimplementada",
    "Self-Deployed Application":
      "Aplicación autoimplementada",
    "Self-Deployed Authentication":
      "Autenticación autoimplementada",
    "Self-Deployed Azure App":
      "Aplicación de Azure autoimplementada",
    "Service Principal":
      "Entidad de servicio",
    "storage account connection string":
      "cadena de conexión de la cuenta de almacenamiento",
    "Store in Cortex":
      "Almacenar en Cortex",
    "Support for MSA users through Microsoft Entra OAuth is still in progress on Microsoft's side. (":
      "La compatibilidad con usuarios MSA mediante Microsoft Entra OAuth aún está en desarrollo por parte de Microsoft. (",
    "Supports CSV values.":
      "Admite valores CSV.",
    "Tenant ID (for Client Credentials mode)":
      "ID de tenant (para el modo de credenciales de cliente)",
    "The mode for fetching credentials. Set to \"External Credentials Vault (on-demand)\" if your security policy does not allow secrets to be stored inside the Cortex credentials store. In this mode, the credentials picker in other integrations lists the configured secrets by name (KEY_VAULT_NAME/SECRET_NAME), but no secret values are pulled from Azure Key Vault. When a playbook or command executes an integration that uses one of those credentials, the secret value is fetched live from Azure Key Vault and is passed in memory only.":
      "El modo de recuperación de credenciales. Establézcalo en \"External Credentials Vault (on-demand)\" si su política de seguridad no permite almacenar secretos en el almacén de credenciales de Cortex. En este modo, el selector de credenciales de otras integraciones muestra los secretos configurados por nombre (KEY_VAULT_NAME/SECRET_NAME), pero no se extraen valores secretos de Azure Key Vault. Cuando un playbook o comando ejecuta una integración que usa una de esas credenciales, el valor del secreto se recupera en directo de Azure Key Vault y se pasa únicamente en memoria.",
    "There are 2 application authentication methods available:":
      "Hay 2 métodos de autenticación de aplicaciones disponibles:",
    "This parameter can be overridden by the resource_group argument in any command.":
      "Este parámetro se puede reemplazar con el argumento resource_group en cualquier comando.",
    "To allow us access to Azure Compute, an administrator has to approve the Demisto app using an admin consent flow, by clicking":
      "Para permitirnos el acceso a Azure Compute, un administrador debe aprobar la aplicación Demisto mediante un flujo de consentimiento de administrador, haciendo clic en",
    "To use a self-configured Azure application, add a new Azure App Registration in the Azure Portal. To add the registration, see the":
      "Para usar una aplicación de Azure configurada por usted, agregue un nuevo registro de aplicación de Azure en Azure Portal. Para agregar el registro, consulte",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal, with mobile and desktop flows enabled.":
      "Para usar una aplicación de Azure configurada por usted, debe agregar un nuevo registro de aplicación de Azure en Azure Portal, con los flujos para móvil y escritorio habilitados.",
    "To use a self-configured Azure application, you need to add a new Azure App Registration in the Azure Portal. To add the registration, refer to the following":
      "Para usar una aplicación de Azure configurada por usted, debe agregar un nuevo registro de aplicación de Azure en Azure Portal. Para agregar el registro, consulte lo siguiente:",
    "To use System Assigned Managed Identity":
      "Para usar la identidad administrada asignada por el sistema",
    "To use User Assigned Managed Identity":
      "Para usar la identidad administrada asignada por el usuario",
    "Token (received from the admin consent - see Detailed Instructions (?) section)":
      "Token (recibido del consentimiento del administrador; consulte la sección de instrucciones detalladas (?))",
    "Use a self-deployed Azure Application":
      "Usar una aplicación de Azure autoimplementada",
    "Use an application identity (not tied to a person). Requires Entra ID admin to grant consent.":
      "Utilice una identidad de aplicación (no vinculada a una persona). Requiere que un administrador de Entra ID otorgue el consentimiento.",
    "Use Azure Managed Identities":
      "Usar identidades administradas de Azure",
    "use the Client ID - (application_id) (":
      "use el Client ID - (application_id) (",
    "User Authentication":
      "Autenticación de usuario",
    "Worldwide":
      "Todo el mundo",
  },

  patterns: [
    { re: /^(\d+)\s+Instances? Configured$/, tpl: "$1 instancias configuradas" },
    { re: /^(\d+\/\d+)\s+connected$/, tpl: "$1 conectados" },
    { re: /^([\d,]+)\s+selected out of\s+([\d,]+)$/, tpl: "$1 seleccionados de $2" },
    { re: /^(\d+)\s+Warnings,?$/, tpl: "$1 advertencias," },
    { re: /^Found (\d+) deployed connectors\. For all clusters go to$/, tpl: "Se encontraron $1 conectores implementados. Para ver todos los clústeres, vaya a" },
    { re: /^(\d+)\s+Errors$/, tpl: "$1 errores" },
    { re: /^(\d+)\s+result$/, tpl: "$1 resultado" },
    { re: /^\(\s*(\d+)\s+Mapped\s*\)$/, tpl: "( $1 asignados )" },
    { re: /^Integration Author:\s*(.+)$/, tpl: "Autor de la integración: $1" },
  ],

  skip: [],
};
