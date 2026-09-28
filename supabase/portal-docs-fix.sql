-- Ajuste documentos AXIA (correr una vez en SQL Editor)
delete from public.documents
where title = 'Propuesta HTML (archivo local / PDF)';

update public.documents
set
  title = 'Propuesta comercial',
  downloadable = true,
  visible_to_client = true
where title = 'Propuesta comercial (web)'
   or (href = '/propuestas/axia' and kind = 'presupuesto');
