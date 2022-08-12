from ldap3 import Server, Connection, ALL



server = Server("LDAP://ag0319006wd101d")
conn = Connection(server)

print(conn.repr())

