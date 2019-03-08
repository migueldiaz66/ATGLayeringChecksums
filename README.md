******************************************************************************************
no pregunta password scp localhost:

https://stackoverflow.com/questions/7439563/how-to-ssh-to-localhost-without-password

1. ssh-keygen -t rsa
Press enter for each line 
2. cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
3. chmod og-wx ~/.ssh/authorized_keys 

**********************************************************************

ejemplo ansible Trae los archivos via scp 

ansible-playbook updateSHA1_Diff_SVNPRODHA_vs_SERVERPRODHA.yml --extra-vars "cmd='scp -r mdiazm@127.0.0.1:/u01/oracle/atg/data/ear/lp-store-a.ear/atg_bootstrap.war/WEB-INF/ATG-INF/home/servers /tmp/updateSHA1_Diff_SVNPRODHA_vs_SERVERPRODHA'"


ansible-playbook updateSHA1_Diff_SVNPRODHA_vs_SERVERPRODHA.yml --extra-vars "cmd='scp -r wldamin@172.16.213.192:/u01/oracle/atg/data/ear/lp-store-a.ear/atg_bootstrap.war/WEB-INF/ATG-INF/home/servers /tmp/updateSHA1_Diff_SVNPRODHA_vs_SERVERPRODHA'"

***************************************************************************
srv   172.16.213.192 Adminserver QA wladmin
@ LPW3bl0g1c4tg113 -= a
*********************************************************************************

sudo systemctl start sshd.service;
sudo systemctl stop sshd.service;
sudo systemctl enable sshd.service;
sudo systemctl disable sshd.service;
****************************************************************************************
