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

const dictionaryRulesAndPolicies = {
  exact: {
    "Auto resolve": "Resolución automática",
    "AI and Machine Learning": "IA y aprendizaje automático",
    "Validate Code": "Validar código",
    "Cloud Type:": "Tipo de nube:",
    "Issues Count:": "Número de incidencias:",
    "Findings Count:": "Número de hallazgos:",
    "Cases Count:": "Número de casos:",
    "Asset Types:": "Tipos de activos:",
    "Mode:": "Modo:",
    "Remove the krbtgt service from the account's msDS-AllowedToDelegateTo attribute immediately. In Active Directory Users and Computers, open the account properties, go to the Delegation tab, and remove any entries referencing the krbtgt service. There is no legitimate reason for an account to have constrained delegation to krbtgt. Investigate whether this configuration was set maliciously as it could indicate a persistence mechanism.":
      "Quite inmediatamente el servicio krbtgt del atributo msDS-AllowedToDelegateTo de la cuenta. En Usuarios y equipos de Active Directory, abra las propiedades de la cuenta, vaya a la pestaña Delegación y elimine todas las entradas que hagan referencia al servicio krbtgt. No existe ningún motivo legítimo para que una cuenta tenga delegación restringida a krbtgt. Investigue si esta configuración se estableció de forma malintencionada, ya que podría indicar un mecanismo de persistencia.",
    "No Compliance Controls Assigned": "No hay controles de cumplimiento asignados",
    "This rule currently has no assigned compliance controls. To assign controls, edit the rule and add the required compliance controls.":
      "Esta regla no tiene actualmente controles de cumplimiento asignados. Para asignar controles, edite la regla y agregue los controles de cumplimiento necesarios.",
    "Certain dynamic filter conditions such as asset fields, are calculated at runtime and not displayed as a part of the policy preview.":
      "Algunas condiciones de filtro dinámicas, como los campos de activos, se calculan en tiempo de ejecución y no se muestran en la vista previa de la política.",
    "Enter CVE or vulnerability IDs here...": "Introduzca aquí CVE o ID de vulnerabilidad...",
    "Enter an Asset Group name here...": "Introduzca aquí el nombre de un grupo de activos...",
    "Enter an asset name or Asset ID here...": "Introduzca aquí el nombre o el ID de un activo...",
    "Start typing to search...": "Empiece a escribir para buscar...",
    "Ignored CVEs and Assets": "CVE y activos ignorados",
    "Ignored Items": "Elementos ignorados",
    "Ignored Vulnerabilities": "Vulnerabilidades ignoradas",
    "Ignored Asset Groups": "Grupos de activos ignorados",
    "Ignored Assets": "Activos ignorados",
    "Preview": "Vista previa",
    "Select CVEs, Asset Groups, and Assets to ignore from vulnerability policy evaluation.":
      "Seleccione las CVE, los grupos de activos y los activos que se omitirán en la evaluación de la política de vulnerabilidades.",
    "No Issues will be generated for the following CVEs and vulnerabilities. Findings for these CVEs and vulnerabilities will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "No se generarán incidencias para las siguientes CVE y vulnerabilidades. Los hallazgos de estas CVE y vulnerabilidades seguirán apareciendo en la vista Vulnerability Findings y se seguirán contabilizando en los paneles basados en datos de hallazgos.",
    "Vulnerability IDs": "ID de vulnerabilidades",
    "No Issues will be generated for the following Asset Groups. Findings for these Asset Groups will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "No se generarán incidencias para los siguientes grupos de activos. Los hallazgos de estos grupos de activos seguirán apareciendo en la vista Vulnerability Findings y se seguirán contabilizando en los paneles basados en datos de hallazgos.",
    "No Issues will be generated for the following Assets. Findings for these Assets will still appear in the Vulnerability Findings view and will still be counted in dashboards based on Findings data.":
      "No se generarán incidencias para los siguientes activos. Los hallazgos de estos activos seguirán apareciendo en la vista Vulnerability Findings y se seguirán contabilizando en los paneles basados en datos de hallazgos.",
    "Vulnerability Policies - Prevention": "Vulnerability Policies - Prevención",
    "Kubernetes Runtime Protection": "Protección en tiempo de ejecución de Kubernetes",
    "These actions are available for Findings on Kubernetes clusters with Kubernetes Admission Controller activated.":
      "Estas acciones están disponibles para los hallazgos en clústeres de Kubernetes con Kubernetes Admission Controller activado.",
    "Learn how to increase coverage.": "Descubra cómo aumentar la cobertura.",
    "Kubernetes Pod Actions": "Acciones de pods de Kubernetes",
    "Do nothing": "No hacer nada",
    "Prevent new deployment requests": "Impedir nuevas solicitudes de implementación",
    "Is Malicious": "Es malicioso",
    "Used In Code": "Usado en el código",
    "Used In Deploy": "Usado en la implementación",
    "Used In Runtime": "Usado en tiempo de ejecución",
    "Package Subtype": "Subtipo de paquete",
    "Organization impact": "Impacto en la organización",
    "Show alternatives": "Mostrar alternativas",
    "Assets by software development stage": "Activos por etapa de desarrollo de software",
    "Image Size": "Tamaño de la imagen",
    "Runtime Function": "Función en tiempo de ejecución",
    "Trust Score": "Puntuación de confianza",
    "Package Symbols": "Símbolos del paquete",
    "Package Author": "Autor del paquete",
    "Finding First Observed": "Primera observación del hallazgo",
    "Framework/Language": "Framework/lenguaje",
    "Policies Count": "Número de políticas",
    "Mapped Cloud Security Rule": "Regla de seguridad en la nube asignada",
    "Created Date": "Fecha de creación",
    "Suppressions": "Supresiones",
    "Resource Types": "Tipos de recursos",
    "Is Enabled": "Está habilitado",
    "Rule Impact": "Impacto de la regla",
    "Select Category": "Seleccionar categoría",
    "Add Rule Name": "Agregar nombre de la regla",
    "Mapped Runtime Rule": "Regla de tiempo de ejecución asignada",
    "Add label...": "Agregar etiqueta...",
    "Select framework": "Seleccionar framework",
    "Select subcategory": "Seleccionar subcategoría",
    "Set the general details for this rule": "Defina los detalles generales de esta regla",
    "Use Enter to apply a label": "Pulse Intro para aplicar una etiqueta",
    "Enter a name for this rule": "Introduzca un nombre para esta regla",
    "Give this rule a brief description": "Proporcione una breve descripción de esta regla",
    "Enter a remediation": "Introduzca una corrección",
    "Name is required": "El nombre es obligatorio",
    "Description is required": "La descripción es obligatoria",
    "Define the logic for your rule": "Defina la lógica de la regla",
    "Back": "Volver",
    "Generate Previerw": "Generar vista previa",
    "No Preview": "Sin vista previa",
    "To see potential matches, enter your query and click \"Generate Preview\".":
      "Para ver las posibles coincidencias, introduzca la consulta y haga clic en \"Generate Preview\".",
    "Create Issue": "Crear incidencia",
    "Generate Preview": "Generar vista previa",
    "Rule name is required": "El nombre de la regla es obligatorio",
    "Give this Rule a brief description...": "Proporcione una breve descripción de esta regla...",
    "Select issue severity": "Seleccionar la gravedad de la incidencia",
    "Enable Remediation": "Habilitar corrección",
    "(Optional)": "(Opcional)",
    "Assign a Configuration Rule To Custom Compliance Controls": "Asignar una regla de configuración a controles de cumplimiento personalizados",
    "You can assign a configuration rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "Puede asignar una regla de configuración a uno o más controles de cumplimiento personalizados para adaptar las comprobaciones de cumplimiento a las necesidades de su organización.",
    "Add actions to take once a rule has been violated.": "Agregue las acciones que se realizarán cuando se infrinja una regla.",
    "Compliance Controls (": "Controles de cumplimiento (",
    "Be Advised": "Aviso",
    "Switching modes will remove any unsaved edits. Continue?": "Al cambiar de modo se eliminarán las modificaciones no guardadas. ¿Desea continuar?",
    "Rule Logic": "Lógica de la regla",
    "Define logic for your rule": "Defina la lógica de la regla",
    "Define the logic for your rule.": "Defina la lógica de la regla.",
    "Simple Mode": "Modo simple",
    "Advanced Mode": "Modo avanzado",
    "instructions": "instrucciones",
    "Define your rule's query. Be sure to follow the": "Defina la consulta de la regla. Asegúrese de seguir las",
    "Run query to populate values": "Ejecute la consulta para rellenar los valores",
    "Query validation failed.": "Error en la validación de la consulta.",
    "Query validated successfully.": "La consulta se validó correctamente.",
    "Affected Asset Type:": "Tipo de activo afectado:",
    "The rule must end with a 'fields' stage.": "La regla debe terminar con una etapa 'fields'.",
    "Add details for this Config Rule": "Agregar detalles de esta Config Rule",
    "Add details for this Data Rule": "Agregar detalles de esta Data Rule",
    "Create Data Rule": "Crear Data Rule",
    "Add details for this Identity Rule": "Agregar detalles de esta Identity Rule",
    "Create Identity Rule": "Crear Identity Rule",
    "Create Network Exposure Rule": "Crear Network Exposure Rule",
    "Add details for this Network Exposure Rule": "Agregar detalles de esta Network Exposure Rule",
    "Add details for this AI Rule": "Agregar detalles de esta AI Rule",
    "Create AI Rule": "Crear AI Rule",
    "Create Attack Path (Legacy) Rule": "Crear Attack Path (Legacy) Rule",
    "Add details for this Attack Path (Legacy) Rule": "Agregar detalles de esta Attack Path (Legacy) Rule",
    "Enter a name for this Rule...": "Introduzca un nombre para esta regla...",
    "Base Images Rules": "Reglas de imágenes base",
    "Create rules to automatically identify your base images": "Cree reglas para identificar automáticamente sus imágenes base",
    "Match Count": "Número de coincidencias",
    "No base image rules yet": "Aún no hay reglas de imágenes base",
    "Create Base Image Rule": "Crear regla de imagen base",
    "Edit Base Image Rule": "Editar regla de imagen base",
    // Verbatim from the product ("Operation system" — likely a typo for "Operating system" — kept as-is
    // to match the real DOM text).
    "Operation system": "Sistema operativo",
    "Define actions for when this rule is violated": "Defina las acciones para cuando se infrinja esta regla",
    "Disable Rule": "Deshabilitar regla",
    "Disabling rule will resolve the open issues matching the rule.":
      "Al deshabilitar la regla se resolverán las incidencias abiertas que coincidan con ella.",
    "Delete Rule": "Eliminar regla",
    "The selected rule will be deleted. However, any issues previously generated by these rules will remain open until resolved.":
      "Se eliminará la regla seleccionada. Sin embargo, las incidencias generadas anteriormente por estas reglas permanecerán abiertas hasta que se resuelvan.",
    "Run preview": "Ejecutar vista previa",
    "Preview your results": "Obtenga una vista previa de los resultados",
    "Generate preview to see matches": "Genere una vista previa para ver las coincidencias",
    "This rule will automatically apply to all current and future matches": "Esta regla se aplicará automáticamente a todas las coincidencias actuales y futuras",
    "Enter registry": "Introduzca el registro",
    "Registry is required": "El registro es obligatorio",
    "Enter repository": "Introduzca el repositorio",
    "Repository is required": "El repositorio es obligatorio",
    "Delete Rule?": "¿Eliminar la regla?",
    "The selected rule will be deleted. Are you sure you want to proceed?": "Se eliminará la regla seleccionada. ¿Seguro que desea continuar?",
    "Based on your query results, the suggested asset-identifying fields appear here. Generated issues will be linked to asset identified by the selected field":
      "Según los resultados de la consulta, aquí aparecen los campos sugeridos para identificar activos. Las incidencias generadas se vincularán al activo identificado por el campo seleccionado",
    "The final 'fields' stage is missing the required 'asset_id' (or 'xdm.asset.id') field.":
      "Falta el campo obligatorio 'asset_id' (o 'xdm.asset.id') en la etapa 'fields' final.",
    "The final 'fields' stage is missing the required 'asset_type_id' (or 'xdm.asset.type.id') field.":
      "Falta el campo obligatorio 'asset_type_id' (o 'xdm.asset.type.id') en la etapa 'fields' final.",
    "Filter stage with xdm.asset.type.id is required": "Se requiere una etapa filter con xdm.asset.type.id",
    "Last evaluated": "Última evaluación",
    "Detection Rules IDs": "ID de reglas de detección",
    "Action Taken On Missing Information": "Acción ante información faltante",
    "Policy name is required.": "El nombre de la política es obligatorio.",
    "Add Policy name": "Agregar nombre de la política",
    "This policy name already exists.": "Este nombre de política ya existe.",
    "No rules selected yet": "Aún no se han seleccionado reglas",
    "Add rules": "Agregar reglas",
    "Rule Remediation": "Corrección de la regla",
    "User Rule Remediation": "Corrección de reglas de usuario",
    "Add rules to policy": "Agregar reglas a la política",
    "Learn about the Prevent action's power, behavior, and prerequisites": "Obtenga información sobre el alcance, el comportamiento y los requisitos previos de la acción Prevent",
    "Applicable assets": "Activos aplicables",
    "Available actions": "Acciones disponibles",
    "Scope Selection Method": "Método de selección del alcance",
    "Default Asset Scopes": "Alcances de activos predeterminados",
    "Assets Scope": "Alcance de activos",
    "All Cloud Workload Hosts (VM Instances)": "Todos los hosts de cargas de trabajo en la nube (instancias de VM)",
    "Open Asset Inventory": "Abrir inventario de activos",
    "Asset types not listed above will not be evaluated.": "Los tipos de activos que no figuran arriba no se evaluarán.",
    "This selection applies the policy and its detection rules to": "Esta selección aplica la política y sus reglas de detección a",
    "asset types available at": "tipos de activos disponibles en la",
    "SDLC Stage.": "etapa de SDLC.",
    "When Asset Groups are selected, this policy applies only to": "Cuando se seleccionan grupos de activos, esta política solo se aplica a",
    "Cloud Workload Container Images, Container Instances, Hosts (VM Instances), Serverless Functions or Kubernetes Workloads":
      "Imágenes de contenedor, instancias de contenedor, hosts (instancias de VM), funciones sin servidor o cargas de trabajo de Kubernetes de cargas de trabajo en la nube",
    "asset types in those groups that are available at the": "tipos de activos de esos grupos que están disponibles en la",
    "Other asset types in the Asset Groups are not evaluated.": "Los demás tipos de activos de los grupos de activos no se evalúan.",
    "Select an Action": "Seleccionar una acción",
    "Issue Severity": "Gravedad de la incidencia",
    "Add remediation guidance": "Agregar orientación de corrección",
    "Issues are automatically resolved when the finding is no longer applicable to the asset or when the affected asset is removed from the inventory.":
      "Las incidencias se resuelven automáticamente cuando el hallazgo ya no es aplicable al activo o cuando el activo afectado se elimina del inventario.",
    "Preview Selection": "Vista previa de la selección",
    "Selected Asset Preview": "Vista previa de los activos seleccionados",
    "Add labels...": "Agregar etiquetas...",
    "Maximum of 50 labels": "Máximo de 50 etiquetas",
    "Start Timestamp": "Marca de tiempo de inicio",
    "End Timestamp": "Marca de tiempo de fin",
    "Last Modified By": "Última modificación por",
    "Findings Count": "Número de hallazgos",
    "Issues Count": "Número de incidencias",
    "Cases Count": "Número de casos",
    "Compliance Standards": "Estándares de cumplimiento",
    "Last Execution Time": "Hora de la última ejecución",
    "SaaS Pillar": "Pilar de SaaS",
    "All Matching Filter Criteria": "Todo lo que coincide con los criterios de filtro",
    "From Rules List": "De la lista de reglas",
    "Select rules for this Policy": "Seleccionar reglas para esta política",
    "Select which rules to be alerted on by using the options available below": "Seleccione las reglas sobre las que se generarán alertas mediante las opciones disponibles a continuación",
    "Add details for this Policy": "Agregar detalles de esta política",
    "View selected": "Ver seleccionados",
    "Making this selection will likely create a large volume of issues. For a more relevant and high fidelity issues, use a filtered selection.":
      "Esta selección probablemente creará un gran volumen de incidencias. Para obtener incidencias más relevantes y precisas, use una selección filtrada.",
    "Select which scope to be alerted on by using the options available below": "Seleccione el alcance sobre el que se generarán alertas mediante las opciones disponibles a continuación",
    "From Asset Groups": "De grupos de activos",
    "Create a Policy for Issue creation": "Crear una política para la creación de incidencias",
    "Create a Policy for Prevention": "Crear una política de prevención",
    "From Cloud Accounts": "De cuentas de nube",
    "Define the detection rule by specifying the criteria to match relevant Malware findings. You can also add exclusion criteria to filter out any Malware findings that meet specific conditions you want to exclude from this policy.":
      "Defina la regla de detección especificando los criterios para que coincidan los hallazgos de malware relevantes. También puede agregar criterios de exclusión para filtrar los hallazgos de malware que cumplan condiciones específicas que desee excluir de esta política.",
    "Set a name and description for the policy.": "Defina un nombre y una descripción para la política.",
    "Enter a name for your policy": "Introduzca un nombre para la política",
    "Enter a description": "Introduzca una descripción",
    "CVE Publish Date": "Fecha de publicación de la CVE",
    "CVE Description": "Descripción de la CVE",
    "Package PURL": "PURL del paquete",
    "Package File Creation Time": "Hora de creación del archivo del paquete",
    "Package Licenses": "Licencias del paquete",
    "Layer ID": "ID de capa",
    "Image": "Imagen",
    "Is derived": "Es derivado",
    "Image Name": "Nombre de la imagen",
    "Volume Asset IDs": "ID de activos de volumen",
    "Volume Path": "Ruta del volumen",
    "Platform ID": "ID de plataforma",
    "Vulnerability Source Asset ID": "ID del activo de origen de la vulnerabilidad",
    "Vulnerability Source Asset": "Activo de origen de la vulnerabilidad",
    "Kubernetes Cluster Name": "Nombre del clúster de Kubernetes",
    "Kubernetes Namespace Name": "Nombre del espacio de nombres de Kubernetes",
    "AST Intrusion Level": "Nivel de intrusión de AST",
    "Affected Services": "Servicios afectados",
    "Affected Service Versions": "Versiones de servicio afectadas",
    "Authentication Status": "Estado de autenticación",
    "AST Vulnerability Status": "Estado de vulnerabilidad de AST",
    "Create a query to select the Findings to take an action on": "Cree una consulta para seleccionar los hallazgos sobre los que se realizará una acción",
    "Create a query to select the Findings to take an action on.": "Cree una consulta para seleccionar los hallazgos sobre los que se realizará una acción.",
    "Limit the assets the policy applies to by setting a scope.": "Limite los activos a los que se aplica la política definiendo un alcance.",
    "Scope to Asset Groups": "Limitar el alcance a grupos de activos",
    "Choose one or more Asset Groups if you want to limit this Policy to Findings from those specific Assets.":
      "Elija uno o más grupos de activos si desea limitar esta política a los hallazgos de esos activos específicos.",
    "Create new Asset Group": "Crear nuevo grupo de activos",
    "The selected actions will be executed automatically when a finding matches a policy.": "Las acciones seleccionadas se ejecutarán automáticamente cuando un hallazgo coincida con una política.",
    "Global Actions": "Acciones globales",
    "These actions are available for all Findings.": "Estas acciones están disponibles para todos los hallazgos.",
    "Set Issue Severity": "Definir la gravedad de la incidencia",
    "Create an Issue for each matching Finding.": "Crear una incidencia por cada hallazgo coincidente.",
    "Ignore matching Findings, do not create Issues": "Ignorar los hallazgos coincidentes y no crear incidencias",
    "Use Default CVE Severity": "Usar la gravedad de CVE predeterminada",
    "Last Triggered": "Última activación",
    "Related Detection Rules": "Reglas de detección relacionadas",
    "Is Custom": "Es personalizado",
    "Asset Group IDs": "ID de grupos de activos",
    "Override Issue Severity": "Anular la gravedad de la incidencia",
    "Is Editable": "Es editable",
    "Is Cloneable": "Es clonable",
    "Suggestion ID": "ID de sugerencia",
    "Triggers & Actions": "Desencadenadores y acciones",
    "Application Security policies define how to respond to code, image, and misconfiguration findings. You can either block the risk (prevent) or create an issue for remediation (detect). Use them to enforce consistent, automated responses to risks before they reach production":
      "Las políticas de Application Security definen cómo responder a los hallazgos de código, imágenes y configuraciones incorrectas. Puede bloquear el riesgo (prevenir) o crear una incidencia para su corrección (detectar). Úselas para aplicar respuestas coherentes y automatizadas a los riesgos antes de que lleguen a producción",
    "Code & Image scanners": "Escáneres de código e imágenes",
    "Scans your code and images for security issues throughout the development lifecycle.":
      "Analiza el código y las imágenes en busca de problemas de seguridad durante todo el ciclo de vida de desarrollo.",
    "CI/CD configuration scanner": "Escáner de configuración de CI/CD",
    "Scans your CI/CD and Version Control System (VCS) environments for insecure configurations.":
      "Analiza sus entornos de CI/CD y de sistema de control de versiones (VCS) en busca de configuraciones no seguras.",
    "Drift detection scanner": "Escáner de detección de desviaciones",
    "Specify the conditions define this policy. When you select multiple finding types, only common filters are available. To apply specific filters for each finding type, use the \"OR\" operator to create separate conditions groups.":
      "Especifique las condiciones que definen esta política. Si selecciona varios tipos de hallazgo, solo estarán disponibles los filtros comunes. Para aplicar filtros específicos a cada tipo de hallazgo, use el operador \"OR\" para crear grupos de condiciones independientes.",
    "Finding Type": "Tipo de hallazgo",
    "Add filter": "Agregar filtro",
    "Add condition group": "Agregar grupo de condiciones",
    "Shared": "Compartido",
    "Shared filters": "Filtros compartidos",
    "Finding Category": "Categoría del hallazgo",
    "The category of detected security findings. A category can include multiple finding types.":
      "Categoría de los hallazgos de seguridad detectados. Una categoría puede incluir varios tipos de hallazgo.",
    "Code filters": "Filtros de código",
    "Indicates whether a finding is part of the security technical debt or newly introduced. Backlog: Findings that existed before the Cortex scanner was first enabled or before a third-party scanner was first ingested for the repository. New: Findings detected afterward.":
      "Indica si un hallazgo forma parte de la deuda técnica de seguridad o es de nueva introducción. Backlog: hallazgos que existían antes de que se habilitara por primera vez el escáner de Cortex o antes de que se ingiriera por primera vez un escáner de terceros para el repositorio. New: hallazgos detectados posteriormente.",
    "Filters findings by their assigned risk impact level to (e.g., Critical, High, Medium, or Low).":
      "Filtra los hallazgos por el nivel de impacto de riesgo asignado (p. ej., crítico, alto, medio o bajo).",
    "Respect Developer Suppression": "Respetar la supresión del desarrollador",
    "AppSec Rule": "Regla de AppSec",
    "AppSec Rule Label": "Etiqueta de regla de AppSec",
    "AppSec Rule Category": "Categoría de regla de AppSec",
    "Has An Automated Fix": "Tiene corrección automática",
    "Iac Tag": "Etiqueta de IaC",
    "Compliance Controls": "Controles de cumplimiento",
    "Specific security controls related to the finding within a compliance standard (e.g., \"Encryption at Rest\"":
      "Controles de seguridad específicos relacionados con el hallazgo dentro de un estándar de cumplimiento (p. ej., \"Encryption at Rest\"",
    "Filters findings based on specific regulatory frameworks like PCI-DSS, SOC2, or HIPAA.":
      "Filtra los hallazgos según marcos normativos específicos como PCI-DSS, SOC2 o HIPAA.",
    "Filters Infrastructure-as-Code (IaC) resources based on metadata tags (e.g., Environment: Production, Owner: DevOps).":
      "Filtra los recursos de Infrastructure-as-Code (IaC) según etiquetas de metadatos (p. ej., Environment: Production, Owner: DevOps).",
    "Identifies findings that can be resolved automatically via a generated Pull Request or an automated patch.":
      "Identifica los hallazgos que se pueden resolver automáticamente mediante una pull request generada o un parche automatizado.",
    "Secret Validity": "Validez del secreto",
    "Filters based on whether the detected secret is still active and usable by an attacker (e.g., Valid, Invalid, No Validation, or Unavailable).":
      "Filtra según si el secreto detectado sigue activo y puede ser utilizado por un atacante (p. ej., Valid, Invalid, No Validation o Unavailable).",
    "Repository File Path": "Ruta del archivo en el repositorio",
    "Filters based on the specific location of a file within your source code repository.":
      "Filtra según la ubicación específica de un archivo dentro de su repositorio de código fuente.",
    "Image filters": "Filtros de imagen",
    "Secret Type": "Tipo de secreto",
    "Filters findings by the category of the exposed secret or the service it belongs to (e.g., AWS Access Key, Stripe API Token, SSH Private Key, or Password).":
      "Filtra los hallazgos por la categoría del secreto expuesto o el servicio al que pertenece (p. ej., AWS Access Key, Stripe API Token, SSH Private Key o Password).",
    "Targets specific files or directories located within a container image filesystem.":
      "Se centra en archivos o directorios específicos ubicados en el sistema de archivos de una imagen de contenedor.",
    "Filters by the specific name of a file discovered in a scan (e.g., id_rsa, passwd, or config.yaml).":
      "Filtra por el nombre específico de un archivo descubierto en un análisis (p. ej., id_rsa, passwd o config.yaml).",
    "File Size": "Tamaño del archivo",
    "Filters based on the total data size of the file (e.g., files larger than 100MB or exactly 0KB).":
      "Filtra según el tamaño total de datos del archivo (p. ej., archivos de más de 100MB o de exactamente 0KB).",
    "File Line": "Línea del archivo",
    "Identifies the specific line number within a file where the finding was detected (e.g., line 42).":
      "Identifica el número de línea específico dentro de un archivo donde se detectó el hallazgo (p. ej., línea 42).",
    "File Owner Name": "Nombre del propietario del archivo",
    "Filters by the username of the account that owns the file on the system (e.g., root, admin, or www-data).":
      "Filtra por el nombre de usuario de la cuenta propietaria del archivo en el sistema (p. ej., root, admin o www-data).",
    "File Group Name": "Nombre del grupo del archivo",
    "Filters by the name of the primary group assigned to the file (e.g., sudo, docker, or users).":
      "Filtra por el nombre del grupo principal asignado al archivo (p. ej., sudo, docker o users).",
    "File Group ID": "ID del grupo del archivo",
    "Filters by the numeric Group ID (GID) assigned to the file (e.g., GID 1001).":
      "Filtra por el ID de grupo numérico (GID) asignado al archivo (p. ej., GID 1001).",
    "File Permissions - owner": "Permisos del archivo - propietario",
    "Filters by the specific access rights granted to the file's owner (e.g., rwx, rw, or r).":
      "Filtra por los derechos de acceso específicos otorgados al propietario del archivo (p. ej., rwx, rw o r).",
    "File Permissions - group": "Permisos del archivo - grupo",
    "Filters by the access rights granted to members of the file's assigned group (e.g., r, rw or rwx).":
      "Filtra por los derechos de acceso otorgados a los miembros del grupo asignado al archivo (p. ej., r, rw o rwx).",
    "File Permissions - others": "Permisos del archivo - otros",
    "Filters by \"World\" permissions—access granted to any user on the system (e.g., checking for rw to find publicly writable files).":
      "Filtra por los permisos \"World\", es decir, el acceso otorgado a cualquier usuario del sistema (p. ej., comprobar rw para encontrar archivos con escritura pública).",
    "File Owner ID": "ID del propietario del archivo",
    "Filters by the numeric User ID (UID) of the file owner (e.g., UID 0 for root).":
      "Filtra por el ID de usuario numérico (UID) del propietario del archivo (p. ej., UID 0 para root).",
    "Filters for vulnerabilities with known, documented exploits available in the wild (e.g., CISA KEV list).":
      "Filtra las vulnerabilidades con exploits conocidos y documentados disponibles en la práctica (p. ej., la lista KEV de CISA).",
    "CVE ID": "CVE ID",
    "Filters by the unique Common Vulnerabilities and Exposures identifier associated with the finding (e.g., CVE-2021-44228).":
      "Filtra por el identificador único de Common Vulnerabilities and Exposures asociado al hallazgo (p. ej., CVE-2021-44228).",
    "Filters by the Common Vulnerability Scoring System impact level, often derived from a numerical score (e.g., Critical, High, Medium, or Low).":
      "Filtra por el nivel de impacto de Common Vulnerability Scoring System, que a menudo se deriva de una puntuación numérica (p. ej., Critical, High, Medium o Low).",
    "Filters findings based on their numerical CVSS score, typically ranging from 0.0 to 10.0 (e.g., values greater than or equal to 7.5).":
      "Filtra los hallazgos según su puntuación CVSS numérica, que normalmente va de 0.0 a 10.0 (p. ej., valores mayores o iguales a 7.5).",
    "Filters based on the Exploit Prediction Scoring System probability score, which estimates the likelihood of a vulnerability being exploited in the next 30 days (e.g., scores higher than 0.1).":
      "Filtra según la puntuación de probabilidad de Exploit Prediction Scoring System, que estima la probabilidad de que una vulnerabilidad sea explotada en los próximos 30 días (p. ej., puntuaciones superiores a 0.1).",
    "Has A Fix": "Tiene corrección",
    "Filter findings with a documented resolution or patch available.": "Filtre los hallazgos que tengan una resolución documentada o un parche disponible.",
    "Is Kev": "Es KEV",
    "Filters for vulnerabilities listed in the CISA Known Exploited Vulnerabilities catalog, which are confirmed to be actively exploited in the wild.":
      "Filtra las vulnerabilidades incluidas en el catálogo CISA Known Exploited Vulnerabilities, cuya explotación activa en la práctica está confirmada.",
    "CVE Fix Available Date": "Fecha de disponibilidad de la corrección de CVE",
    "Filters based on the date a fix or patch was first released for the vulnerability (e.g., fixes released within the last 30 days).":
      "Filtra según la fecha en que se publicó por primera vez una corrección o un parche para la vulnerabilidad (p. ej., correcciones publicadas en los últimos 30 días).",
    "Package Version": "Versión del paquete",
    "Targets specific versions or ranges of a software package (e.g., 1.2.3 or <2.0.0).":
      "Se dirige a versiones o rangos de versiones específicos de un paquete de software (p. ej., 1.2.3 o <2.0.0).",
    "Filters by the name of the specific library or software component (e.g., openssl, lodash, or log4j-core).":
      "Filtra por el nombre de la biblioteca o el componente de software específico (p. ej., openssl, lodash o log4j-core).",
    "Filters based on the date the vulnerability was officially added to the CVE registry.":
      "Filtra según la fecha en que la vulnerabilidad se agregó oficialmente al registro de CVE.",
    "Targets specific characteristics of a vulnerability's impact or ease of use (e.g., Remote Execution, DoS - High, or Attack Complexity: Low).":
      "Se dirige a características específicas del impacto o la facilidad de explotación de una vulnerabilidad (p. ej., Remote Execution, DoS - High o Attack Complexity: Low).",
    "Filters findings by searching for specific keywords or technical details within the official vulnerability summary (e.g., searching for \"buffer overflow,\" \"zero-day,\" or \"unauthenticated access\").":
      "Filtra los hallazgos buscando palabras clave o detalles técnicos específicos dentro del resumen oficial de la vulnerabilidad (p. ej., buscar \"buffer overflow\", \"zero-day\" o \"unauthenticated access\").",
    "Identifies the specific version(s) of a package or software where the vulnerability has been patched (e.g., 1.2.4, 2.0.1).":
      "Identifica la versión o versiones específicas de un paquete o software en las que se ha corregido la vulnerabilidad (p. ej., 1.2.4, 2.0.1).",
    "Grace Period": "Período de gracia",
    "The number of days a finding is allowed to exist before it begins blocking PRs or builds. This is calculated from the Fix Date (for fixable issues) or the Publish Date (if no fix is available).":
      "Número de días que se permite que exista un hallazgo antes de que empiece a bloquear PR o compilaciones. Se calcula a partir de la fecha de corrección (para incidencias corregibles) o de la fecha de publicación (si no hay ninguna corrección disponible).",
    "Package Popularity": "Popularidad del paquete",
    "Identifies packages based on their adoption metrics (e.g., GitHub stars, download counts). Low popularity can often signal higher supply chain risk.":
      "Identifica paquetes según sus métricas de adopción (p. ej., estrellas de GitHub, número de descargas). Una popularidad baja suele indicar un mayor riesgo en la cadena de suministro.",
    "Package Deprecated": "Paquete obsoleto",
    "Filters for packages that have been officially marked as \"deprecated\" or \"end-of-life\" by their maintainers":
      "Filtra los paquetes que sus mantenedores han marcado oficialmente como \"deprecated\" (obsoleto) o \"end-of-life\" (fin de vida útil)",
    "Package Maintained": "Mantenimiento del paquete",
    "Filters based on the activity level of the package's repository, such as the frequency of recent commits or bug fixes":
      "Filtra según el nivel de actividad del repositorio del paquete, como la frecuencia de confirmaciones recientes o de correcciones de errores",
    "Evaluates the long-term viability of a package based on community health, update frequency, and maintenance history":
      "Evalúa la viabilidad a largo plazo de un paquete según la salud de la comunidad, la frecuencia de actualización y el historial de mantenimiento",
    "Package Dependency": "Dependencia del paquete",
    "Allows you to filter by the specific relationship of a package—whether it is a direct dependency or a transitive (indirect) one":
      "Permite filtrar por la relación específica de un paquete: si es una dependencia directa o transitiva (indirecta)",
    "Is AI/ML": "Es AI/ML",
    "Identifies libraries and frameworks specifically associated with Artificial Intelligence and Machine Learning (e.g., PyTorch, TensorFlow).":
      "Identifica bibliotecas y marcos de trabajo asociados específicamente con la inteligencia artificial y el aprendizaje automático (p. ej., PyTorch, TensorFlow).",
    "Affected Software": "Software afectado",
    "Filters findings based on the specific software components, applications, or libraries impacted by a vulnerability (e.g., OpenSSL)":
      "Filtra los hallazgos según los componentes de software, aplicaciones o bibliotecas específicos afectados por una vulnerabilidad (p. ej., OpenSSL)",
    "A boolean (True/False) indicator that identifies whether a vulnerability was inherited from the base image or introduced by the application layers (e.g., True means the flaw exists in the parent image, such as node:alpine or ubuntu:latest).":
      "Indicador booleano (True/False) que identifica si una vulnerabilidad se heredó de la imagen base o la introdujeron las capas de la aplicación (p. ej., True significa que el defecto existe en la imagen principal, como node:alpine o ubuntu:latest).",
    "Filters findings based on the specific filesystem layer of a container image, identified by its unique SHA-256 hash.":
      "Filtra los hallazgos según la capa específica del sistema de archivos de una imagen de contenedor, identificada por su hash SHA-256 único.",
    "The broad name of the OS (e.g., Linux, Windows).": "Nombre general del sistema operativo (p. ej., Linux, Windows).",
    "The specific flavor of the OS (e.g., Ubuntu, RedHat, Debian).": "Variante específica del sistema operativo (p. ej., Ubuntu, RedHat, Debian).",
    "The specific version or \"point release\" of the distribution (e.g., 22.04 or 8.5).":
      "Versión específica o \"point release\" de la distribución (p. ej., 22.04 u 8.5).",
    "Filters based on when the package file was first generated or built.": "Filtra según el momento en que se generó o compiló por primera vez el archivo del paquete.",
    "Groups OS versions by their common ancestry (e.g., Debian-based, RHEL-based).":
      "Agrupa las versiones del sistema operativo por su origen común (p. ej., basadas en Debian, basadas en RHEL).",
    "Filters by the specific legal license assigned to a package (e.g., MIT, Apache 2.0).":
      "Filtra por la licencia legal específica asignada a un paquete (p. ej., MIT, Apache 2.0).",
    "Filters by the Package URL (PURL), a standardized way to identify packages across different ecosystems (e.g., pkg:npm/lodash@4.17.21).":
      "Filtra por la Package URL (PURL), una forma estandarizada de identificar paquetes en distintos ecosistemas (p. ej., pkg:npm/lodash@4.17.21).",
    "The ecosystem the package belongs to (e.g., npm, PyPI, Maven, Go, or OS-level packages).":
      "Ecosistema al que pertenece el paquete (p. ej., npm, PyPI, Maven, Go o paquetes del sistema operativo).",
    "Filters by the specific underlying hardware or cloud architecture (e.g., x86_64, arm64).":
      "Filtra por la arquitectura de hardware o de nube subyacente específica (p. ej., x86_64, arm64).",
    "Image Provider": "Proveedor de la imagen",
    "Identifies the source or registry where the package was retrieved (e.g., Docker Hub, JFrog Artifactory, or AWS ECR).":
      "Identifica el origen o el registro del que se obtuvo el paquete (p. ej., Docker Hub, JFrog Artifactory o AWS ECR).",
    "Filters by the action required to resolve a vulnerability": "Filtra por la acción necesaria para resolver una vulnerabilidad",
    "Filters by the unique identifier for a specific category of finding (finding type id)":
      "Filtra por el identificador único de una categoría específica de hallazgo (finding type id)",
    "License Type": "Tipo de licencia",
    "Filters by the specific name of the legal license assigned to a package (e.g., MPL-2.0, MS-RL, or Sendmail-8.23).":
      "Filtra por el nombre específico de la licencia legal asignada a un paquete (p. ej., MPL-2.0, MS-RL o Sendmail-8.23).",
    "License Category": "Categoría de licencia",
    "Groups packages by their legal risk or permission category (e.g., Non permissive, Strong copyleft, Weak copyleft).":
      "Agrupa los paquetes por su categoría de riesgo legal o de permisos (p. ej., Non permissive, Strong copyleft, Weak copyleft).",
    "Maintained": "Con mantenimiento",
    "Popularity": "Popularidad",
    "Filters by the specific Common Weakness Enumeration identifier assigned to a software flaw (e.g., CWE-79 for Cross-Site Scripting or CWE-89 for SQL Injection).":
      "Filtra por el identificador específico de Common Weakness Enumeration asignado a un defecto de software (p. ej., CWE-79 para Cross-Site Scripting o CWE-89 para inyección SQL).",
    "Language": "Idioma",
    "Filters findings based on the programming language of the source code where the issue was detected (e.g., Java, Python, Go, or JavaScript).":
      "Filtra los hallazgos según el lenguaje de programación del código fuente en el que se detectó la incidencia (p. ej., Java, Python, Go o JavaScript).",
    "OWASP Category": "Categoría de OWASP",
    "Maps findings to the \"Top 10\" web application security risks defined by the Open Web Application Security Project (e.g., A01:2021-Broken Access Control).":
      "Asigna los hallazgos a los riesgos de seguridad de aplicaciones web del \"Top 10\" definidos por Open Web Application Security Project (p. ej., A01:2021-Broken Access Control).",
    "Identifies the origin of the data or the specific tool that reported the finding (e.g., semgrep, checkmarx or other specific third-party security integration).":
      "Identifica el origen de los datos o la herramienta específica que notificó el hallazgo (p. ej., semgrep, checkmarx u otra integración de seguridad de terceros específica).",
    "Filters findings based on the specific scanning engine or technique used to identify them":
      "Filtra los hallazgos según el motor de análisis o la técnica específicos utilizados para identificarlos",
    "File SHA256": "SHA256 del archivo",
    "Create asset groups": "Crear grupos de activos",
    "Build images do not support application-related filters.": "Las imágenes de compilación no admiten filtros relacionados con aplicaciones.",
    "Select either a predefined asset group or apply dynamic filters to target relevant assets. If no selection is made, all assets within your granted scope are included. The policy scope is determined by your SBAC permissions at the time the policy is saved (creation or update). Changes to your SBAC do not automatically modify existing policies.":
      "Seleccione un grupo de activos predefinido o aplique filtros dinámicos para dirigirse a los activos pertinentes. Si no se selecciona nada, se incluirán todos los activos dentro del alcance concedido. El alcance de la política se determina según sus permisos SBAC en el momento en que se guarda la política (creación o actualización). Los cambios en sus permisos SBAC no modifican automáticamente las políticas existentes.",
    "Application Business Criticality": "Criticidad empresarial de la aplicación",
    "Application Business Owner": "Propietario empresarial de la aplicación",
    "Image Names": "Nombres de imagen",
    "Source Branch": "Rama de origen",
    "Repository Id": "ID del repositorio",
    "Is Public Repository": "Es un repositorio público",
    "Has Deployed Assets": "Tiene activos implementados",
    "Has Internet-exposed deployed assets": "Tiene activos implementados expuestos a Internet",
    "Has deployed assets with Access to sensitive data": "Tiene activos implementados con acceso a datos confidenciales",
    "Has deployed assets with privileged capabilities": "Tiene activos implementados con capacidades privilegiadas",
    "Image Architecture": "Arquitectura de la imagen",
    "Organization URL": "URL de la organización",
    "Automated security scanning that runs every 12 hours or on manual request, according to the repository scan configuration.":
      "Análisis de seguridad automatizado que se ejecuta cada 12 horas o bajo solicitud manual, según la configuración de análisis del repositorio.",
    "Block CI": "Bloquear CI",
    "Block PR": "Bloquear PR",
    "PR Comment": "Comentario en PR",
    "Registry Image Scan": "Análisis de imágenes del registro",
    "Report CI": "Informar en CI",
    "Security scanning of container images in the registry.": "Análisis de seguridad de las imágenes de contenedor del registro.",
    "Security scans triggered during the CI pipeline after a container image is built from code.":
      "Análisis de seguridad que se activan durante la canalización de CI después de compilar una imagen de contenedor a partir del código.",
    "Security scans triggered during the CI pipeline to evaluate source code.":
      "Análisis de seguridad que se activan durante la canalización de CI para evaluar el código fuente.",
    "Security scans triggered when a pull request or merge request is created or updated in your version control system.":
      "Análisis de seguridad que se activan cuando se crea o actualiza una solicitud de incorporación de cambios (pull request o merge request) en su sistema de control de versiones.",
    "Select the triggers that enforce this policy. For each trigger, select at least one action to take when the conditions and scope are met.":
      "Seleccione los desencadenadores que aplican esta política. Para cada desencadenador, seleccione al menos una acción que se realizará cuando se cumplan las condiciones y el alcance.",
    "Your policy is ready. Review the details and click Done to enable it.": "La política está lista. Revise los detalles y haga clic en \"Listo\" para habilitarla.",
    "Application Security Policy": "Política de Application Security",
    "Code & Image Scanner policy": "Política de escáner de código e imágenes",
    "Important": "Importante",
    "Override severity": "Anular gravedad",
    "Keep finding's severity": "Mantener la gravedad del hallazgo",
    "every 12 hours": "cada 12 horas",
    "Based on your coverage and findings, we recommend the following prevention policies. You can apply them as suggested, review and edit them using View details, or dismiss a recommendation. If dismissed, a new recommendation may appear.":
      "Según su cobertura y sus hallazgos, le recomendamos las siguientes políticas de prevención. Puede aplicarlas tal como se sugieren, revisarlas y editarlas mediante \"Ver detalles\" o descartar una recomendación. Si la descarta, puede aparecer una nueva recomendación.",
    "Dismiss": "Descartar",
    "View Assets >": "Ver activos >",
    // The body text AND title of each recommendation card (previously registered here — titles like
    // "Block KEV vulnerabilities", and the body as fixed exact-match/pattern entries) have been removed
    // from this dictionary file: content.js now excludes both
    // cas-recommendations-panel p[ucardcontent] and cas-recommendations-panel u-card-title from the
    // fixed dictionary and makes them eligible for AI (dynamic) translation instead, so a title without
    // a fixed-dictionary entry doesn't stay in English while the body is translated.
    "Select severity": "Seleccionar gravedad",
    "Show rule definition": "Mostrar definición de la regla",
    "Rule definition": "Definición de la regla",
    "Rule settings": "Configuración de la regla",
    "Select scanner": "Seleccionar escáner",
    "Agentless disk-scan": "Análisis de disco sin agente",
    "Scan storage snapshots for risks without requiring a resident agent": "Analice las instantáneas de almacenamiento en busca de riesgos sin necesidad de un agente residente",
    "Scan cluster resources and configurations for compliance and security risks via the Kubernetes API":
      "Analice los recursos y configuraciones del clúster en busca de riesgos de cumplimiento y seguridad mediante la API de Kubernetes",
    "XDR agent": "Agente XDR",
    "Offering a tailored approach to compliance validation by executing user-defined Python scripts":
      "Ofrece un enfoque personalizado para la validación del cumplimiento mediante la ejecución de scripts de Python definidos por el usuario",
    "Refresh Needed": "Es necesario actualizar",
    "The page might be outdated or the session is expired": "Es posible que la página esté desactualizada o que la sesión haya caducado",
    "Select the scanner type to execute the custom detection rule and its associated script":
      "Seleccione el tipo de escáner que ejecutará la regla de detección personalizada y su script asociado",
    "Select operating system": "Seleccionar sistema operativo",
    "Input file(s) path": "Ruta de los archivos de entrada",
    "Input file(s) path is required": "La ruta de los archivos de entrada es obligatoria",
    "Add remediation steps here": "Agregue aquí los pasos de corrección",
    "Severity is required": "La gravedad es obligatoria",
    "Kubernetes Resources is required": "Los recursos de Kubernetes son obligatorios",
    "Select Kubernetes Resources": "Seleccionar recursos de Kubernetes",
    "Review custom code execution agreement": "Revisar el acuerdo de ejecución de código personalizado",
    "You understand and agree that the Python scripts you provided for this \"Custom Code Execution\" capability will be executed in your cloud environment(s). By clicking \"I agree\", you acknowledge and agree to the following terms and conditions:":
      "Usted comprende y acepta que los scripts de Python que proporcionó para esta capacidad de \"Custom Code Execution\" se ejecutarán en sus entornos de nube. Al hacer clic en \"I agree\", reconoce y acepta los siguientes términos y condiciones:",
    "This capability is solely for the purpose of enabling you to define the compliance check rules for your cloud environment(s). Any other purposes are expressly prohibited.":
      "Esta capacidad tiene como único propósito permitirle definir las reglas de comprobación de cumplimiento para sus entornos de nube. Cualquier otro propósito está expresamente prohibido.",
    "Any actions involving": "Queda estrictamente prohibida cualquier acción que implique",
    "WRITE, MODIFY": "WRITE, MODIFY",
    ", or": ", o",
    "operations of your cloud environment(s) are strictly prohibited. It is your responsibility to ensure that your custom Python scripts only perform read-only operations of your cloud environment(s) explicitly for compliance check purposes.":
      "operaciones en sus entornos de nube. Es su responsabilidad garantizar que sus scripts de Python personalizados solo realicen operaciones de solo lectura en sus entornos de nube, exclusivamente con fines de comprobación de cumplimiento.",
    "You are solely responsible for the quality, content, use, and execution results of your Python script. You assume all risks and liabilities arising from executing your Python script(s), including any potential errors, damages, or consequences resulting from its use.":
      "Usted es el único responsable de la calidad, el contenido, el uso y los resultados de ejecución de su script de Python. Asume todos los riesgos y responsabilidades derivados de la ejecución de sus scripts de Python, incluidos los posibles errores, daños o consecuencias que resulten de su uso.",
    "I agree": "Acepto",
    "Custom code execution approved": "Ejecución de código personalizado aprobada",
    "View agreement": "Ver acuerdo",
    "Attack Path is now powered by the Graph engine.": "Attack Path ahora funciona con el motor Graph.",
    "Same concept, more powerful. Existing": "El mismo concepto, más potente. Las reglas",
    "rules continue to work and can still be created.": "existentes siguen funcionando y todavía se pueden crear.",
    "Graph rules leverage graph queries to monitor your environment for complex attack paths and potential breach paths":
      "Las reglas Graph utilizan consultas de grafos para supervisar su entorno en busca de rutas de ataque complejas y posibles rutas de vulneración",
    "Configuration rules monitor your resource configurations for potential policy violations":
      "Las reglas Configuration supervisan las configuraciones de sus recursos en busca de posibles infracciones de políticas",
    "Data rules protect against malware and enable data classification": "Las reglas Data protegen contra el malware y permiten la clasificación de datos",
    "Identity rules monitor the identities in your cloud environment for excess-or-unused permissions":
      "Las reglas Identity supervisan las identidades de su entorno de nube en busca de permisos excesivos o no utilizados",
    "Network exposure rules detect assets exposed to the Internet": "Las reglas Network exposure detectan activos expuestos a Internet",
    "AI rules monitor your AI ecosystem for risks and misconfigurations": "Las reglas AI supervisan su ecosistema de IA en busca de riesgos y configuraciones incorrectas",
    "Attack path detection using the previous rule engine. We recommend Graph for new rules":
      "Detección de rutas de ataque con el motor de reglas anterior. Recomendamos Graph para las reglas nuevas",
    "Define the rule (Rego)": "Definir la regla (Rego)",
    "For more information about the syntax": "Para obtener más información sobre la sintaxis",
    "read here": "lea aquí",
    "Assign compliance controls": "Asignar controles de cumplimiento",
    "You can assign a rule to one or more custom compliance controls to tailor compliance checks to your organization's needs.":
      "Puede asignar una regla a uno o más controles de cumplimiento personalizados para adaptar las comprobaciones de cumplimiento a las necesidades de su organización.",
    "Add controls": "Agregar controles",
    "Rule settings → Assign controls": "Configuración de la regla → Asignar controles",
    "Apply selection": "Aplicar selección",
    "Critical severity": "Gravedad crítica",
    "High severity": "Gravedad alta",
    "Medium severity": "Gravedad media",
    "Low severity": "Gravedad baja",
    "(Critical severity)": "(Gravedad crítica)",
    "(High severity)": "(Gravedad alta)",
    "(Medium severity)": "(Gravedad media)",
    "(Low severity)": "(Gravedad baja)",
    "(Keep finding's severity)": "(Mantener la gravedad del hallazgo)",
    "(every 12 hours)": "(cada 12 horas)",
    "Use default severity": "Usar gravedad predeterminada",
    "Third-party scanners can create issues only. They cannot perform blocking actions.":
      "Los escáneres de terceros solo pueden crear incidencias. No pueden realizar acciones de bloqueo.",
    "Filters findings by the file's unique cryptographic hash (e.g., searching for a specific infected binary or verifying file integrity across images).":
      "Filtra los hallazgos por el hash criptográfico único del archivo (p. ej., para buscar un binario infectado específico o verificar la integridad de un archivo entre imágenes).",
    "Malware Verdict": "Veredicto de malware",
    "Malware Verdict indicates whether detected software is confirmed malicious (Malware) or potentially unwanted and risky (Grayware).":
      "El veredicto de malware indica si el software detectado se ha confirmado como malicioso (Malware) o si es potencialmente no deseado y riesgoso (Grayware).",
    "Filters by a specific, unique finding identifier": "Filtra por un identificador de hallazgo específico y único",
    "Determines whether findings suppressed by developers are considered during policy evaluation. Yes: Suppressed findings are excluded from policy evaluation. No: All findings are evaluated by the policy, including developer-suppressed ones.":
      "Determina si los hallazgos suprimidos por los desarrolladores se tienen en cuenta durante la evaluación de la política. Sí: los hallazgos suprimidos se excluyen de la evaluación de la política. No: la política evalúa todos los hallazgos, incluidos los suprimidos por los desarrolladores.",
    "Filters findings generated by a specific AppSec detection rule.": "Filtra los hallazgos generados por una regla de detección de AppSec específica.",
    "Could not parse detection rule": "No se pudo analizar la regla de detección",
    "Filters findings based on labels attached to the matched AppSec rules, allowing you to filter and select multiple rules at once.":
      "Filtra los hallazgos según las etiquetas asociadas a las reglas de AppSec coincidentes, lo que permite filtrar y seleccionar varias reglas a la vez.",
    "Filters based on the category of findings generated by the rule.": "Filtra según la categoría de los hallazgos generados por la regla.",
    "Scans your cloud environments to detect configuration drift between deployed resources and their IaC definitions.":
      "Analiza sus entornos de nube para detectar desviaciones de configuración entre los recursos implementados y sus definiciones de IaC.",
    "Exclude any items that match this query:": "Excluir los elementos que coincidan con esta consulta:",
    "Add filters": "Agregar filtros",
    "Results Preview": "Vista previa de resultados",
    "Back to Policies": "Volver a políticas",
    "Vulnerability Issue Policies": "Políticas de incidencias de vulnerabilidades",
    "Vulnerability Policy": "Política de vulnerabilidades",
    "Vulnerability Policies": "Políticas de vulnerabilidades",
    "Choose Actions": "Elegir acciones",

    // --- Vulnerability Policies - Issue Creation screen ---
    "Vulnerability Policies - Issue Creation": "Políticas de vulnerabilidades - Creación de incidencias",
    "Add Policy": "Agregar política",
    "Exclusions": "Exclusiones",
    "Globally Ignored CVEs, Assets, and Asset Groups": "CVE, activos y grupos de activos ignorados globalmente",
    "Issue Creation": "Creación de incidencias",
    "Match Criteria": "Criterios de coincidencia",
    "Prevention": "Prevención",
    "disabled": "deshabilitado",
    "CVE Default": "CVE predeterminado",
    "CVEs Confirmed Vulnerable Externally": "CVE con vulnerabilidad confirmada externamente",
    "CVEs with 80%+ EPSS Scores": "CVE con puntuaciones EPSS del 80 % o más",
    "CVEs with CVSS Critical Severity": "CVE con gravedad CVSS crítica",
    "CVEs with CVSS High Severity": "CVE con gravedad CVSS alta",
    "CVEs with CVSS Medium Severity": "CVE con gravedad CVSS media",
    "CVSS Severity = Critical": "Gravedad CVSS = Crítica",
    "CVSS Severity = High": "Gravedad CVSS = Alta",
    "CVSS Severity = Medium": "Gravedad CVSS = Media",
    "EPSS Score >= 80%": "Puntuación EPSS >= 80%",
    "Finding Sources Contains Cortex Attack Surface Testing":
      "Los orígenes del hallazgo contienen Cortex Attack Surface Testing",
    "Package In Use = Yes": "Paquete en uso = Sí",

    // --- Rules and Policies screen ---
    "Create dynamic groups by applying asset filters, or build static groups by selecting assets manually.":
      "Cree grupos dinámicos aplicando filtros de activos o cree grupos estáticos seleccionando activos manualmente.",
    "The selected policy will be deleted.": "Se eliminará la política seleccionada.",
    "The following text will be displayed as part of the issue remediation guidance":
      "El siguiente texto se mostrará como parte de las instrucciones de corrección de la incidencia",
    "Delete Policy": "Eliminar política",
    "Disable Policy": "Deshabilitar política",
    "Disabling policy will resolve the open issues matching the policy.":
      "Al deshabilitar la política, se resolverán las incidencias abiertas que coincidan con ella.",
    "Deleting policy will resolve the open issues in this policy scope.":
      "Al eliminar la política, se resolverán las incidencias abiertas dentro del alcance de esta política.",
    "Grace Period (Deployment)": "Período de gracia (implementación)",
    "Number of days to allow before blocking": "Número de días permitidos antes del bloqueo",
    "The selected policies will be disabled. Are you sure you want to proceed?":
      "Se deshabilitarán las políticas seleccionadas. ¿Está seguro de que desea continuar?",
    "The policy will no longer evaluate against findings": "La política dejará de evaluarse con respecto a los hallazgos",
    "The selected policies will be deleted. Are you sure you want to proceed?":
      "Se eliminarán las políticas seleccionadas. ¿Está seguro de que desea continuar?",
    // Kept verbatim (the sentence ends abruptly at "try adjusting your search to find.").
    // This is a distinct variant from the similar string in asset-inventory-screen.js
    // ("...to find what you're looking for.") with a different ending, so it is
    // registered as its own entry.
    "We couldn’t find what you’re looking for, try adjusting your search to find.":
      "No encontramos lo que busca. Intente ajustar su búsqueda.",
    "Created by:": "Creado por:",
    "Modified by:": "Modificado por:",
    "Created on:": "Fecha de creación:",
    "Modified on:": "Fecha de modificación:",
    "Total": "Total",
    "Edit policy": "Editar política",
    "Duplicate policy": "Duplicar política",
    "View Policy Details": "Ver detalles de la política",
    "Export policy": "Exportar política",
    "You are about to delete 1 policy": "Está a punto de eliminar 1 política",
    "* Choosing delete you will also save other unsaved changes in the policy screen":
      "* Si elige eliminar, también se guardarán los demás cambios no guardados en la pantalla de la política",
    "Delete and Save": "Eliminar y guardar",
    "Delete Custom Detection Rule": "Eliminar regla de detección personalizada",
    "Data types": "Tipos de datos",
    "Severity for Compliance": "Gravedad para cumplimiento",
    "Rule Details": "Detalles de la regla",
    "Rule Definition (Rego)": "Definición de la regla (Rego)",
    "Rule Definition (Python)": "Definición de la regla (Python)",
    "Inputs": "Entradas",
  },

  patterns: [
    { re: /^Based on the categorization, finding type will be "(.+)"$/, tpl: "Según la categorización, el tipo de hallazgo será \"$1\"" },
    { re: /^The (\[.*\]) dataset is not supported for the '(.+)' rule type\.$/, tpl: "El conjunto de datos $1 no es compatible con el tipo de regla \"$2\"." },
    { re: /^Provided xdm\.asset\.type\.id (\[.*\]) is invalid\.$/, tpl: "El xdm.asset.type.id $1 proporcionado no es válido." },
    { re: /^Maximum of 50 labels \((\d+)\/50\)$/, tpl: "Máximo de 50 etiquetas ($1/50)" },
    { re: /^Step (\d+)\/(\d+)$/, tpl: "Paso $1/$2" },
    { re: /^Condition Group\s+(\d+)$/, tpl: "Grupo de condiciones $1" },
    // (Removed: a pattern for "We found the application "X" with no critical/high vulnerabilities.
    // ..." used to live here. See the comment in the exact block above — this text now goes through AI
    // translation via content.js's cas-recommendations-panel p[ucardcontent] exclusion instead.)
    { re: /^(\d+)\s+selected asset groups$/, tpl: "$1 grupos de activos seleccionados" },
    { re: /^(\d+)\s+Selected rules$/, tpl: "$1 reglas seleccionadas" },
    { re: /^Total\s+([\d,]+)\s+rules selected$/, tpl: "Total de $1 reglas seleccionadas" },
    { re: /^(\d+)\s+selected predefined asset scopes$/, tpl: "$1 alcances de activos predefinidos seleccionados" },
    { re: /^There are currently ([\d,]+) Issues generated from these policies\.$/,
      tpl: "Actualmente hay $1 incidencias generadas a partir de estas políticas." },
    // "There are currently 0 Issues generated from these policies. No new Issues will be generated from these policies after disabling."
    { re: /^There are currently ([\d,]+) Issues generated from these policies\. No new Issues will be generated from these policies after disabling\.$/,
      tpl: "Actualmente hay $1 incidencias generadas a partir de estas políticas. Después de deshabilitarlas, no se generarán nuevas incidencias a partir de estas políticas." },
    // The rule name (an identifier) is left untranslated.
    { re: /^The selected rule, (.+), will be disabled\.$/, tpl: "Se deshabilitará la regla seleccionada, \"$1\"." },
    // "The selected rule, MCP Server, will be enabled. As a result, 0 estimated issues will be generated."
    { re: /^The selected rule, (.+), will be enabled\. As a result, ([\d,]+) estimated issues will be generated\.$/,
      tpl: "Se habilitará la regla seleccionada, \"$1\". Como resultado, se generarán aproximadamente $2 incidencias." },
    { re: /^You are about to delete ([\d,]+) polic(?:y|ies)$/, tpl: "Está a punto de eliminar $1 políticas" },
    { re: /^([\d,]+) Polic(?:y|ies) will be disabled$/, tpl: "Se deshabilitarán $1 políticas" },
    { re: /^([\d,]+) Polic(?:y|ies) will be enabled$/, tpl: "Se habilitarán $1 políticas" },
    // The policy name (an identifier) is left untranslated.
    { re: /^Policy (.+) will be deleted$/, tpl: "Se eliminará la política \"$1\"" },
    { re: /^Are you sure you want to delete the rule (.+)\?$/, tpl: "¿Está seguro de que desea eliminar la regla \"$1\"?" },
    // The rule name (an identifier) is left untranslated.
    { re: /^Rule (.+) will be deleted$/, tpl: "Se eliminará la regla \"$1\"" },
    { re: /^([\d,]+) Rules? will be disabled$/, tpl: "Se deshabilitarán $1 reglas" },
    { re: /^([\d,]+) Rules? will be enabled$/, tpl: "Se habilitarán $1 reglas" },
    // "This is a Python-based rule. The Logic cannot be edited but can be viewed for Terraform"
    // The target type (e.g. Terraform — the language/resource kind the rule applies to) is variable.
    { re: /^This is a Python-based rule\. The Logic cannot be edited but can be viewed for (.+)$/,
      tpl: "Esta es una regla basada en Python. La lógica no se puede editar, pero se puede ver para $1" },
    { re: /^Executables \((\d+)\)$/, tpl: "Ejecutables ($1)" },
  ],

  skip: [],
};
