"""Generates public/Luiz_Fernando_CV.pdf. Usage: python3 scripts/generate_cv.py public/Luiz_Fernando_CV.pdf"""
import sys
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import mm
BLUE=colors.HexColor("#0a6ed1"); DARK=colors.HexColor("#1d2d3e")
H=ParagraphStyle('h',fontName='Helvetica-Bold',fontSize=18,textColor=DARK,leading=20)
SUB=ParagraphStyle('s',fontName='Helvetica-Bold',fontSize=10.5,textColor=BLUE,leading=13)
SM=ParagraphStyle('sm',fontName='Helvetica',fontSize=8.5,textColor=colors.HexColor("#556b82"),leading=11)
SEC=ParagraphStyle('sec',fontName='Helvetica-Bold',fontSize=10.5,textColor=BLUE,spaceBefore=5,spaceAfter=2)
B=ParagraphStyle('b',fontName='Helvetica',fontSize=9.5,leading=11.2,textColor=DARK)
R=ParagraphStyle('r',parent=B,fontName='Helvetica-Bold',fontSize=10)
def bl(items): return ListFlowable([ListItem(Paragraph(i,B),leftIndent=10,value='•') for i in items],bulletType='bullet',start='•',leftIndent=10,bulletFontSize=8)
def line(): 
    t=Table([['']],colWidths=[186*mm]); t.setStyle(TableStyle([('LINEBELOW',(0,0),(-1,-1),0.6,BLUE)])); return t
s=[]
s+= [Paragraph("LUIZ FERNANDO GONÇALVES DA SILVA",H),
 Paragraph("SAP MM / S/4HANA Sourcing &amp; Procurement",SUB),
 Paragraph("SAP Certified | MM · MDG · BTP | 22+ Years in IT",SM),Spacer(1,3),
 Paragraph("Sorocaba, São Paulo, Brazil · Open to remote opportunities in Brazil and internationally<br/>+55 15 99704-3077 · lfernandosap@gmail.com · https://www.linkedin.com/in/luizfernando-sap-mm/ · lfernandosap.github.io/sap-portfolio-hub",SM),line()]
s+=[Paragraph("SUMMARY",SEC),Paragraph("IT professional with 22+ years of experience in critical systems, infrastructure and business processes, SAP certified and focused on SAP MM / S/4HANA Sourcing &amp; Procurement functional consulting and support. Since January 2026, practicing continuously in an S/4HANA training environment (Cromos IT) with SAP GUI and SAP Fiori, covering Procure-to-Pay, material and supplier master data, info records, source lists, goods movements and physical inventory. Goal: SAP MM functional consulting and support roles, with MDG and BTP as complementary skills.",B)]
s+=[Paragraph("SAP CERTIFICATIONS",SEC),bl([
 "<b>SAP Certified – SAP S/4HANA Cloud Private Edition – Sourcing and Procurement</b> — C_TS452_2410 (Nov 2025) · C_TS452_2022 (Dec 2025)",
 "<b>SAP Certified – SAP Master Data Governance</b> — C_MDG_1909 (2025)",
 "<b>SAP Certified – Solution Architect – SAP BTP</b> — P_BTPA_2511 (2025)"])]
s+=[Paragraph("PROFESSIONAL EXPERIENCE",SEC),
 Paragraph("Systems &amp; IT Infrastructure Analyst | ERP Development &amp; Technology Projects",R),
 Paragraph("São Paulo State Military Police · Dec 2003 – Present",SM),bl([
 "Role-based access profile and permission management for 500+ employees.",
 "Infrastructure support and administration: about 120 networked computers, servers, storage and the unit's network.",
 "End-to-end project follow-up: requirements and contract analysis, development, rollout, adjustments and delivery.",
 "Work with the logistics department to analyze and optimize materials, inventory and fleet routines.",
 "<b>SGA (2022 – present):</b> led the implementation of the administrative management system (procurement and finance), built by a contracted vendor: requirements gathering, key user coordination and post-go-live training. Expanded in August 2026 to the entire State Highway Police, about 25 units.",
 "<b>PPRI – Smart Highway Police Program (2018 – present):</b> requirements analysis, screen design, staging testing and user training. Digitized a process previously handled through Excel spreadsheets sent by email.",
 "<b>BOe (2017 – 2018):</b> requirements analysis, testing, support and on-site user training. Military Police mobile app and web system with 50,000+ users, still in operation.",
 "<b>BOATRv (2010 – 2017):</b> prototyping, requirements analysis, testing and post-implementation support. First electronic incident reporting system of the State Highway Police, around 5,000 users."]),
 Spacer(1,4),Paragraph("Creator &amp; Developer – 5BPRv ERP",R),
 Paragraph("Self-initiated project · Jul 2025 – Present · Live in production since October 2026",SM),bl([
 "Single-handedly designed and built an institutional ERP with 8 modules and 20+ business entities, from requirements analysis to production go-live.",
 "Logistics, fleet, materials, inventory, personnel and reporting modules, with movement traceability and audit trail.",
 "Role-based access control (RBAC); PDF generation and Excel export with institutional layout.",
 "Stack: Python · FastAPI · PostgreSQL · SQLAlchemy · React · Vite · MUI · REST API · JWT.",
 "Custom ERP built outside the SAP platform; materials, inventory and fleet processes apply SAP MM and MDG principles."]),
 Spacer(1,4),Paragraph("SAP S/4HANA MM Hands-on Practice – Sourcing &amp; Procurement",R),
 Paragraph("Cromos IT (training environment) · Jan 2026 – Present",SM),bl([
 "Procure-to-Pay: purchase requisition, RFQ, purchase order, goods receipt and invoice verification (MIRO).",
 "Master data: materials, suppliers (Business Partner), purchasing info records and source lists.",
 "Inventory management: movement types, stock transfers and physical inventory.",
 "SAP GUI and SAP Fiori; Clean Core principles."])]
rows=[["SAP Core","S/4HANA MM · SAP MDG · SAP BTP · Procure-to-Pay (P2P) · SAP Fiori · Clean Core"],
["SAP Processes","Purchase Requisition · Purchase Order · Goods Receipt · Invoice Verification · Master Data (Material/BP)"],
["Development","Python / FastAPI · React / Vite · PostgreSQL · REST API / JWT · SQLAlchemy"],
["Projects & Processes","Requirements Analysis · Key User Coordination · User Training · RBAC / Audit Trail · Fleet Management"]]
t=Table([[Paragraph("<b>%s</b>"%a.replace('&','&amp;'),B),Paragraph(b,B)] for a,b in rows],colWidths=[38*mm,148*mm])
t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('BOTTOMPADDING',(0,0),(-1,-1),1),('TOPPADDING',(0,0),(-1,-1),0),('LEFTPADDING',(0,0),(-1,-1),0)]))
s+=[Paragraph("SKILLS",SEC),t]
s+=[Paragraph("EDUCATION",SEC),bl(["<b>MBA — Logistics, Materials and Supply Chain Management</b> — UniFECAF · Completed in 2026 (diploma being issued)","<b>Technologist in Information Technology</b> — Universidade Paulista (UNIP) · 2010 – 2013"])]
s+=[Paragraph("LANGUAGES",SEC),Paragraph("Portuguese — Native · English — Intermediate (actively studying)",B)]
d=SimpleDocTemplate(sys.argv[1],pagesize=A4,leftMargin=12*mm,rightMargin=12*mm,topMargin=9*mm,bottomMargin=9*mm,title="Luiz Fernando — CV",author="Luiz Fernando Gonçalves da Silva")
d.build(s)
